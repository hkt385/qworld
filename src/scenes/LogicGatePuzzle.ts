import Phaser from "phaser";

interface Puzzle {
    title: string;
    question: string;
    options: string[];
    answer: number;
}

export default class LogicGatePuzzle extends Phaser.Scene {

    private puzzles: Puzzle[] = [
        {
            title: "AND Gate",
            question: "Input A = 1\nInput B = 1\n\nOutput = ?",
            options: ["0", "1"],
            answer: 1
        },
        {
            title: "AND Gate",
            question: "Input A = 1\nInput B = 0\n\nOutput = ?",
            options: ["0", "1"],
            answer: 0
        },
        {
            title: "OR Gate",
            question: "Input A = 0\nInput B = 1\n\nOutput = ?",
            options: ["0", "1"],
            answer: 1
        },
        {
            title: "NOT Gate",
            question: "Input = 0\n\nOutput = ?",
            options: ["0", "1"],
            answer: 1
        },
        {
            title: "NOT Gate",
            question: "Input = 1\n\nOutput = ?",
            options: ["0", "1"],
            answer: 0
        }
    ];

    private current = 0;
    private score = 0;

    constructor() {
        super("LogicGatePuzzle");
    }

    create() {

        if (!this.sound.get("puzzleMusic")) {

            this.sound.add("puzzleMusic", {
                loop: true,
                volume:
                    Number(localStorage.getItem("musicVolume") ?? 1) * 0.05
            }).play();

        }

        localStorage.setItem("currentScene", "LogicGatePuzzle");

        this.cameras.main.setBackgroundColor("#24123B");

        this.showPuzzle();
    }

    private showPuzzle() {

        this.children.removeAll();

        const width = this.scale.width;
        const height = this.scale.height;

        if (this.current >= this.puzzles.length) {

            this.sound.stopByKey("puzzleMusic");
            this.scene.start("Quiz2");
            return;

        }

        const puzzle = this.puzzles[this.current];

        // Title
        this.add.text(
            width / 2,
            60,
            puzzle.title,
            {
                fontSize: "40px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Question
        this.add.text(
            width / 2,
            170,
            puzzle.question,
            {
                fontSize: "30px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        // Buttons
        puzzle.options.forEach((option, index) => {

            const y = 340 + index * 100;

            const button = this.add.rectangle(
                width / 2,
                y,
                260,
                70,
                0x6A0DAD
            )
                .setStrokeStyle(2, 0xFFFFFF)
                .setInteractive({ useHandCursor: true });

            this.add.text(
                width / 2,
                y,
                option,
                {
                    fontSize: "32px",
                    color: "#FFFFFF",
                    fontStyle: "bold"
                }
            ).setOrigin(0.5);

            button.on("pointerover", () => {
                button.setFillStyle(0x8A2BE2);
            });

            button.on("pointerout", () => {
                button.setFillStyle(0x6A0DAD);
            });

            button.on("pointerdown", () => {

                button.disableInteractive();

                if (index === puzzle.answer) {

                    this.score++;
                    button.setFillStyle(0x00AA00);

                    this.add.text(
                        width / 2,
                        height - 110,
                        "✅ Correct!",
                        {
                            fontSize: "28px",
                            color: "#00FF66"
                        }
                    ).setOrigin(0.5);

                } else {

                    button.setFillStyle(0xCC0000);

                    this.add.text(
                        width / 2,
                        height - 110,
                        "❌ Incorrect!",
                        {
                            fontSize: "28px",
                            color: "#FF6666"
                        }
                    ).setOrigin(0.5);

                }

                this.time.delayedCall(800, () => {

                    this.current++;
                    this.showPuzzle();

                });

            });

        });

        // Progress
        this.add.text(
            width - 40,
            35,
            `Puzzle ${this.current + 1}/${this.puzzles.length}`,
            {
                fontSize: "20px",
                color: "#FFFFFF"
            }
        ).setOrigin(1, 0.5);

        // Score
        this.add.text(
            40,
            35,
            `Score: ${this.score}`,
            {
                fontSize: "20px",
                color: "#90EE90"
            }
        ).setOrigin(0, 0.5);

    }

}