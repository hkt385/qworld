import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class QuantumErrorCorrectionPuzzle extends Phaser.Scene {

    private selected = -1;
    private errorIndex = 0;

    private info!: Phaser.GameObjects.Text;
    private qubits: Phaser.GameObjects.Text[] = [];

    constructor() {
        super("QuantumErrorCorrectionPuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", "QuantumErrorCorrectionPuzzle");

        this.cameras.main.setBackgroundColor("#12082A");

        const width = this.scale.width;

        this.add.text(
            width / 2,
            60,
            "Quantum Error Correction",
            {
                fontSize: "40px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.info = this.add.text(
            width / 2,
            120,
            "One qubit has been affected by quantum noise.\nFind it and correct the error!",
            {
                fontSize: "24px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        this.errorIndex = Phaser.Math.Between(0, 2);

        const startX = 350;

        for (let i = 0; i < 3; i++) {

            const isError = i === this.errorIndex;

            const qubit = this.add.text(
                startX + i * 250,
                320,
                isError ? "🔴\nQubit" : "🟢\nQubit",
                {
                    fontSize: "36px",
                    backgroundColor: "#2D1B55",
                    padding: {
                        left: 20,
                        right: 20,
                        top: 20,
                        bottom: 20
                    },
                    align: "center"
                }
            )
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

            qubit.on("pointerdown", () => {

                this.selected = i;

                this.qubits.forEach(q => q.setScale(1));

                qubit.setScale(1.1);

                this.info.setText(
                    `Selected Qubit ${i + 1}\nPress "Correct Error".`
                );

            });

            this.qubits.push(qubit);

        }

        const button = this.add.rectangle(
            width / 2,
            620,
            260,
            70,
            0x6A0DAD
        )
        .setInteractive({ useHandCursor: true })
        .setStrokeStyle(2, 0xffffff);

        this.add.text(
            width / 2,
            620,
            "Correct Error",
            {
                fontSize: "28px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        button.on("pointerdown", () => {

            if (this.selected === -1) {

                this.info.setText(
                    "Select a qubit first!"
                );

                return;

            }

            if (this.selected === this.errorIndex) {

                this.qubits[this.errorIndex].setText(
                    "🟢\nQubit"
                );

                this.info.setText(
                    "🎉 Excellent!\nThe quantum error has been corrected!"
                );

                this.time.delayedCall(2500, () => {
                    AudioManager.stop(this, "puzzleMusic");

                    this.scene.start("Quiz10");

                });

            } else {

                this.info.setText(
                    "❌ That qubit wasn't affected.\nTry again!"
                );

            }

        });

    }

}