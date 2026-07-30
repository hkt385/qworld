import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

interface Algorithm {

    name: string;
    safe: boolean;

}

export default class FutureQuantumPuzzle extends Phaser.Scene {

    private algorithms: Algorithm[] = [

        { name: "RSA", safe: false },
        { name: "ECC", safe: false },
        { name: "DES", safe: false },
        { name: "3DES", safe: false },

        { name: "ML-KEM", safe: true },
        { name: "ML-DSA", safe: true },
        { name: "AES-256", safe: true },
        { name: "SHA-3", safe: true }

    ];

    private current!: Algorithm;

    private algorithmText!: Phaser.GameObjects.Text;

    private instructionText!: Phaser.GameObjects.Text;

    private scoreText!: Phaser.GameObjects.Text;

    private livesText!: Phaser.GameObjects.Text;

    private feedbackText!: Phaser.GameObjects.Text;

    private score = 0;

    private lives = 3;

    private targetScore = 10;

    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    private processing = false;

    constructor() {

        super("FutureQuantumPuzzle");

    }

    create() {

        AudioManager.play(this, "puzzleMusic", 0.25);

        this.cameras.main.setBackgroundColor("#081421");

        this.cursors = this.input.keyboard!.createCursorKeys();

        this.add.text(

            640,
            40,

            "CRYPTO FIREWALL",

            {

                fontSize: "40px",
                color: "#FFD700"

            }

        ).setOrigin(0.5);

        this.instructionText = this.add.text(

            640,
            90,

            "← BLOCK      |      ALLOW →",

            {

                fontSize: "24px",
                color: "#FFFFFF"

            }

        ).setOrigin(0.5);

        this.scoreText = this.add.text(

            40,
            40,

            "Score: 0",

            {

                fontSize: "24px",
                color: "#00FFAA"

            }

        );

        this.livesText = this.add.text(

            1040,
            40,

            "Lives: 3",

            {

                fontSize: "24px",
                color: "#FF6666"

            }

        );

        this.algorithmText = this.add.text(

            640,
            -50,

            "",

            {

                fontSize: "48px",
                color: "#FFFFFF",
                backgroundColor: "#1B263B",
                padding: {
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: 10
                }

            }

        ).setOrigin(0.5);

        this.feedbackText = this.add.text(

            640,
            650,

            "",

            {

                fontSize: "28px",
                color: "#FFFFFF"

            }

        ).setOrigin(0.5);

        this.spawnAlgorithm();

    }

    private spawnAlgorithm() {

        this.processing = false;

        this.feedbackText.setText("");

        this.current = Phaser.Utils.Array.GetRandom(this.algorithms);

        this.algorithmText.setText(this.current.name);

        this.algorithmText.setPosition(640, -50);

    }
        update() {

        if (this.processing) {
            return;
        }

        this.algorithmText.y += 2.5;

        if (Phaser.Input.Keyboard.JustDown(this.cursors.left!)) {

            this.processing = true;

            this.checkAnswer(false);

        }

        else if (Phaser.Input.Keyboard.JustDown(this.cursors.right!)) {

            this.processing = true;

            this.checkAnswer(true);

        }

        if (this.algorithmText.y > 720) {

            this.processing = true;

            this.lives--;

            this.livesText.setText(`Lives: ${this.lives}`);

            this.feedbackText.setColor("#ff4444");
            this.feedbackText.setText("Too Slow!");

            this.cameras.main.shake(150, 0.004);

            if (this.lives <= 0) {

                this.gameOver();

            }
            else {

                this.time.delayedCall(800, () => {

                    this.spawnAlgorithm();

                });

            }

        }

    }

    private checkAnswer(allow: boolean) {

        const correct = allow === this.current.safe;

        if (correct) {

            this.score++;

            this.scoreText.setText(`Score: ${this.score}`);

            this.feedbackText.setColor("#00ff88");
            this.feedbackText.setText("✔ Correct!");

            this.cameras.main.flash(120, 0, 255, 0);

            if (this.score >= this.targetScore) {

                this.time.delayedCall(800, () => {

                    this.showComplete();

                });

                return;

            }

        }
        else {

            this.lives--;

            this.livesText.setText(`Lives: ${this.lives}`);

            this.feedbackText.setColor("#ff4444");
            this.feedbackText.setText("✖ Wrong!");

            this.cameras.main.shake(150, 0.004);

            if (this.lives <= 0) {

                this.time.delayedCall(800, () => {

                    this.gameOver();

                });

                return;

            }

        }

        this.time.delayedCall(700, () => {

            this.spawnAlgorithm();

        });

    }

    private gameOver() {

        AudioManager.stop(this, "puzzleMusic");

        this.scene.restart();

    }
        private showComplete() {

        AudioManager.stop(this, "puzzleMusic");

        this.children.removeAll();

        this.cameras.main.setBackgroundColor("#081421");

        this.add.text(

            640,
            120,

            "FIREWALL SUCCESSFULLY UPGRADED!",

            {
                fontSize: "40px",
                color: "#FFD700",
                align: "center"
            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            320,

            "You correctly identified\nwhich algorithms are\nquantum-safe.\n\nRSA and ECC must be replaced.\nML-KEM and ML-DSA are\nPost-Quantum Cryptography standards.\nAES-256 and SHA-3 remain\nstrong against known quantum attacks.\n\nThe future of cybersecurity\ndepends on migrating to\nquantum-resistant cryptography.",

            {
                fontSize: "26px",
                color: "#FFFFFF",
                align: "center"
            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            620,

            "Loading Quiz 16...",

            {
                fontSize: "28px",
                color: "#00FFAA"
            }

        ).setOrigin(0.5);

        this.time.delayedCall(

            5000,

            () => {

                this.scene.start("Quiz16");

            }

        );

    }

}