import BaseClassroom from "./base/BaseClassroom";

export default class Classroom4 extends BaseClassroom {

    constructor() {

        super("Classroom4", {

            background: "classroom4_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "EntanglementPuzzle",

            messages: [

"Professor: Fantastic work!",

"Professor: You now understand that a qubit can exist in superposition.",

"Professor: Today we'll learn one of the strangest and most fascinating ideas in quantum physics.",

"Professor: It is called Quantum Entanglement.",

"QBot: Entanglement happens when two or more qubits become connected in a very special way.",

"Professor: Once qubits become entangled, they can no longer be fully described independently.",

"Professor: Instead, they share a single quantum state.",

"QBot: Imagine two magical coins created together.",

"QBot: Even if you separate them by thousands of kilometres, they still behave as one quantum system.",

"Professor: Before measurement, neither qubit has a definite classical value.",

"Professor: But when one qubit is measured, the measurement outcomes of both qubits become strongly correlated.",

"Professor: This correlation is much stronger than anything possible in classical physics.",

"QBot: Imagine opening one mysterious box and instantly knowing what must be inside the other.",

"Professor: One famous example of an entangled state is called a Bell State.",

"Professor: Bell States are among the simplest and most important entangled quantum states.",

"Professor: One Bell State is written as (|00⟩ + |11⟩)/√2.",

"QBot: That means if we measure the first qubit as 0, the second will also be measured as 0.",

"QBot: If the first is measured as 1, the second will also be measured as 1.",

"Professor: Before measurement, neither qubit has already 'chosen' its value.",

"Professor: Their outcomes are determined only when the quantum state is measured.",

"Professor: Albert Einstein famously called this phenomenon 'Spooky Action at a Distance.'",

"Professor: Today we know that entanglement is a real property of nature, confirmed by many experiments.",

"Professor: However, entanglement cannot be used to send messages faster than the speed of light.",

"Professor: Although the measurement results are correlated, no usable information travels instantly between the qubits.",

"QBot: Scientists use entanglement as a powerful resource in quantum technologies.",

"Professor: Quantum communication uses entanglement to securely exchange information.",

"Professor: Quantum teleportation transfers the quantum state of a particle using entanglement and classical communication.",

"Professor: Future quantum networks may use entanglement to connect quantum computers across the world.",

"Professor: Many quantum algorithms also rely on entanglement to achieve computational advantages over classical computers.",

"QBot: Superposition allows a qubit to explore many possibilities.",

"QBot: Entanglement allows multiple qubits to work together as one quantum system.",

"Professor: Superposition and entanglement are two of the most important ingredients in quantum computing.",

"Professor: Understanding them is the key to understanding every quantum algorithm you'll learn later.",

"QBot: Ready to create your very first entangled pair?",

"Press SPACE, ENTER or CLICK to begin the Entanglement Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom4_bg",
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