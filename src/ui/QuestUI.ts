import Phaser from "phaser";

export default class QuestUI {

    private scene: Phaser.Scene;

    private background: Phaser.GameObjects.Rectangle;
    private title: Phaser.GameObjects.Text;
    private quest: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

        this.background = scene.add.rectangle(
            140,
            70,
            240,
            90,
            0x000000,
            0.75
        );

        this.background
            .setStrokeStyle(2, 0xffffff)
            .setScrollFactor(0)
            .setDepth(1000);

        this.title = scene.add.text(
            35,
            35,
            "📋 CURRENT QUEST",
            {
                fontSize: "18px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        );

        this.title
            .setScrollFactor(0)
            .setDepth(1001);

        this.quest = scene.add.text(
            35,
            65,
            "",
            {
                fontSize: "16px",
                color: "#ffffff"
            }
        );

        this.quest
            .setScrollFactor(0)
            .setDepth(1001);
    }

    public setQuest(text: string) {
        this.quest.setText("☐ " + text);
    }

    public completeQuest(text: string) {
        this.quest.setText("✔ " + text);

        this.scene.tweens.add({
            targets: this.quest,
            scale: 1.2,
            duration: 150,
            yoyo: true
        });
    }
}