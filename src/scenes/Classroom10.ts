import BaseClassroom from "./base/BaseClassroom";

export default class Classroom10 extends BaseClassroom {

    constructor() {

        super("Classroom10", {

            background: "classroom10_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "QuantumErrorCorrectionPuzzle",
messages: [

"Professor: Welcome to Lesson 10!",

"Professor: So far, you've learned about superposition, entanglement, quantum gates, and teleportation.",

"Professor: But today's lesson focuses on one of the biggest obstacles in building a real quantum computer.",

"QBot: Quantum Errors!",

"Professor: Unlike classical computers, qubits are incredibly fragile.",

"Professor: Even tiny disturbances from the surrounding environment can change a qubit's state.",

"Professor: Heat, vibrations, stray electromagnetic waves, and interactions with nearby particles can all introduce errors.",

"QBot: This unwanted interference is called Quantum Noise.",

"Professor: Over time, quantum noise causes qubits to lose their delicate quantum properties.",

"Professor: This process is known as Decoherence.",

"QBot: When decoherence occurs, the quantum information gradually disappears.",

"Professor: There are several kinds of quantum errors.",

"Professor: One common error is the Bit-Flip Error.",

"Professor: A Bit-Flip changes |0⟩ into |1⟩ or |1⟩ into |0⟩.",

"QBot: It's similar to accidentally flipping a classical bit.",

"Professor: Another common error is the Phase-Flip Error.",

"Professor: A phase flip doesn't change whether the qubit measures as 0 or 1 immediately.",

"Professor: Instead, it changes the qubit's quantum phase, which can affect future quantum operations.",

"QBot: Since quantum algorithms rely on interference, phase errors can be just as dangerous as bit-flip errors.",

"Professor: You might wonder why we can't simply copy the qubit before something goes wrong.",

"Professor: Unfortunately, the No-Cloning Theorem tells us that unknown quantum states cannot be copied perfectly.",

"QBot: That means making backup copies isn't possible.",

"Professor: Instead, we use Quantum Error Correction Codes.",

"Professor: Rather than storing information in a single qubit, we spread the information across several entangled qubits.",

"Professor: These extra qubits work together to detect whether an error has occurred.",

"QBot: If an error is detected, special correction operations can restore the original quantum information.",

"Professor: The original quantum state is protected without ever violating the No-Cloning Theorem.",

"Professor: Modern quantum computers often require many physical qubits to create just one reliable logical qubit.",

"QBot: In some systems, hundreds or even thousands of physical qubits may eventually be needed to protect a single logical qubit.",

"Professor: Building machines that can continuously detect and correct errors is called Fault-Tolerant Quantum Computing.",

"Professor: Fault tolerance is one of the greatest engineering challenges in quantum computing today.",

"Professor: Scientists around the world are developing better error-correcting codes to make large-scale quantum computers possible.",

"QBot: Without Quantum Error Correction, powerful quantum computers could never perform long and complex calculations reliably.",

"Professor: Today, you'll learn how to detect and correct simple quantum errors.",

"QBot: Let's protect some fragile qubits!",

"Press SPACE, ENTER or CLICK to begin the Quantum Error Correction Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom10_bg",
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