import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";


export interface QuizQuestion {
    question: string;
    options: string[];
    answer: number;
}

export default abstract class BaseQuiz extends Phaser.Scene {

    protected score = 0;
    protected currentQuestion = 0;

    protected abstract title: string;
    protected abstract questions: QuizQuestion[];
    protected abstract nextScene: string;

    constructor(key: string) {
        super(key);
    }

    create() {
        

AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", this.scene.key);
        this.showQuestion();
    }

    private showQuestion() {

        this.cameras.main.setBackgroundColor("#1b103c");
        this.children.removeAll();

        const width = this.scale.width;

        if (this.currentQuestion >= this.questions.length) {
            this.showResult();
            return;
        }

        const q = this.questions[this.currentQuestion];

        this.add.text(width / 2, 60, this.title, {
            fontSize: "38px",
            color: "#FFD700",
            fontStyle: "bold"
        }).setOrigin(0.5);

        this.add.text(width / 2, 140, q.question, {
            fontSize: "28px",
            color: "#FFFFFF",
            align: "center",
            wordWrap: { width: 900 }
        }).setOrigin(0.5);

        q.options.forEach((option, index) => {

            const y = 250 + index * 100;

            const button = this.add.rectangle(
                width / 2,
                y,
                520,
                75,
                0x6a0dad
            )
            .setStrokeStyle(2, 0xffffff)
            .setInteractive({ useHandCursor: true });

            this.add.text(width / 2, y, option, {
    fontSize: "22px",
    color: "#FFFFFF",
    align: "center",
    wordWrap: {
        width: 440
    }
})

.setOrigin(0.5);

            button.on("pointerover", () => {
                button.setFillStyle(0x8a2be2);
                button.setScale(1.03);
            });

            button.on("pointerout", () => {
                button.setFillStyle(0x6a0dad);
                button.setScale(1);
            });

            button.on("pointerdown", () => {

                if (index === q.answer) {
                    button.setFillStyle(0x00aa00);
                    this.score++;
                } else {
                    button.setFillStyle(0xaa0000);
                }

                button.disableInteractive();

                this.time.delayedCall(800, () => {
                    this.currentQuestion++;
                    this.showQuestion();
                });

            });

        });

    }

    private showResult() {

        const width = this.scale.width;

        this.children.removeAll();

        this.add.text(width / 2, 180, "Quiz Complete!", {
            fontSize: "42px",
            color: "#FFD700",
            fontStyle: "bold"
        }).setOrigin(0.5);

        this.add.text(width / 2, 300,
            `Score: ${this.score}/${this.questions.length}`, {
            fontSize: "32px",
            color: "#FFFFFF"
        }).setOrigin(0.5);

        this.time.delayedCall(2500, () => {
            AudioManager.stop(this, "puzzleMusic");
            this.scene.start(this.nextScene);
        });

    }

}