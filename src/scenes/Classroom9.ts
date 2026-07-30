import BaseClassroom from "./base/BaseClassroom";

export default class Classroom9 extends BaseClassroom {

    constructor() {

        super("Classroom9", {

            background: "classroom9_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "QuantumTeleportationPuzzle",

           messages: [

"Professor: Welcome to Lesson 9!",

"Professor: Today we'll explore one of the most fascinating ideas in quantum information science: Quantum Teleportation.",

"QBot: It sounds like something from a science fiction movie!",

"Professor: But despite its name, Quantum Teleportation does NOT teleport people, objects, or energy.",

"Professor: Instead, it transfers the complete quantum state of one qubit onto another distant qubit.",

"Professor: Imagine writing a secret message on a sheet of paper.",

"QBot: Instead of physically sending the paper, the exact same message appears on another sheet somewhere else.",

"QBot: The information moves, not the paper itself.",

"Professor: In quantum teleportation, the quantum information is transferred from one qubit to another.",

"Professor: The original qubit loses its original quantum state during the process.",

"Professor: This happens because of an important rule called the No-Cloning Theorem.",

"Professor: The No-Cloning Theorem states that an unknown quantum state cannot be copied perfectly.",

"Professor: In other words, teleportation transfers the state rather than creating a duplicate.",

"QBot: Quantum Teleportation requires three important ingredients.",

"Professor: The first ingredient is Entanglement.",

"Professor: Before teleportation can begin, two qubits must already share an entangled state.",

"QBot: Think of the entangled qubits as a special quantum link connecting two distant locations.",

"Professor: The second ingredient is Measurement.",

"Professor: The sender performs a special measurement on the original qubit and one member of the entangled pair.",

"Professor: This measurement produces two classical bits of information.",

"QBot: Those bits are ordinary binary values like 00, 01, 10 or 11.",

"Professor: The third ingredient is Classical Communication.",

"Professor: Those two classical bits must be sent to the receiver using an ordinary communication channel.",

"Professor: This could be a fibre optic cable, the internet, or even a radio signal.",

"Professor: Since this message travels classically, it cannot travel faster than the speed of light.",

"QBot: That's why Quantum Teleportation does NOT allow faster-than-light communication.",

"Professor: Once the receiver gets the classical message, they know exactly which quantum gate to apply.",

"Professor: After applying the correct operation, the receiver's qubit becomes identical to the sender's original quantum state.",

"Professor: The quantum state has now been successfully teleported.",

"QBot: No particles travelled between the two locations.",

"QBot: Only the quantum information was transferred.",

"Professor: Scientists are already demonstrating quantum teleportation over optical fibres and even between satellites and ground stations.",

"Professor: In the future, Quantum Teleportation could become one of the key technologies behind the Quantum Internet.",

"Professor: It will also play an important role in secure quantum communication and large-scale quantum networks.",

"Professor: Today, you'll perform your very first Quantum Teleportation experiment!",

"Press SPACE, ENTER or CLICK to begin the Quantum Teleportation Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom9_bg",
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