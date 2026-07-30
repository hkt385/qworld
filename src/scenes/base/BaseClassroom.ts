import Phaser from "phaser";
import AudioManager from "../../utils/AudioManager";

export interface ClassroomConfig {

    background: string;

    teacherTexture: string;
    assistantTexture: string;

    teacherScale: number;
    assistantScale: number;

    teacherOffsetX: number;
    assistantOffsetX: number;

    messages: string[];

    nextScene: string;

    music?: string;

}

export default abstract class BaseClassroom extends Phaser.Scene {

    protected config: ClassroomConfig;

    protected spaceKey!: Phaser.Input.Keyboard.Key;
    protected enterKey!: Phaser.Input.Keyboard.Key;

    protected dialogueBox!: Phaser.GameObjects.Rectangle;
    protected speakerText!: Phaser.GameObjects.Text;
    protected dialogueText!: Phaser.GameObjects.Text;
    protected continueText!: Phaser.GameObjects.Text;

    protected currentMessage = 0;
    protected currentText = "";
protected displayedText = "";

protected typing = false;
protected typingEvent?: Phaser.Time.TimerEvent;

    constructor(
        sceneKey: string,
        config: ClassroomConfig
    ) {

        super(sceneKey);

        this.config = config;

    }

    create() {

        if (this.config.music) {

            AudioManager.play(
                this,
                this.config.music,
                0.28
            );

        }

        localStorage.setItem(
            "currentScene",
            this.scene.key
        );

        const width = this.scale.width;
        const height = this.scale.height;
        const dialogWidth = 720;
const dialogHeight = 150;

const dialogX = width / 2;
const dialogY = height - 100;

const dialogLeft = dialogX - dialogWidth / 2;
const padding = 25;

        // ---------------- Background ----------------

        this.add.image(
            width / 2,
            height / 2,
            this.config.background
        )
        .setDisplaySize(width, height);

        // ---------------- Professor ----------------

        this.add.image(
            width / 2 + this.config.teacherOffsetX,
            height * 0.42,
            this.config.teacherTexture
        )
        .setScale(this.config.teacherScale)
        .setDepth(10);

        // ---------------- Assistant ----------------

        this.add.image(
            width / 2 + this.config.assistantOffsetX,
            height * 0.42,
            this.config.assistantTexture
        )
        .setScale(this.config.assistantScale)
        .setDepth(10);

        // ---------------- Dialogue Box ----------------

        this.dialogueBox = this.add.rectangle(
    dialogX,
    dialogY,
    dialogWidth,
    dialogHeight,
    0x1B102F,
    0.75
);

        this.dialogueBox.setStrokeStyle(
            2,
            0xffffff
        );

        // ---------------- Speaker ----------------

       this.speakerText = this.add.text(
    dialogLeft + padding,
    dialogY - 60,
    "",
    {
        fontSize: "24px",
        color: "#FFD700",
        fontStyle: "bold"
    }
);

        // ---------------- Dialogue ----------------

        this.dialogueText = this.add.text(
    dialogLeft + padding,
    dialogY - 25,
    "",
    {
        fontSize: "22px",
        color: "#FFFFFF",
        wordWrap: {
            width: dialogWidth - 50
        }
    }
);

        // ---------------- Continue ----------------

        this.continueText = this.add.text(
    dialogX + dialogWidth / 2 - 280,
    dialogY + 45,
    "▶ SPACE • ENTER • CLICK",
    {
        fontSize: "18px",
        color: "#FFD700"
    }
);

        this.tweens.add({

            targets: this.continueText,

            alpha: 0,

            duration: 600,

            yoyo: true,

            repeat: -1

        });

        // Keys

        this.spaceKey = this.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.enterKey = this.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.ENTER
        );
        //this.showMessage(0);

this.input.on(
    "pointerdown",
    () => {

        this.nextMessage();

    }
);

    }
    protected showMessage(index: number) {

    const msg = this.config.messages[index];

    this.currentText = msg;

    this.displayedText = "";

    this.typing = true;

    if (this.typingEvent) {
    this.typingEvent.destroy();
    this.typingEvent = undefined;
}

    if (msg.startsWith("Professor:")) {

        this.speakerText.setText("👨‍🏫 Professor Qubit");

        this.currentText =
            msg.replace("Professor:", "").trim();

    }
    else if (msg.startsWith("QBot:")) {

        this.speakerText.setText("🤖 QBot");

        this.currentText =
            msg.replace("QBot:", "").trim();

    }
    else {

        this.speakerText.setText("");

    }

    this.dialogueText.setText("");

    let indexChar = 0;

    this.typingEvent = this.time.addEvent({

        delay: 25,

        repeat: this.currentText.length - 1,

        callback: () => {

            this.displayedText +=
                this.currentText[indexChar];

            this.dialogueText.setText(
                this.displayedText
            );

            indexChar++;

            if (indexChar >= this.currentText.length) {

                this.typing = false;

            }

        }

    });

    
}
protected finishTyping() {

    if (!this.typing)
        return;

    this.typingEvent?.remove(false);

    this.dialogueText.setText(
        this.currentText
    );

    this.typing = false;

}
protected nextMessage() {

    if (this.typing) {

        this.finishTyping();

        return;

    }

    this.currentMessage++;

    if (
        this.currentMessage <
        this.config.messages.length
    ) {

        this.showMessage(
            this.currentMessage
        );

    }
    else {

        if (this.config.music) {

            AudioManager.stop(
                this,
                this.config.music
            );

        }

        this.scene.start(
            this.config.nextScene
        );

    }

}
update() {

    if (
        Phaser.Input.Keyboard.JustDown(
            this.spaceKey
        )
    ) {

        this.nextMessage();

    }

    if (
        Phaser.Input.Keyboard.JustDown(
            this.enterKey
        )
    ) {

        this.nextMessage();

    }

}

}
