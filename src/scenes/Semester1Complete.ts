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

    const btn = this.add.rectangle(
    width / 2,
    650,
    450,
    70,
    0x6A0DAD
)
.setInteractive({ useHandCursor: true })
.setStrokeStyle(2, 0xffffff);

this.add.text(
    width / 2,
    650,
    "Start Semester 2",
    {
        fontSize: "28px",
        color: "#FFFFFF"
    }
).setOrigin(0.5);

btn.on("pointerdown", () => {

    localStorage.setItem("semester2", "true");
    localStorage.setItem("semester2Unlocked", "true");
    localStorage.setItem("selectedSemester", "2");

    this.scene.start("AcademyInterior");

});

    }

}