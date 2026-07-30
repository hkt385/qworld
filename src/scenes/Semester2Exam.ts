import Phaser from "phaser";

interface QuizQuestion {
    question: string;
    options: string[];
    answer: number;
}

export default class Semester2Exam extends Phaser.Scene {

    private score = 0;
    private currentQuestion = 0;

    private readonly title = "🎓 Semester 2 Final Exam";
    private readonly nextScene = "Semester2Complete";

    private questions: QuizQuestion[] = [

{
    question: "What is the primary purpose of the Hadamard Gate?",
    options: [
        "Measure a qubit",
        "Create superposition",
        "Delete a qubit",
        "Correct errors"
    ],
    answer: 1
},

{
    question: "Applying a Hadamard Gate to |0⟩ produces:",
    options: [
        "|1⟩",
        "|+⟩",
        "|−⟩",
        "|0⟩"
    ],
    answer: 1
},

{
    question: "The state |−⟩ is created by applying the Hadamard Gate to:",
    options: [
        "|0⟩",
        "|1⟩",
        "|+⟩",
        "|−⟩"
    ],
    answer: 1
},

{
    question: "Quantum interference is caused by differences in:",
    options: [
        "Memory",
        "Phase",
        "Voltage",
        "Temperature"
    ],
    answer: 1
},

{
    question: "Constructive interference:",
    options: [
        "Decreases probabilities",
        "Increases certain probabilities",
        "Measures qubits",
        "Creates errors"
    ],
    answer: 1
},

{
    question: "A quantum circuit is:",
    options: [
        "A collection of quantum gates",
        "A classical CPU",
        "A memory chip",
        "A binary register"
    ],
    answer: 0
},

{
    question: "Quantum teleportation transfers:",
    options: [
        "Matter",
        "Energy",
        "The quantum state of a qubit",
        "Electricity"
    ],
    answer: 2
},

{
    question: "Quantum teleportation requires:",
    options: [
        "Only entanglement",
        "Entanglement, measurement, and classical communication",
        "Only a Hadamard Gate",
        "Only a Bloch Sphere"
    ],
    answer: 1
},

{
    question: "The No-Cloning Theorem states that:",
    options: [
        "Qubits can be copied perfectly",
        "Unknown quantum states cannot be copied perfectly",
        "Bits cannot be copied",
        "Measurements are impossible"
    ],
    answer: 1
},

{
    question: "Quantum teleportation allows:",
    options: [
        "Faster-than-light communication",
        "Teleporting people",
        "Transfer of quantum information",
        "Infinite data storage"
    ],
    answer: 2
},

{
    question: "Quantum noise can cause:",
    options: [
        "Decoherence",
        "Superposition",
        "Entanglement",
        "Teleportation"
    ],
    answer: 0
},

{
    question: "A Bit-Flip Error changes:",
    options: [
        "|0⟩ to |1⟩ or |1⟩ to |0⟩",
        "The phase only",
        "A qubit into a byte",
        "Nothing"
    ],
    answer: 0
},

{
    question: "Quantum Error Correction protects information by:",
    options: [
        "Copying qubits",
        "Using several entangled qubits",
        "Deleting noisy qubits",
        "Converting qubits to bits"
    ],
    answer: 1
},

{
    question: "BB84 is a protocol for:",
    options: [
        "Quantum Teleportation",
        "Quantum Key Distribution",
        "Quantum Error Correction",
        "Grover's Search"
    ],
    answer: 1
},

{
    question: "Why can Alice and Bob detect an eavesdropper in BB84?",
    options: [
        "Because Eve changes the quantum states by measuring them",
        "Because Eve tells them the password",
        "Because Alice knows Bob's key",
        "Because quantum computers stop working"
    ],
    answer: 0
},

{
    question: "If Eve measures transmitted qubits:",
    options: [
        "Nothing changes",
        "She introduces detectable errors",
        "The key becomes stronger",
        "Teleportation occurs"
    ],
    answer: 1
},

{
    question: "The Bloch Sphere represents:",
    options: [
        "A classical bit",
        "A single qubit state",
        "An entire quantum computer",
        "A logic gate"
    ],
    answer: 1
},

{
    question: "On the Bloch Sphere, the North Pole represents:",
    options: [
        "|1⟩",
        "|+⟩",
        "|0⟩",
        "|−⟩"
    ],
    answer: 2
},

{
    question: "Quantum gates can be visualized on the Bloch Sphere as:",
    options: [
        "Measurements",
        "Rotations",
        "Binary operations",
        "Error corrections"
    ],
    answer: 1
},

{
    question: "Why is the Hadamard Gate used at the beginning of many quantum algorithms?",
    options: [
        "It measures every qubit",
        "It creates superposition, allowing many possibilities to be explored simultaneously",
        "It permanently stores quantum information",
        "It removes all quantum errors"
    ],
    answer: 1
},

];
    private buttons: Phaser.GameObjects.Rectangle[] = [];
    private answered = false;

    constructor() {
        super("Semester2Exam");
    }



    create(): void {
        // Semester2Exam.ts
localStorage.setItem("currentScene", "Semester2Exam");
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
            "🎓 Semester 2 Complete!",
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