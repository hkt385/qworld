import Phaser from "phaser";

export default class CreditsScene extends Phaser.Scene {

    constructor() {
        super("CreditsScene");
    }

    create() {

        localStorage.setItem("currentScene", "CreditsScene");

        const width = this.scale.width;
        

        this.cameras.main.setBackgroundColor("#12082A");

        // Title
        this.add.text(
            width / 2,
            70,
            "✨ QWorld Academy ✨",
            {
                fontSize: "48px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Credits Heading
        this.add.text(
            width / 2,
            140,
            "Credits",
            {
                fontSize: "40px",
                color: "#FFFFFF",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Developer
        this.add.text(
            width / 2,
            220,
            "Game Design & Development",
            {
                fontSize: "30px",
                color: "#90EE90"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            260,
            "Hiranmayi",
            {
                fontSize: "36px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // AI Assistant
        this.add.text(
            width / 2,
            340,
            "AI Development Assistant",
            {
                fontSize: "30px",
                color: "#90EE90"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            380,
            "ChatGPT",
            {
                fontSize: "36px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Thank You
        this.add.text(
            width / 2,
            470,
            "Thank you for playing!\nKeep exploring the world of Quantum Computing 💜",
            {
                fontSize: "28px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        // Main Menu Button
        const button = this.add.rectangle(
            width / 2,
            610,
            320,
            70,
            0x6A0DAD
        )
        .setInteractive({ useHandCursor: true })
        .setStrokeStyle(2, 0xFFFFFF);

        this.add.text(
            width / 2,
            610,
            "Main Menu",
            {
                fontSize: "28px",
                color: "#FFFFFF",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        button.on("pointerover", () => {
            button.setFillStyle(0x8A2BE2);
        });

        button.on("pointerout", () => {
            button.setFillStyle(0x6A0DAD);
        });

        button.on("pointerdown", () => {

            console.log("Going to Main Menu");

            localStorage.setItem("currentScene", "MainMenuScene");

            this.scene.stop("CreditsScene");
            this.scene.start("MainMenuScene");

        });

    }

}