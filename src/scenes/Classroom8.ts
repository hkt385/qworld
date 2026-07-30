import BaseClassroom from "./base/BaseClassroom";

export default class Classroom8 extends BaseClassroom {

    constructor() {

        super("Classroom8", {

            background: "classroom8_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "QuantumCircuitPuzzle",

         messages: [

"Professor: Welcome to Semester 2!",

"Professor: Congratulations on completing the foundations of quantum computing.",

"Professor: Previously, you learned that qubits are represented using ket notation such as |0⟩ and |1⟩.",

"Professor: Today, we'll learn one of the most important operations in quantum computing: the Hadamard Gate.",

"QBot: The Hadamard Gate is usually written simply as H.",

"Professor: Unlike the Pauli-X Gate, the Hadamard Gate does not simply flip a qubit.",

"Professor: Instead, it creates superposition.",

"Professor: If we apply the Hadamard Gate to |0⟩, the qubit enters an equal superposition of |0⟩ and |1⟩.",

"Professor: This new quantum state is called |+⟩, pronounced 'ket plus'.",

"Professor: Mathematically, |+⟩ = (|0⟩ + |1⟩)/√2.",

"QBot: When we measure |+⟩, there's a 50% chance of getting 0 and a 50% chance of getting 1.",

"Professor: If we instead apply the Hadamard Gate to |1⟩, we obtain another state called |−⟩, pronounced 'ket minus'.",

"Professor: Mathematically, |−⟩ = (|0⟩ − |1⟩)/√2.",

"QBot: Even though |+⟩ and |−⟩ both give a 50% chance of measuring 0 or 1, they are different quantum states.",

"Professor: The difference lies in something called phase.",

"Professor: Phase cannot be directly observed in a single measurement, but it changes how quantum states interact with one another.",

"Professor: This interaction is known as Quantum Interference.",

"QBot: Imagine dropping two stones into a pond.",

"QBot: As the ripples meet, some waves become larger while others cancel each other out.",

"Professor: Quantum states behave similarly.",

"Professor: Constructive interference increases the probability of certain outcomes.",

"Professor: Destructive interference decreases the probability of other outcomes.",

"Professor: Quantum algorithms carefully use interference to make the correct answers more likely when the qubits are measured.",

"Professor: This is one of the greatest advantages of quantum computing.",

"QBot: That's why the Hadamard Gate appears in almost every famous quantum algorithm!",

"Professor: You'll find it in Grover's Search Algorithm, Shor's Factoring Algorithm, the Quantum Fourier Transform, and many quantum communication protocols.",

"Professor: Without the Hadamard Gate, creating useful superposition would be impossible.",

"Professor: Mastering this gate is an important step toward building real quantum circuits.",

"QBot: Let's create superposition and see the Hadamard Gate in action!",

"Press SPACE, ENTER or CLICK to begin the Hadamard Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom8_bg",
            "assets/backgrounds/classroom1_bg.png"
        );

        this.load.image(
            "professor",
            "assets/sprites/professor.png"
        );

        this.load.image(
            "qbot",
            "assets/sprites/qbot.png"
        );

    }

}