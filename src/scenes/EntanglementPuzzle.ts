import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class EntanglementPuzzle extends Phaser.Scene {

    private state = 0;

    private leftQubit!: Phaser.GameObjects.Text;
    private rightQubit!: Phaser.GameObjects.Text;
    private instruction!: Phaser.GameObjects.Text;

    private states = [
        ["0", "0"],
        ["1", "1"],
        ["?", "?"]
    ];

    constructor() {
        super("EntanglementPuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);

        localStorage.setItem("currentScene", "EntanglementPuzzle");

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor("#12082A");

        this.add.text(
            width / 2,
            60,
            "Entanglement Puzzle",
            {
                fontSize: "42px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            120,
            "Click either qubit. Both change together!",
            {
                fontSize: "24px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.leftQubit = this.add.text(
            width / 2 - 220,
            height / 2,
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

        this.rightQubit = this.add.text(
            width / 2 + 220,
            height / 2,
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

        this.add.text(
            width / 2,
            height / 2,
            "══════",
            {
                fontSize: "42px",
                color: "#AA66FF"
            }
        ).setOrigin(0.5);

        this.instruction = this.add.text(
            width / 2,
            610,
            "",
            {
                fontSize: "28px",
                color: "#00FF99"
            }
        ).setOrigin(0.5);

        this.leftQubit.on("pointerdown", () => this.changeState());
        this.rightQubit.on("pointerdown", () => this.changeState());
    }

    private changeState() {

        this.state++;

        if (this.state > 2)
            this.state = 0;

        this.leftQubit.setText(this.states[this.state][0]);
        this.rightQubit.setText(this.states[this.state][1]);

        if (this.state === 2) {

            this.leftQubit.setColor("#FFD700");
            this.rightQubit.setColor("#FFD700");

            this.tweens.add({
                targets: [this.leftQubit, this.rightQubit],
                scale: 1.2,
                duration: 300,
                yoyo: true,
                repeat: 2
            });

            this.instruction.setText(
                "🎉 Excellent! You created an entangled pair!"
            );

            this.time.delayedCall(2000, () => {
                this.sound.stopByKey("puzzleMusic");

                this.scene.start("Quiz4");

            });

        } else {

            this.leftQubit.setColor("#FFFFFF");
            this.rightQubit.setColor("#FFFFFF");
            this.instruction.setText("");

        }

    }

}