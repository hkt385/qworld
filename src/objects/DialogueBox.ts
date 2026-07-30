import Phaser from "phaser";

export default class DialogueBox {

    private scene: Phaser.Scene;

    private background: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;

    private messages: string[] = [];
    private index = 0;

    private opened = false;

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

        const cam = scene.cameras.main;

        this.background = scene.add.rectangle(
            cam.width / 2,
            cam.height - 80,
            cam.width - 40,
            120,
            0x000000,
            0.85
        );

        this.background.setStrokeStyle(3, 0xffffff);
        this.background.setScrollFactor(0);
        this.background.setDepth(10000);
        this.background.setVisible(false);

        this.text = scene.add.text(
            30,
            cam.height - 120,
            "",
            {
                fontSize: "20px",
                color: "#ffffff",
                wordWrap: {
                    width: cam.width - 60
                }
            }
        );

        this.text.setScrollFactor(0);
        this.text.setDepth(10001);
        this.text.setVisible(false);
    }

    start(messages: string[]) {

        this.messages = messages;
        this.index = 0;
        this.opened = true;

        this.background.setVisible(true);
        this.text.setVisible(true);

        this.text.setText(this.messages[0]);

        this.scene.children.bringToTop(this.background);
        this.scene.children.bringToTop(this.text);
    }

    next() {

        if (!this.opened) return;

        this.index++;

        if (this.index >= this.messages.length) {
            this.close();
            return;
        }

        this.text.setText(this.messages[this.index]);
    }

    close() {

        this.opened = false;

        this.background.setVisible(false);
        this.text.setVisible(false);
    }

    isOpen() {
        return this.opened;
    }
}