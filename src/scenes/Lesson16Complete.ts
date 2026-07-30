import Phaser from "phaser";

export default class Lesson16Complete extends Phaser.Scene {

    constructor() {
        super("Lesson16Complete");
    }

    create() {

        localStorage.setItem("currentScene", "Lesson16Complete");

        this.cameras.main.setBackgroundColor("#12082A");

        const width = this.scale.width;

        this.add.text(
            width / 2,
            100,
            "🏆 Lesson 16 Complete!",
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
You completed Semester 3 and
learned how Post-Quantum
Cryptography will secure the future.

You learned about:

• Quantum Threats to Cybersecurity
• Quantum-Safe Algorithms
• Migration to Post-Quantum Security
• NIST Standards Adoption
• Real-World PQC Applications
• The Future of Cybersecurity

You've completed Semester 3!

Good luck on your Semester 3 Final Exam!`,
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
            "Start Semester 3 Exam",
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
            this.scene.start("Semester3Exam");
        });

    }

}