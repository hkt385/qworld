import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class SuperpositionPuzzle extends Phaser.Scene {

    private states = [0, 0, 0];

    private qubits: Phaser.GameObjects.Text[] = [];

    private info!: Phaser.GameObjects.Text;

    constructor() {
        super("SuperpositionPuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", "SuperpositionPuzzle");

        const width = this.scale.width;
        

        this.cameras.main.setBackgroundColor("#12082A");

        this.add.text(
            width / 2,
            60,
            "Superposition Puzzle",
            {
                fontSize: "42px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.add.text(
    width / 2,
    110,
    "Click every qubit until it becomes ?",
    {
        fontSize: "24px",
        color: "#ffffff"
    }
).setOrigin(0.5);

const helpButton = this.add.text(
    width / 2,
    165,
    "❓ What does '?' mean?",
    {
        fontSize: "22px",
        color: "#87CEFA",
        backgroundColor: "#28164A",
        padding: {
            left: 12,
            right: 12,
            top: 8,
            bottom: 8
        }
    }
)
.setOrigin(0.5)
.setInteractive({ useHandCursor: true });
const popup = this.add.container(0, 0).setVisible(false);

const box = this.add.rectangle(
    width / 2,
    230,
    650,
    190,
    0x28164A
)
.setStrokeStyle(2, 0xffffff);

const explanation = this.add.text(
    width / 2,
    230,
    "❓ represents a qubit in SUPERPOSITION.\n\nA qubit exists as a combination of\n|0⟩ and |1⟩ until it is measured.\n\nAfter measurement, it becomes\neither |0⟩ or |1⟩.",
    {
        fontSize: "20px",
        color: "#90EE90",
        align: "center",
        wordWrap: {
            width: 580
        }
    }
).setOrigin(0.5);

popup.add([box, explanation]);
let popupVisible = false;

helpButton.on("pointerdown", () => {

    popupVisible = !popupVisible;

    popup.setVisible(popupVisible);

});

        for (let i = 0; i < 3; i++) {

            const txt = this.add.text(
                340 + i * 300,
                320,
                "0",
                {
                    fontSize: "96px",
                    backgroundColor: "#28164A",
                    padding: {
                        left: 35,
                        right: 35,
                        top: 20,
                        bottom: 20
                    }
                }
            )
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

            txt.on("pointerdown", () => {

    this.states[i]++;

    if (this.states[i] > 2)
        this.states[i] = 0;

    if (this.states[i] == 0) {

        txt.setText("0");

        this.info.setText(
            "This qubit is in the classical state |0⟩."
        );

    }

    else if (this.states[i] == 1) {

        txt.setText("?");

        this.info.setText(
            "Great! '?' represents a qubit in Superposition.\nIt is both |0⟩ and |1⟩ until it is measured."
        );

    }

    else {

        txt.setText("1");

        this.info.setText(
            "The qubit has been measured and collapsed to |1⟩."
        );

    }

    this.checkWin();

});

            this.qubits.push(txt);

        }

        this.info = this.add.text(
            width / 2,
            600,
            "",
            {
                fontSize: "28px",
                color: "#00FF99"
            }
        ).setOrigin(0.5);

    }

    private checkWin() {

        if (
            this.states[0] == 1 &&
            this.states[1] == 1 &&
            this.states[2] == 1
        ) {

            this.info.setText(
                "Excellent! Every qubit is now in Superposition!"
            );

            this.time.delayedCall(1800, () => {
                AudioManager.stop(this, "puzzleMusic");

                this.scene.start("Quiz3");

            });

        }

    }

}