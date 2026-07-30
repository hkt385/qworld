import Phaser from "phaser";

export default class Lesson15Complete extends Phaser.Scene {

    constructor() {
        super("Lesson15Complete");
    }

    create() {

        localStorage.setItem("currentScene", "Lesson15Complete");

        this.cameras.main.setBackgroundColor("#12082A");

        const width = this.scale.width;

        this.add.text(
            width / 2,
            100,
            "🏆 Lesson 15 Complete!",
            {
                fontSize: "48px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            320,
            `
Congratulations!
You discovered the mathematics
behind modern Post-Quantum
Cryptography.

You learned about:

• Mathematical Lattices
• High-Dimensional Lattices
• Shortest Vector Problem (SVP)
• Learning With Errors (LWE)
• ML-KEM
• Quantum-Resistant Security

Now you're ready to explore
the future of cybersecurity!`,
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
            this.scene.start("Classroom16");
        });

    }

}