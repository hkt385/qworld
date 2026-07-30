import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

export default class BinaryPuzzle extends Phaser.Scene {

    private stage = 1;
    private clicked = 0;
    

    constructor() {
        super("BinaryPuzzle");
    }

    create() {

        AudioManager.play(this, "puzzleMusic", 0.05);

        localStorage.setItem("currentScene", "BinaryPuzzle");

        this.cameras.main.setBackgroundColor("#2E2A4F");

        this.showStage1();
    }

    private showStage1() {

        this.children.removeAll();

        const width = this.scale.width;

        this.add.text(
            width / 2,
            50,
            "Binary Puzzle",
            {
                fontSize: "36px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            100,
            "QBot: Click every ONE-BIT value",
            {
                fontSize: "24px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        this.createButtons(
            ["0", "1"],
            250
        );
    }

    private createButtons(values: string[], startY: number) {

        const width = this.scale.width;

        this.clicked = 0;

        const columns = Math.min(4, values.length);
        const gap = 120;

        const startX =
            width / 2 -
            ((columns - 1) * gap) / 2;

        values.forEach((value, index) => {

            const col = index % columns;
            const row = Math.floor(index / columns);

            const x = startX + col * gap;
            const y = startY + row * 100;

            const btn = this.add.rectangle(
                x,
                y,
                90,
                60,
                0x4CAF50
            )
                .setStrokeStyle(2, 0xffffff)
                .setInteractive({ useHandCursor: true });

            this.add.text(
                x,
                y,
                value,
                {
                    fontSize: "28px",
                    color: "#000000",
                    fontStyle: "bold"
                }
            ).setOrigin(0.5);

            btn.on("pointerover", () => {
                btn.setFillStyle(0x66BB6A);
            });

            btn.on("pointerout", () => {
                btn.setFillStyle(0x4CAF50);
            });

            btn.on("pointerdown", () => {

                btn.disableInteractive();
                btn.setFillStyle(0x999999);

                this.clicked++;

                if (this.clicked === values.length) {
                    this.time.delayedCall(500, () => {
                        this.nextStage();
                    });
                }

            });

        });

    }

    private nextStage() {

        this.children.removeAll();

        const width = this.scale.width;

        this.add.text(
            width / 2,
            50,
            "Binary Puzzle",
            {
                fontSize: "36px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        if (this.stage === 1) {

            this.stage++;

            this.add.text(
                width / 2,
                100,
                "QBot: Great! Two bits have FOUR combinations.",
                {
                    fontSize: "24px",
                    color: "#FFFFFF",
                    align: "center"
                }
            ).setOrigin(0.5);

            this.createButtons(
                ["00", "01", "10", "11"],
                250
            );

        }
        else if (this.stage === 2) {

            this.stage++;

            this.add.text(
                width / 2,
                100,
                "QBot: Excellent! Three bits have EIGHT combinations.",
                {
                    fontSize: "24px",
                    color: "#FFFFFF",
                    align: "center"
                }
            ).setOrigin(0.5);

            this.createButtons(
                [
                    "000", "001", "010", "011",
                    "100", "101", "110", "111"
                ],
                250
            );

        }
        else {

            this.add.text(
                width / 2,
                260,
                "🎉 Puzzle Complete!",
                {
                    fontSize: "42px",
                    color: "#00FF66",
                    fontStyle: "bold"
                }
            ).setOrigin(0.5);

            this.add.text(
                width / 2,
                340,
                "QBot: Every extra bit doubles the\nnumber of possible values!",
                {
                    fontSize: "24px",
                    color: "#FFFFFF",
                    align: "center",
                    wordWrap: {
                        width: 650
                    }
                }
            ).setOrigin(0.5);

            this.time.delayedCall(3000, () => {

                AudioManager.stop(this, "puzzleMusic");

                this.scene.start("Quiz1");

            });

        }

    }

}