import BaseClassroom from "./base/BaseClassroom";

export default class Classroom5 extends BaseClassroom {

    constructor() {

        super("Classroom5", {

            background: "classroom5_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "MeasurementPuzzle",

            messages: [

"Professor: Excellent work!",

"Professor: You've now learned about superposition and entanglement, two of the most important ideas in quantum computing.",

"Professor: Today we'll explore another fundamental concept: Quantum Measurement.",

"Professor: A quantum computer performs calculations using qubits.",

"Professor: But eventually, we need an answer that humans can understand.",

"Professor: That answer is obtained through measurement.",

"QBot: Before a qubit is measured, it exists in a quantum state.",

"QBot: This quantum state may represent a superposition of both 0 and 1.",

"Professor: When we measure the qubit, we no longer observe a superposition.",

"Professor: Instead, we obtain a definite classical value.",

"Professor: The measurement result is always either 0 or 1.",

"QBot: This process is called Wave Function Collapse.",

"Professor: During measurement, the quantum state collapses into one of its possible outcomes.",

"Professor: After collapse, the original superposition no longer exists.",

"Professor: Which value will we observe?",

"Professor: Quantum mechanics cannot always predict the exact outcome of a single measurement.",

"Professor: Instead, it predicts the probability of each possible result.",

"QBot: Remember the probability amplitudes you learned about earlier?",

"QBot: Their magnitudes determine the probability of measuring each outcome.",

"Professor: For example, a qubit might have an 80% chance of becoming 0 and a 20% chance of becoming 1.",

"Professor: We don't know the exact result beforehand.",

"Professor: We only know how likely each result is.",

"QBot: If we prepare the same qubit thousands of times and measure it repeatedly,",

"QBot: the results will closely match those predicted probabilities.",

"Professor: This probabilistic behaviour is one of the biggest differences between classical and quantum computing.",

"Professor: A classical bit always has a definite value before you read it.",

"Professor: A qubit, however, evolves according to the laws of quantum mechanics until it is measured.",

"Professor: Measurement is not simply observing information.",

"Professor: It is an essential part of every quantum algorithm.",

"Professor: Quantum algorithms carefully manipulate qubits before measurement so that the correct answer becomes the most likely outcome.",

"QBot: In other words, quantum computers don't magically know the answer.",

"QBot: They use interference and probability to make the correct answer highly likely when measured.",

"Professor: Every useful quantum program ends with one or more measurements.",

"Professor: Without measurement, we could never read the results of a quantum computation.",

"Professor: Understanding measurement is essential before learning quantum circuits and quantum gates.",

"QBot: Ready to observe wave function collapse for yourself?",

"Press SPACE, ENTER or CLICK to begin the Measurement Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom5_bg",
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