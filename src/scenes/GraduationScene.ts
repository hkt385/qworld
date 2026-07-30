import Phaser from "phaser";

export default class GraduationScene extends Phaser.Scene {

    constructor() {
        super("GraduationScene");
    }

    create() {
        if (!this.sound.get("graduationMusic")) {

    this.sound.add("graduationMusic", {
        loop: true,
        volume: Number(
    localStorage.getItem("musicVolume") ?? 0.40
)
    }).play();

}

        localStorage.setItem("currentScene", "GraduationScene");

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor("#12082A");

        // Title
        this.add.text(
            width / 2,
            80,
            "🎓 Graduation Ceremony 🎓",
            {
                fontSize: "50px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Certificate
        this.add.rectangle(
            width / 2,
            height / 2,
            850,
            430,
            0xF5F5DC
        ).setStrokeStyle(5, 0xFFD700);

        this.add.text(
            width / 2,
            210,
            "QWORLD ACADEMY",
            {
                fontSize: "40px",
                color: "#4B0082",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            270,
            "Certificate of Graduation",
            {
                fontSize: "30px",
                color: "#000000"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            340,
            "Congratulations!",
            {
                fontSize: "36px",
                color: "#006400",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            410,
            "You have successfully completed\nall 16 lessons of QWorld Academy.",
            {
                fontSize: "28px",
                color: "#000000",
                align: "center"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            520,
            "🏆 Title Earned",
            {
                fontSize: "26px",
                color: "#4B0082",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            565,
            "\"Quantum Explorer\"",
            {
                fontSize: "36px",
                color: "#8B0000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Continue button
        const button = this.add.rectangle(
            width / 2,
            720,
            320,
            70,
            0x6A0DAD
        )
        .setInteractive({ useHandCursor: true })
        .setStrokeStyle(2, 0xFFFFFF);

        this.add.text(
            width / 2,
            720,
            "View Credits",
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
            this.scene.start("CreditsScene");
        });

    }

}