import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {

    private dialogueBox!: Phaser.GameObjects.Rectangle;
    private dialogueText!: Phaser.GameObjects.Text;

    private messages: string[] = [];
    private currentIndex = 0;

    private spaceKey!: Phaser.Input.Keyboard.Key;
    private enterKey!: Phaser.Input.Keyboard.Key;

    constructor() {
        super("UIScene");
    }

    create() {

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.dialogueBox = this.add.rectangle(
            width / 2,
            height - 90,
            width - 40,
            140,
            0x000000,
            0.85
        );

        this.dialogueBox
            .setStrokeStyle(3, 0xffffff)
            .setScrollFactor(0)
            .setDepth(9999)
            .setVisible(false);

        this.dialogueText = this.add.text(
            40,
            height - 145,
            "",
            {
                fontSize: "22px",
                color: "#ffffff",
                wordWrap: {
                    width: width - 80
                }
            }
        );

        this.dialogueText
            .setScrollFactor(0)
            .setDepth(10000)
            .setVisible(false);

        this.spaceKey = this.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.enterKey = this.input.keyboard!.addKey(
    Phaser.Input.Keyboard.KeyCodes.ENTER
);
this.input.on("pointerdown", () => {

    if (this.dialogueBox.visible) {
        this.nextDialogue();
    }

});
    }

    update() {

        if (
    this.dialogueBox.visible &&
    (
        Phaser.Input.Keyboard.JustDown(this.spaceKey) ||
        Phaser.Input.Keyboard.JustDown(this.enterKey)
    )
) {
    this.nextDialogue();
}

    }

    public showDialogue(dialogue: string[]) {

        this.messages = dialogue;
        this.currentIndex = 0;

        this.dialogueBox.setVisible(true);
        this.dialogueText.setVisible(true);

        this.dialogueText.setText(this.messages[0]);

        this.scene.bringToTop();
    }

    private nextDialogue() {

        this.currentIndex++;

        if (this.currentIndex >= this.messages.length) {

            this.hideDialogue();
            return;

        }

        this.dialogueText.setText(
            this.messages[this.currentIndex]
        );
    }

    public hideDialogue() {

        this.dialogueBox.setVisible(false);
        this.dialogueText.setVisible(false);

    }

    public isDialogueVisible(): boolean {

        return this.dialogueBox.visible;

    }

}