import Phaser from "phaser";

interface QuizQuestion {
    question: string;
    options: string[];
    answer: number;
}

export default class Semester3Exam extends Phaser.Scene {

    private score = 0;
    private currentQuestion = 0;

    private readonly title = "🎓 Semester 3 Final Exam";
    private readonly nextScene = "GraduationScene";

   private questions: QuizQuestion[] = [

{
    question: "What is the main goal of Post-Quantum Cryptography (PQC)?",
    options: [
        "Build quantum computers",
        "Protect data against future quantum attacks",
        "Replace the internet",
        "Increase internet speed"
    ],
    answer: 1
},

{
    question: "Which public-key algorithms are vulnerable to Shor's Algorithm?",
    options: [
        "AES-256 and SHA-3",
        "RSA and ECC",
        "ML-KEM and ML-DSA",
        "SHA-2 and AES"
    ],
    answer: 1
},

{
    question: "RSA is primarily based on the difficulty of:",
    options: [
        "Sorting numbers",
        "Factoring large integers",
        "Matrix multiplication",
        "Hashing passwords"
    ],
    answer: 1
},

{
    question: "ECC relies on the difficulty of solving the:",
    options: [
        "Travelling Salesman Problem",
        "Elliptic Curve Discrete Logarithm Problem",
        "Shortest Path Problem",
        "Binary Search"
    ],
    answer: 1
},

{
    question: "Shor's Algorithm was developed for:",
    options: [
        "Classical computers",
        "Quantum computers",
        "Mobile phones",
        "Cloud storage"
    ],
    answer: 1
},

{
    question: "What does 'Harvest Now, Decrypt Later' mean?",
    options: [
        "Encrypt data tomorrow",
        "Store encrypted data now and decrypt it when powerful quantum computers exist",
        "Delete old encrypted files",
        "Back up data every day"
    ],
    answer: 1
},

{
    question: "Quantum Cryptography and Post-Quantum Cryptography are:",
    options: [
        "Exactly the same",
        "Completely different technologies",
        "Both based only on quantum computers",
        "Both use RSA"
    ],
    answer: 1
},

{
    question: "Post-Quantum Cryptography runs on:",
    options: [
        "Only quantum computers",
        "Classical computers",
        "Supercomputers only",
        "Special hardware only"
    ],
    answer: 1
},

{
    question: "Which organization standardized ML-KEM and ML-DSA?",
    options: [
        "NASA",
        "NIST",
        "Google",
        "IEEE"
    ],
    answer: 1
},

{
    question: "ML-KEM is primarily used for:",
    options: [
        "Key establishment",
        "Password storage",
        "Compression",
        "Web browsing"
    ],
    answer: 0
},

{
    question: "ML-DSA is primarily used for:",
    options: [
        "Digital signatures",
        "Encryption",
        "Data compression",
        "Networking"
    ],
    answer: 0
},

{
    question: "Many Post-Quantum algorithms are based on:",
    options: [
        "Prime numbers",
        "Lattices",
        "Binary trees",
        "Neural networks"
    ],
    answer: 1
},

{
    question: "SVP stands for:",
    options: [
        "Secure Vector Protocol",
        "Shortest Vector Problem",
        "System Verification Process",
        "Simple Variable Problem"
    ],
    answer: 1
},

{
    question: "LWE stands for:",
    options: [
        "Learning With Errors",
        "Linear Wave Equation",
        "Logical Web Encryption",
        "Large World Encryption"
    ],
    answer: 0
},

{
    question: "According to Kerckhoffs' Principle, the secret should be:",
    options: [
        "The algorithm",
        "The source code",
        "The cryptographic key",
        "The programming language"
    ],
    answer: 2
},

{
    question: "Which algorithms are considered quantum-safe in your lessons?",
    options: [
        "RSA and ECC",
        "DES and 3DES",
        "ML-KEM and ML-DSA",
        "MD5 and SHA-1"
    ],
    answer: 2
},

{
    question: "Which algorithms remain strong against known quantum attacks?",
    options: [
        "RSA and ECC",
        "AES-256 and SHA-3",
        "DES and MD5",
        "SHA-1 and 3DES"
    ],
    answer: 1
},

{
    question: "Why are organizations migrating to Post-Quantum Cryptography now?",
    options: [
        "Quantum computers have already broken all encryption",
        "To prepare before large quantum computers become available",
        "To make computers faster",
        "To reduce internet costs"
    ],
    answer: 1
},

{
    question: "The main task of a cybersecurity professional in the quantum era is to:",
    options: [
        "Remove all classical computers",
        "Identify vulnerable algorithms and replace them with quantum-safe ones",
        "Build quantum processors",
        "Delete encrypted data"
    ],
    answer: 1
},

{
    question: "Why should organizations migrate to Post-Quantum Cryptography before large quantum computers exist?",
    options: [
        "Because current computers no longer work",
        "To protect data from future quantum attacks",
        "Because ML-KEM is faster than every algorithm",
        "To replace all classical computers"
    ],
    answer: 1
},

];
    private buttons: Phaser.GameObjects.Rectangle[] = [];
    private answered = false;

