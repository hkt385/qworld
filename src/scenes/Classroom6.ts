import BaseClassroom from "./base/BaseClassroom";

export default class Classroom6 extends BaseClassroom {

    constructor() {

        super("Classroom6", {

            background: "classroom6_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "QuantumGatePuzzle",

            messages: [
"Professor: Before we learn Quantum Gates, there's one important language every quantum scientist uses.",

"Professor: It is called Dirac Notation, or Ket Notation.",

"QBot: You may have noticed strange symbols like |0⟩ and |1⟩.",

"QBot: They are pronounced 'ket zero' and 'ket one'.",

"Professor: The vertical line '|' and the angle bracket '⟩' together form a symbol called a ket.",

"Professor: A ket represents the quantum state of a qubit.",

"Professor: |0⟩ represents a qubit in the state 0.",

"Professor: |1⟩ represents a qubit in the state 1.",

"QBot: Unlike classical bits, qubits can also exist in combinations of these two states.",

"Professor: For example, a qubit in superposition can be written as:",

"Professor: α|0⟩ + β|1⟩",

"QBot: Here, α (alpha) and β (beta) are called probability amplitudes.",

"Professor: They describe how much of |0⟩ and |1⟩ make up the quantum state.",

"Professor: When we measure the qubit, these amplitudes determine the probability of obtaining 0 or 1.",

"Professor: From now on, we'll use ket notation whenever we describe quantum states.",


"Professor: You've learned what qubits are, how they exist in superposition, how they become entangled, and how they are measured.",

"Professor: But quantum computers don't simply observe qubits.",

"Professor: They perform calculations by changing the quantum state of qubits.",

"Professor: To do this, they use Quantum Gates.",

"QBot: A Quantum Gate is an operation that transforms the state of a qubit.",

"QBot: Just as Logic Gates manipulate classical bits, Quantum Gates manipulate qubits.",

"Professor: Unlike classical logic gates, quantum gates don't simply change 0 to 1.",

"Professor: They can rotate, flip, and even change the phase of a quantum state.",

"Professor: Today we'll learn three of the most important single-qubit gates: the Pauli Gates.",

"Professor: Let's begin with the Pauli-X Gate.",

"QBot: The Pauli-X Gate is often called the Quantum NOT Gate.",

"QBot: If the qubit is |0⟩, the X Gate changes it to |1⟩.",

"QBot: If the qubit is |1⟩, it changes it back to |0⟩.",

"Professor: In that sense, it behaves similarly to the classical NOT Gate.",

"Professor: Next comes the Pauli-Y Gate.",

"Professor: The Y Gate also flips the qubit between |0⟩ and |1⟩.",

"Professor: However, it also changes the phase of the quantum state.",

"QBot: The phase isn't something we can directly measure.",

"QBot: But it plays a crucial role in how quantum states interfere with one another.",

"Professor: Finally, let's study the Pauli-Z Gate.",

"Professor: Unlike the X and Y Gates, the Z Gate does not swap |0⟩ and |1⟩.",

"Professor: Instead, it changes the phase of the |1⟩ state while leaving |0⟩ unchanged.",

"QBot: Although this may seem invisible, it can completely change how a quantum algorithm behaves.",

"Professor: Remember that a qubit is represented by a quantum state.",

"Professor: Every quantum gate transforms that quantum state according to the rules of quantum mechanics.",

"Professor: By applying different gates in different orders, we can build powerful quantum circuits.",

"Professor: A quantum circuit is simply a sequence of quantum gates applied to one or more qubits.",

"QBot: Think of building with LEGO bricks.",

"QBot: One brick isn't very exciting.",

"QBot: But connecting many bricks together lets you build amazing creations.",

"Professor: Quantum algorithms work in exactly the same way.",

"Professor: Small quantum gates combine to perform incredibly complex computations.",

"Professor: Every famous quantum algorithm—from Grover's Search to Shor's Factoring Algorithm—is built from quantum gates.",

"Professor: Mastering these basic gates is the first step toward building your own quantum programs.",

"QBot: Let's experiment with the Pauli Gates and see how they transform qubits!",

"Press SPACE, ENTER or CLICK to begin the Quantum Gate Puzzle."

            ]

        });

    }

    preload() {

        this.load.image(
            "classroom6_bg",
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