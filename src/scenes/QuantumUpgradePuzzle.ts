import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

interface Challenge {

    system: string;
    algorithm: string;
    upgrade: boolean;
    explanation: string;

}

export default class QuantumUpgradePuzzle extends Phaser.Scene {

    private questions: Challenge[] = [

        {
            system: "🏦 National Bank",
            algorithm: "RSA",
            upgrade: true,
            explanation: "RSA can be broken by Shor's Algorithm."
        },

        {
            system: "📱 Messaging App",
            algorithm: "ECC",
            upgrade: true,
            explanation: "ECC is vulnerable to quantum computers."
        },

        {
            system: "🏥 Hospital Database",
            algorithm: "AES-256",
            upgrade: false,
            explanation: "AES-256 remains secure with sufficiently large keys."
        },

        {
            system: "☁ Cloud Storage",
            algorithm: "SHA-256",
            upgrade: false,
            explanation: "SHA-256 is still considered secure."
        },

        {
            system: "🏛 Government Portal",
            algorithm: "ML-KEM",
            upgrade: false,
            explanation: "ML-KEM is already post-quantum secure."
        },

        {
            system: "✍ Digital Signatures",
            algorithm: "ML-DSA",
            upgrade: false,
            explanation: "ML-DSA is already post-quantum secure."
        }

    ];

    private index = 0;
    private score = 0;
    private answered = false;

    private systemText!: Phaser.GameObjects.Text;
    private algoText!: Phaser.GameObjects.Text;
    private infoText!: Phaser.GameObjects.Text;

    constructor() {

        super("QuantumUpgradePuzzle");

    }

    create() {

        AudioManager.play(this, "puzzleMusic", 0.05);

        this.cameras.main.setBackgroundColor("#10162F");

        this.add.text(

            640,
            60,

            "QUANTUM SECURITY UPGRADE",

            {

                fontSize: "40px",
                color: "#FFD700"

            }

        ).setOrigin(0.5);

        this.systemText = this.add.text(

            640,
            180,
            "",

            {

                fontSize: "34px",
                color: "#FFFFFF",
                align: "center"

            }

        ).setOrigin(0.5);

        this.algoText = this.add.text(

            640,
            300,
            "",

            {

                fontSize: "44px",
                color: "#00FFFF"

            }

        ).setOrigin(0.5);

        this.infoText = this.add.text(

            640,
            430,
            "",

            {

                fontSize: "24px",
                color: "#FFFFFF",
                align: "center"

            }

        ).setOrigin(0.5);

        this.createButton(

            420,
            620,

            "KEEP",

            0x2E7D32,

            () => this.answer(false)

        );

        this.createButton(

            860,
            620,

            "UPGRADE",

            0xC62828,

            () => this.answer(true)

        );

        this.loadQuestion();

    }
        private createButton(

        x: number,
        y: number,
        label: string,
        color: number,
        callback: () => void

    ) {

        const button = this.add.rectangle(

            x,
            y,
            260,
            70,
            color

        )

        .setStrokeStyle(3, 0xffffff)

        .setInteractive({ useHandCursor: true });

        this.add.text(

            x,
            y,
            label,

            {

                fontSize: "28px",
                color: "#FFFFFF"

            }

        ).setOrigin(0.5);

        button.on("pointerdown", callback);

    }

    private loadQuestion() {

        const q = this.questions[this.index];
        this.answered = false;

        this.systemText.setText(

            q.system

        );

        this.algoText.setText(

            q.algorithm

        );

        this.infoText.setColor("#FFFFFF");

        this.infoText.setText(

            "Should this algorithm be upgraded\nbefore large quantum computers arrive?"

        );

    }

    private answer(choice: boolean) {

    if (this.answered) return;
    this.answered = true;

    const q = this.questions[this.index];

    if (!q) {
        this.showResults();
        return;
    }

    if (choice === q.upgrade) {

        this.score++;

        this.infoText.setColor("#00FF88");

        this.infoText.setText(
            "✅ Correct!\n\n" + q.explanation
        );

    } else {

        this.infoText.setColor("#FF5555");

        this.infoText.setText(
            "❌ Incorrect!\n\n" + q.explanation
        );

    }

    this.time.delayedCall(

        2500,

        () => {

            this.index++;

            if (this.index < this.questions.length) {

                this.loadQuestion();

            } else {

                this.showResults();

            }

        }

    );

}

    private showResults() {

        AudioManager.stop(this, "puzzleMusic");

        this.children.removeAll();

        this.cameras.main.setBackgroundColor("#081421");

        this.add.text(

            640,
            120,

            "MIGRATION COMPLETE",

            {

                fontSize: "42px",
                color: "#FFD700"

            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            260,

            `Score: ${this.score}/${this.questions.length}`,

            {

                fontSize: "34px",
                color: "#FFFFFF"

            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            420,

            "RSA  → Upgrade ✅\n\nECC  → Upgrade ✅\n\nAES-256 → Keep ✅\n\nSHA-256 → Keep ✅\n\nML-KEM → Keep ✅\n\nML-DSA → Keep ✅",

            {

                fontSize: "28px",
                color: "#00FFFF",
                align: "center"

            }

        ).setOrigin(0.5);

        this.time.delayedCall(

            5000,

            () => {

                this.scene.start("Quiz13");

            }

        );

    }

}