    constructor() {
        super("Semester3Exam");
    }

    create(): void {
        
localStorage.setItem("currentScene", "Semester3Exam");
        this.showQuestion();
    }

    private resetScene(): void {
        this.children.removeAll();
        this.buttons = [];
        this.answered = false;
    }

    private showQuestion(): void {

        this.resetScene();

        if (this.currentQuestion >= this.questions.length) {
            this.showResult();
            return;
        }

        this.cameras.main.setBackgroundColor("#1B103C");

        const width = this.scale.width;
        

        const q = this.questions[this.currentQuestion];

        this.add.text(
            width / 2,
            45,
            this.title,
            {
                fontSize: "40px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            40,
            95,
            `Question ${this.currentQuestion + 1}/${this.questions.length}`,
            {
                fontSize: "22px",
                color: "#90EE90"
            }
        );

        this.add.text(
            width - 40,
            95,
            `Score: ${this.score}`,
            {
                fontSize: "22px",
                color: "#87CEFA"
            }
        ).setOrigin(1, 0);

        this.add.rectangle(
            width / 2,
            135,
            700,
            12,
            0x444444
        );

        const progress =
            (this.currentQuestion + 1) /
            this.questions.length;

        this.add.rectangle(
            width / 2 - 350 + (700 * progress) / 2,
            135,
            700 * progress,
            12,
            0x8A2BE2
        );

        this.add.rectangle(
            width / 2,
            220,
            900,
            120,
            0x2B2148
        ).setStrokeStyle(2, 0xFFD700);

        this.add.text(
            width / 2,
            220,
            q.question,
            {
                fontSize: "30px",
                color: "#FFFFFF",
                align: "center",
                wordWrap: {
                    width: 820
                }
            }
        ).setOrigin(0.5);

        const startY = 340;

        q.options.forEach((option, index) => {

            const y = startY + index * 90;

            const button = this.add.rectangle(
                width / 2,
                y,
                720,
                65,
                0x6A0DAD
            )
            .setStrokeStyle(2, 0xFFFFFF)
            .setInteractive({
                useHandCursor: true
            });

            this.buttons.push(button);

            this.add.text(
                width / 2,
                y,
                option,
                {
                    fontSize: "24px",
                    color: "#FFFFFF",
                    align: "center",
                    wordWrap: {
                        width: 640
                    }
                }
            ).setOrigin(0.5);
                        button.on("pointerover", () => {
                if (!this.answered) {
                    button.setFillStyle(0x8A2BE2);
                }
            });

            button.on("pointerout", () => {
                if (!this.answered) {
                    button.setFillStyle(0x6A0DAD);
                }
            });

            button.on("pointerdown", () => {

                if (this.answered) {
                    return;
                }

                this.answered = true;

                this.buttons.forEach(b => b.disableInteractive());

                const correct = q.answer;

                this.buttons[correct].setFillStyle(0x00AA00);

                if (index === correct) {
                    this.score++;
                } else {
                    button.setFillStyle(0xCC2222);
                }

                this.time.delayedCall(1000, () => {
                    this.currentQuestion++;
                    this.showQuestion();
                });

            });

        });

    }

    private showResult(): void {

        this.resetScene();

        const width = this.scale.width;
        const height = this.scale.height;

        const percentage = Math.round(
            (this.score / this.questions.length) * 100
        );

        this.cameras.main.setBackgroundColor("#1B103C");

        this.add.rectangle(
            width / 2,
            height / 2,
            700,
            420,
            0x2B2148
        ).setStrokeStyle(3, 0xFFD700);

        this.add.text(
            width / 2,
            140,
            "🎓 Semester 3 Complete!",
            {
                fontSize: "42px",
                color: "#FFD700",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            230,
            `Score: ${this.score}/${this.questions.length}`,
            {
                fontSize: "32px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            290,
            `Accuracy: ${percentage}%`,
            {
                fontSize: "28px",
                color: "#90EE90"
            }
        ).setOrigin(0.5);

        let message = "📚 Keep Practicing!";
        let color = "#FF6666";

        if (percentage === 100) {
            message = "🏆 Perfect Score!";
            color = "#FFD700";
        } else if (percentage >= 80) {
            message = "🌟 Excellent!";
            color = "#FFD700";
        } else if (percentage >= 60) {
            message = "👍 Good Job!";
            color = "#90EE90";
        }

        this.add.text(
            width / 2,
            360,
            message,
            {
                fontSize: "32px",
                color: color,
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            450,
            "Preparing Graduation Ceremony...",
            {
                fontSize: "22px",
                color: "#CCCCCC"
            }
        ).setOrigin(0.5);

        this.time.delayedCall(2200, () => {
            this.scene.start(this.nextScene);
        });

    }

}