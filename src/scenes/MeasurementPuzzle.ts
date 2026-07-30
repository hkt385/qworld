import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class MeasurementPuzzle extends Phaser.Scene {

    private qubit!: Phaser.GameObjects.Text;
    private resultText!: Phaser.GameObjects.Text;
    private button!: Phaser.GameObjects.Text;

    private measurements = 0;

    constructor() {
        super("MeasurementPuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);


        localStorage.setItem("currentScene", "MeasurementPuzzle");

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor("#12082A");

        this.add.text(
            width / 2,
            60,
            "Quantum Measurement",
            {
                fontSize: "42px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            120,
            "Measure the qubit three times.",
            {
                fontSize: "24px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.qubit = this.add.text(
            width / 2,
            260,
            "?",
            {
                fontSize: "120px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.resultText = this.add.text(
            width / 2,
            420,
            "",
            {
                fontSize: "28px",
                color: "#00FF99",
                align: "center"
            }
        ).setOrigin(0.5);

        this.button = this.add.text(
            width / 2,
            540,
            "MEASURE",
            {
                fontSize: "34px",
                backgroundColor: "#5B2EFF",
                padding: {
                    left: 25,
                    right: 25,
                    top: 15,
                    bottom: 15
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        this.button.on("pointerdown", () => {

            const result = Phaser.Math.Between(0, 1);

            this.qubit.setText(result.toString());

            this.resultText.setText(
                `Measurement ${this.measurements + 1}: The qubit collapsed to ${result}`
            );

            this.measurements++;

            if (this.measurements >= 3) {

                this.button.disableInteractive();

                this.time.delayedCall(1500, () => {
                    AudioManager.play(this, "puzzleMusic", 0.05);

                    this.scene.start("Quiz5");

                });

            } else {

                this.time.delayedCall(1000, () => {

                    this.qubit.setText("?");

                });

            }

        });

    }

}