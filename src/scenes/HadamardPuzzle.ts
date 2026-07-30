import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class HadamardPuzzle extends Phaser.Scene {

    private completed = false;

    constructor() {
        super("HadamardPuzzle");
    }

    preload() {
        this.load.image("spark", "assets/particles/spark.png");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);


        localStorage.setItem("currentScene", "HadamardPuzzle");

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor("#1B103C");

        const centerX = width / 2;
        const centerY = height / 2;

        // Title
        this.add.text(
            centerX,
            centerY - 290,
            "Hadamard Gate Puzzle",
            {
                fontSize: "38px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            centerX,
            centerY - 230,
            "Apply the Hadamard Gate to transform |0⟩ into a superposition state.",
            {
                fontSize: "22px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        // Circuit
        this.add.text(
            centerX,
            centerY - 120,
            "|0⟩",
            {
                fontSize: "52px",
                color: "#00FFFF"
            }
        ).setOrigin(0.5);

        this.add.text(
            centerX,
            centerY - 50,
            "↓",
            {
                fontSize: "36px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.add.rectangle(
            centerX,
            centerY + 20,
            90,
            70,
            0x7b2cbf
        );

        this.add.text(
            centerX,
            centerY + 20,
            "H",
            {
                fontSize: "42px",
                color: "#FFFFFF",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            centerX,
            centerY + 90,
            "↓",
            {
                fontSize: "36px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        const result = this.add.text(
            centerX,
            centerY + 170,
            "?",
            {
                fontSize: "58px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        

        // Button
        const buttonY = centerY + 280;

        const button = this.add.rectangle(
            centerX,
            buttonY,
            240,
            65,
            0x6a0dad
        )
        .setStrokeStyle(3, 0xffffff)
        .setInteractive({ useHandCursor: true });

        this.add.text(
            centerX,
            buttonY,
            "Apply H Gate",
            {
                fontSize: "24px",
                color: "#FFFFFF",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        button.on("pointerover", () => {
            button.setFillStyle(0x8a2be2);
        });

        button.on("pointerout", () => {
            button.setFillStyle(0x6a0dad);
        });

        button.on("pointerdown", () => {

            if (this.completed) return;

            this.completed = true;

            result.setText("|+⟩");
            result.setColor("#00FF7F");

            

            this.tweens.add({
                targets: result,
                scale: 1.5,
                angle: 360,
                duration: 600,
                yoyo: true
            });

            const particles = this.add.particles(
                centerX,
                centerY + 170,
                "spark",
                {
                    speed: { min: 80, max: 220 },
                    lifespan: 900,
                    quantity: 30,
                    scale: { start: 0.4, end: 0 },
                    emitting: false
                }
            );

            particles.explode(30);

            this.time.delayedCall(2500, () => {
                AudioManager.stop(this, "puzzleMusic");
                this.scene.start("Quiz7");
            });

        });

    }

}