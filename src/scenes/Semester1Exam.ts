import Phaser from "phaser";

interface QuizQuestion {
    question: string;
    options: string[];
    answer: number;
}

export default class Semester1Exam extends Phaser.Scene {

    private score = 0;
    private currentQuestion = 0;

    private readonly title = "🎓 Semester 1 Final Exam";
    private readonly nextScene = "Semester1Complete";

    private questions: QuizQuestion[] = [

{
    question: "How many digits does the binary number system use?",
    options: ["2", "8", "10", "16"],
    answer: 0
},

{
    question: "What is decimal 5 in binary?",
    options: ["100", "101", "110", "111"],
    answer: 1
},

{
    question: "A bit can store:",
    options: [
        "Only 0",
        "Only 1",
        "Either 0 or 1",
        "Four values"
    ],
    answer: 2
},

{
    question: "What does an AND gate output when both inputs are 1?",
    options: [
        "0",
        "1",
        "Depends on the circuit",
        "Random"
    ],
    answer: 1
},

{
    question: "What is the output of OR(0,1)?",
    options: [
        "0",
        "1",
        "2",
        "Undefined"
    ],
    answer: 1
},

{
    question: "What is NOT(1)?",
    options: [
        "1",
        "0",
        "10",
        "11"
    ],
    answer: 1
},

{
    question: "What is a qubit?",
    options: [
        "A classical bit",
        "A quantum bit",
        "A byte",
        "A transistor"
    ],
    answer: 1
},

{
    question: "Which property allows a qubit to exist in a combination of |0⟩ and |1⟩?",
    options: [
        "Entanglement",
        "Superposition",
        "Measurement",
        "Interference"
    ],
    answer: 1
},

{
    question: "When a qubit is measured, it becomes:",
    options: [
        "Both 0 and 1",
        "Either 0 or 1",
        "A byte",
        "An entangled pair"
    ],
    answer: 1
},

{
    question: "Probability amplitudes determine:",
    options: [
        "Memory size",
        "Measurement probabilities",
        "Processor speed",
        "Binary values"
    ],
    answer: 1
},

{
    question: "Quantum entanglement connects:",
    options: [
        "Classical bits",
        "Independent computers",
        "Qubits",
        "Logic gates"
    ],
    answer: 2
},

{
    question: "Bell States are examples of:",
    options: [
        "Logic gates",
        "Entangled states",
        "Binary numbers",
        "Registers"
    ],
    answer: 1
},

{
    question: "Measurement causes the quantum state to:",
    options: [
        "Expand",
        "Collapse",
        "Duplicate",
        "Disappear"
    ],
    answer: 1
},

{
    question: "Which notation represents a qubit state?",
    options: [
        "(0)",
        "{0}",
        "|0⟩",
        "[0]"
    ],
    answer: 2
},

{
    question: "Which gate is called the Quantum NOT Gate?",
    options: [
        "Z Gate",
        "X Gate",
        "H Gate",
        "CNOT Gate"
    ],
    answer: 1
},

{
    question: "The Pauli-Z gate primarily:",
    options: [
        "Swaps |0⟩ and |1⟩",
        "Changes the phase",
        "Creates a new qubit",
        "Measures a qubit"
    ],
    answer: 1
},

{
    question: "Quantum gates operate on:",
    options: [
        "Bytes",
        "Registers",
        "Qubits",
        "Files"
    ],
    answer: 2
},

{
    question: "Quantum algorithms manipulate qubits before measurement to:",
    options: [
        "Destroy information",
        "Increase the probability of the correct answer",
        "Convert qubits into bits",
        "Reduce memory usage"
    ],
    answer: 1
},

{
    question: "Which statement about quantum computers is TRUE?",
    options: [
        "They replace all classical computers",
        "They solve every problem instantly",
        "They are powerful for certain specialised problems",
        "They never make mistakes"
    ],
    answer: 2
},

{
    question: "Which sequence correctly describes what happens to a qubit?",
    options: [
        "Prepare → Apply Gates → Measure",
        "Measure → Prepare → Apply Gates",
        "Apply Gates → Measure → Prepare",
        "Prepare → Measure → Apply Gates"
    ],
    answer: 0
},
];

    private buttons: Phaser.GameObjects.Rectangle[] = [];
    private answered = false;

    constructor() {
        super("Semester1Exam");
    }

    create(): void {
        // Semester1Exam.ts
localStorage.setItem("currentScene", "Semester1Exam");
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
            "🎓 Semester 1 Complete!",
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
            "Loading Semester Complete...",
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