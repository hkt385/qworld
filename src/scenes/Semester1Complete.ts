import Phaser from "phaser";

export default class Semester1Complete extends Phaser.Scene {

    constructor() {
        super("Semester1Complete");
    }

    create() {
        // Semester1Complete.ts
localStorage.setItem("currentScene", "Semester1Complete");

        const width = this.scale.width;

        this.cameras.main.setBackgroundColor("#1A1035");

        this.add.text(
            width / 2,
            80,
            "🎉 Semester 1 Complete!",
            {
                fontSize: "46px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            180,
            "Congratulations!\nYou have completed Quantum Foundations.",
            {
                fontSize: "28px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        const lessons = [
            "✅ Binary & Bits",
            "✅ Logic Gates",
            "✅ Superposition",
            "✅ Entanglement",
            "✅ Measurement",
            "✅ Quantum Gates"
        ];

        for (let i = 0; i < lessons.length; i++) {

            this.add.text(
                width / 2,
                280 + i * 50,
                lessons[i],
                {
                    fontSize: "30px",
                    color: "#90EE90"
                }
            ).setOrigin(0.5);

        }

        this.add.text(
            width / 2,
            640,
            "Press SPACE to unlock Semester 2",
            {
                fontSize: "24px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.input.keyboard!.once("keydown-SPACE", () => {

            // Unlock Semester 2
            localStorage.setItem("semester2", "true");

            

            // Return to Academy
            localStorage.setItem("semester2Unlocked", "true");
            localStorage.setItem("selectedSemester", "2");
            this.scene.start("AcademyInterior");

        });

    }

}