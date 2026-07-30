import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class QuantumCircuitPuzzle extends Phaser.Scene {

    private selectedGate: string = "";

    private circuitGate!: Phaser.GameObjects.Text;
    private resultText!: Phaser.GameObjects.Text;
    private messageText!: Phaser.GameObjects.Text;

    constructor() {
        super("QuantumCircuitPuzzle");
    }

    preload() {

        this.load.image(
            "spark",
            "assets/particles/spark.png"
        );

    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", "QuantumCircuitPuzzle");

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor("#1B1035");

        // =========================
        // TITLE
        // =========================

        this.add.text(
            width / 2,
            50,
            "Quantum Circuit Builder",
            {
                fontSize: "40px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            95,
            "Choose the correct gate to create Superposition",
            {
                fontSize: "22px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        // =========================
        // AVAILABLE GATES
        // =========================

        this.add.text(
            170,
            160,
            "Available Gates",
            {
                fontSize: "28px",
                color: "#FFD700"
            }
        );

        this.createGate(170, 250, "H", 0x7B2CBF);
        this.createGate(170, 350, "X", 0x555555);
        this.createGate(170, 450, "Z", 0x555555);

        // =========================
        // CIRCUIT
        // =========================

        this.add.text(
            width / 2,
            160,
            "Quantum Circuit",
            {
                fontSize: "30px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2 - 240,
            320,
            "|0⟩",
            {
                fontSize: "42px",
                color: "#00FFFF"
            }
        ).setOrigin(0.5);

        this.add.line(
            0,
            0,
            width / 2 - 190,
            320,
            width / 2 + 190,
            320,
            0xffffff
        ).setOrigin(0);

        this.circuitGate = this.add.text(
            width / 2,
            300,
            "[   ]",
            {
                fontSize: "36px",
                color: "#FFFFFF",
                backgroundColor: "#444444"
            }
        ).setOrigin(0.5);

        this.resultText = this.add.text(
            width / 2 + 250,
            320,
            "?",
            {
                fontSize: "42px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        // =========================
        // MESSAGE
        // =========================

        this.messageText = this.add.text(
            width / 2,
            520,
            "Select a gate from the left.",
            {
                fontSize: "24px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        // =========================
        // RUN BUTTON
        // =========================

        const runButton = this.add.rectangle(
            width / 2,
            620,
            220,
            65,
            0x6A0DAD
        )
        .setStrokeStyle(2, 0xffffff)
        .setInteractive({ useHandCursor: true });

        this.add.text(
            width / 2,
            620,
            "Run Circuit",
            {
                fontSize: "24px",
                color: "#FFFFFF",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        runButton.on("pointerdown", () => {

            if (this.selectedGate === "") {

                this.messageText.setText("Please select a gate first.");

                return;

            }

            this.circuitGate.setText(`[ ${this.selectedGate} ]`);

            if (this.selectedGate === "H") {

                this.resultText.setText("|+⟩");
                this.resultText.setColor("#00FF88");

                this.messageText.setText(
                    "Excellent! The Hadamard Gate created Superposition!"
                );

                const particles = this.add.particles(
                    width / 2 + 250,
                    320,
                    "spark",
                    {
                        speed: {
                            min: 80,
                            max: 220
                        },
                        lifespan: 900,
                        quantity: 35,
                        scale: {
                            start: 0.35,
                            end: 0
                        },
                        emitting: false
                    }
                );

                particles.explode(35);

                this.tweens.add({

                    targets: this.resultText,

                    scale: 1.5,

                    duration: 400,

                    yoyo: true

                });

                this.time.delayedCall(2200, () => {
                    AudioManager.stop(this, "puzzleMusic");

                    this.scene.start("Quiz8");

                });

            }

            else if (this.selectedGate === "X") {

                this.resultText.setText("|1⟩");
                this.resultText.setColor("#FF5555");

                this.messageText.setText(
                    "The X Gate flips the qubit.\nIt does not create Superposition."
                );

            }

            else {

                this.resultText.setText("|0⟩");
                this.resultText.setColor("#FF5555");

                this.messageText.setText(
                    "The Z Gate changes the phase.\nTry another gate!"
                );

            }

        });

    }

    private createGate(
        x: number,
        y: number,
        label: string,
        color: number
    ) {

        const gate = this.add.rectangle(
            x,
            y,
            90,
            70,
            color
        )
        .setStrokeStyle(2, 0xffffff)
        .setInteractive({ useHandCursor: true });

        this.add.text(
            x,
            y,
            label,
            {
                fontSize: "34px",
                color: "#FFFFFF",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        gate.on("pointerdown", () => {

            this.selectedGate = label;

            this.messageText.setText(
                `${label} Gate Selected`
            );

            this.tweens.add({

                targets: gate,

                scaleX: 1.12,

                scaleY: 1.12,

                duration: 120,

                yoyo: true

            });

        });

    }

}