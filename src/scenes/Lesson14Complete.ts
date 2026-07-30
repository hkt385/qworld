import Phaser from "phaser";

export default class Lesson14Complete extends Phaser.Scene {

    constructor() {
        super("Lesson14Complete");
    }

    create() {

        localStorage.setItem("currentScene", "Lesson14Complete");

        this.cameras.main.setBackgroundColor("#12082A");

        const width = this.scale.width;

        this.add.text(
            width / 2,
            100,
            "🏆 Lesson 14 Complete!",
            {
                fontSize: "48px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            320,
            `Congratulations!

You explored the foundations
of Post-Quantum Cryptography.

You learned about:

• What is Post-Quantum Cryptography?
• Classical vs Quantum Cryptography
• NIST PQC Standardization
• ML-KEM
• ML-DSA
• Migration to Quantum-Safe Security

You're one step closer to
building secure quantum-safe systems!`,
            {
                fontSize: "28px",
                color: "#FFFFFF",
                align: "center",
                wordWrap: { width: 900 }
            }
        ).setOrigin(0.5);

        const button = this.add.rectangle(
            width / 2,
            650,
            360,
            70,
            0x6A0DAD
        )
        .setInteractive({ useHandCursor: true })
        .setStrokeStyle(2, 0xFFFFFF);

        this.add.text(
            width / 2,
            650,
            "continue",
            {
                fontSize: "26px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        button.on("pointerover", () => {
            button.setFillStyle(0x8A2BE2);
        });

        button.on("pointerout", () => {
            button.setFillStyle(0x6A0DAD);
        });

        button.on("pointerdown", () => {
            this.scene.start("Classroom15");
        });

    }

}