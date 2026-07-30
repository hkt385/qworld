import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class QuantumGatePuzzle extends Phaser.Scene {

    private qubit!: Phaser.GameObjects.Text;
    private info!: Phaser.GameObjects.Text;

    private state = 0;

    constructor() {
        super("QuantumGatePuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", "QuantumGatePuzzle");

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor("#12082A");

        this.add.text(
            width / 2,
            60,
            "Quantum Gate Puzzle",
            {
                fontSize: "42px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            120,
            "Use the X Gate to flip the qubit.",
            {
                fontSize: "24px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.qubit = this.add.text(
            width / 2,
            260,
            "0",
            {
                fontSize: "120px",
                color: "#FFFFFF",
                backgroundColor: "#28164A",
                padding: {
                    left: 40,
                    right: 40,
                    top: 20,
                    bottom: 20
                }
            }
        ).setOrigin(0.5);

        const xGate = this.add.text(
            width / 2 - 120,
            500,
            "X Gate",
            {
                fontSize: "32px",
                backgroundColor: "#5B2EFF",
                padding: {
                    left: 20,
                    right: 20,
                    top: 15,
                    bottom: 15
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        const reset = this.add.text(
            width / 2 + 120,
            500,
            "Reset",
            {
                fontSize: "32px",
                backgroundColor: "#444444",
                padding: {
                    left: 20,
                    right: 20,
                    top: 15,
                    bottom: 15
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        this.info = this.add.text(
            width / 2,
            620,
            "",
            {
                fontSize: "28px",
                color: "#00FF99"
            }
        ).setOrigin(0.5);

        xGate.on("pointerdown", () => {

            this.state = this.state === 0 ? 1 : 0;

            this.qubit.setText(this.state.toString());

            this.tweens.add({
                targets: this.qubit,
                scale: 1.3,
                duration: 150,
                yoyo: true
            });

            if (this.state === 1) {

                this.info.setText("✓ Great! The X Gate flipped the qubit.");

                this.time.delayedCall(1500, () => {
                    AudioManager.stop(this, "puzzleMusic");

                    this.scene.start("Quiz6");

                });

            }

        });

        reset.on("pointerdown", () => {

            this.state = 0;
            this.qubit.setText("0");
            this.info.setText("");

        });

    }

}