import BaseClassroom from "./base/BaseClassroom";

export default class Classroom14 extends BaseClassroom {

    constructor() {

        super("Classroom14", {

            background: "classroom14_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "PostQuantumMigrationPuzzle",

            messages: [

"Professor: Welcome back! Last lesson, we discovered that powerful quantum computers could threaten many of today's encryption systems.",

"Professor: Today, we'll learn about the solution: Post-Quantum Cryptography, or PQC.",

"Player: Is that the same as Quantum Cryptography?",

"Professor: That's one of the biggest misconceptions. They are completely different technologies.",

"Professor: Quantum Cryptography uses the laws of quantum physics to secure communication.",

"Professor: Post-Quantum Cryptography uses classical computers but relies on mathematical problems that are believed to resist attacks from both classical and quantum computers.",

"QBot: Think of Quantum Cryptography as building a secure road using quantum physics.",

"QBot: Post-Quantum Cryptography is like designing stronger locks that even future quantum thieves cannot break.",

"Player: So... Post-Quantum Cryptography doesn't use a quantum computer?",

"Professor: Exactly! It runs on the same laptops, phones, servers, and computers we use every day.",

"Professor: The goal isn't to build quantum computers. The goal is to protect today's digital world from tomorrow's quantum attacks.",

"Player: Then why are companies switching now if powerful quantum computers don't exist yet?",

"Professor: Because cybersecurity is about preparing before the threat arrives.",

"Professor: Imagine waiting until burglars learned to unlock every door before replacing your locks.",

"Player: That would be far too late.",

"Professor: Exactly.",

"Professor: Governments, banks, hospitals, cloud providers, and technology companies are already preparing for the quantum era.",

"QBot: Many organizations are replacing RSA and ECC with new Post-Quantum algorithms.",

"Player: But who decides which algorithms are actually safe?",

"Professor: Researchers from around the world designed and submitted new cryptographic algorithms for testing.",

"Professor: The National Institute of Standards and Technology, better known as NIST, spent years evaluating them.",

"Professor: Every algorithm was tested for security, efficiency, and practicality.",

"Professor: After years of research, NIST selected several algorithms to become the new global standards.",

"Professor: Two of the most important are ML-KEM for secure key establishment and ML-DSA for digital signatures.",

"QBot: These algorithms are designed to resist attacks from both classical and future quantum computers.",

"Professor: Remember this carefully...",

"Professor: Quantum Cryptography uses quantum physics to secure communication.",

"Professor: Post-Quantum Cryptography uses classical computers with new mathematics to defend against quantum attacks.",

"Player: So we're upgrading our digital locks before someone invents a better lockpick.",

"Professor: Precisely! That's exactly why the world is migrating to Post-Quantum Cryptography today.",

"Professor: Press SPACE, ENTER, or CLICK to begin the Post-Quantum Migration Challenge!"

]

        });

    }

    preload() {

        this.load.image(
            "classroom14_bg",
            "assets/backgrounds/classroom14_bg.png"
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