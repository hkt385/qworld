import BaseClassroom from "./base/BaseClassroom";

export default class Classroom11 extends BaseClassroom {

    constructor() {

        super("Classroom11", {

            background: "classroom11_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "QuantumCryptographyPuzzle",

          messages: [

"Professor: Welcome to Lesson 11!",

"Professor: Today we'll explore one of the most practical applications of quantum mechanics: Quantum Cryptography.",

"QBot: Cryptography is the science of protecting information from unauthorized access.",

"Professor: Every day, cryptography keeps your online banking, passwords, emails, shopping, and private messages secure.",

"Professor: Most of today's encryption systems rely on mathematical problems that are extremely difficult for classical computers to solve.",

"Professor: Quantum Cryptography takes a completely different approach.",

"Professor: Instead of relying only on difficult mathematics, it uses the fundamental laws of quantum mechanics to provide security.",

"QBot: One of the most famous quantum cryptography methods is called Quantum Key Distribution, or QKD.",

"Professor: Before two people can send encrypted messages, they first need a secret key.",

"Professor: QKD allows two people to generate this secret key securely.",

"QBot: In cryptography, the sender is traditionally called Alice, and the receiver is called Bob.",

"Professor: Alice sends qubits to Bob using randomly chosen quantum states.",

"Professor: Bob measures each qubit using randomly chosen measurement bases.",

"Professor: Afterwards, Alice and Bob publicly compare which measurement bases they used, but they never reveal the actual key values.",

"QBot: They keep only the bits where both of them happened to use the same basis.",

"Professor: This famous method is known as the BB84 Protocol.",

"Professor: The BB84 protocol was proposed in 1984 by Charles Bennett and Gilles Brassard.",

"Professor: Now imagine that an eavesdropper named Eve tries to secretly intercept the qubits.",

"QBot: Eve has to measure the qubits before sending them on to Bob.",

"Professor: But measuring a quantum state usually changes it.",

"Professor: Because of this, Eve accidentally introduces errors into the transmitted qubits.",

"QBot: Alice and Bob can compare a small sample of their shared bits to check for these errors.",

"Professor: If too many errors are detected, they know someone has been listening.",

"Professor: The secret key is immediately discarded, and a new one is generated.",

"QBot: In this way, eavesdropping cannot remain hidden.",

"Professor: This ability to detect interception is what makes Quantum Cryptography so powerful.",

"Professor: Scientists have already demonstrated Quantum Key Distribution through optical fibres and satellites.",

"Professor: Many countries are actively developing quantum communication networks for highly secure communications.",

"QBot: In the future, Quantum Cryptography could help protect governments, hospitals, businesses, banks, and everyday internet users.",

"Professor: Today, you'll become Bob and determine whether your quantum key has been intercepted.",

"QBot: Watch carefully for any signs of eavesdropping!",

"Press SPACE, ENTER or CLICK to begin the Quantum Cryptography Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom11_bg",
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