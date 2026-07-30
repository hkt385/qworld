import Phaser from "phaser";

export default class Lesson11Complete extends Phaser.Scene {

    constructor() {
        super("Lesson11Complete");
    }

    create() {

        localStorage.setItem("currentScene", "Lesson11Complete");

        this.cameras.main.setBackgroundColor("#12082A");

        const width = this.scale.width;

        this.add.text(
            width / 2,
            100,
            "🏆 Lesson 11 Complete!",
            {
                fontSize: "48px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            320,
            `Excellent!

You mastered Quantum Cryptography.

You learned about:

• Quantum Key Distribution (QKD)
• BB84 Protocol
• Secure Communication
• Eavesdropping Detection
• Real-World Quantum Security

Fantastic work! You're ready for the next lesson.`,
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
            320,
            70,
            0x6A0DAD
        )
        .setInteractive({ useHandCursor: true })
        .setStrokeStyle(2, 0xFFFFFF);

        this.add.text(
            width / 2,
            650,
            "Continue",
            {
                fontSize: "28px",
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
            this.scene.start("Classroom12");
        });

    }

}