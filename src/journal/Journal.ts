import Phaser from "phaser";

export default class Journal {

    private scene: Phaser.Scene;
    private bg: Phaser.GameObjects.Rectangle;
    private title: Phaser.GameObjects.Text;
    private content: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

        this.bg = scene.add.rectangle(
            400,
            250,
            500,
            350,
            0x000000,
            0.9
        );

        this.bg.setDepth(3000);
        this.bg.setScrollFactor(0);
        this.bg.setVisible(false);

        this.title = scene.add.text(
            180,
            90,
            "📖 QUANTUM JOURNAL",
            {
                fontSize: "24px",
                color: "#FFD700"
            }
        );

        this.title.setDepth(3001);
        this.title.setScrollFactor(0);
        this.title.setVisible(false);

        this.content = scene.add.text(
            180,
            140,
            "",
            {
                fontSize: "18px",
                color: "#ffffff",
                wordWrap: { width: 430 }
            }
        );

        this.content.setDepth(3001);
        this.content.setScrollFactor(0);
        this.content.setVisible(false);
    }

    public open(text: string) {

        this.bg.setVisible(true);
        this.title.setVisible(true);
        this.content.setVisible(true);

        this.content.setText(text);
    }

    public close() {

        this.bg.setVisible(false);
        this.title.setVisible(false);
        this.content.setVisible(false);

    }

    public isOpen() {
        return this.bg.visible;
    }
}