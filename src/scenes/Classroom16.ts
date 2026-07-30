import BaseClassroom from "./base/BaseClassroom";

export default class Classroom16 extends BaseClassroom {

    constructor() {

        super("Classroom16", {

            background: "classroom16_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "FutureQuantumPuzzle",

            messages: [

                "Professor: Welcome to Lesson 16, our final lesson of Semester 3.",

                "Professor: You've learned how quantum computers work and why they threaten today's public-key cryptography.",

                "Player: We've also explored Post-Quantum Cryptography and lattice-based algorithms like ML-KEM.",

                "Professor: Excellent! Now let's discuss the future of cybersecurity.",

                "Professor: Quantum computers won't replace every computer. Classical computers will continue to be used for most everyday tasks.",

                "QBot: The biggest change is that vulnerable cryptographic algorithms must be replaced with quantum-resistant ones.",

                "Professor: Algorithms such as RSA and Elliptic Curve Cryptography are vulnerable because of Shor's Algorithm.",

                "Professor: Fortunately, not everything needs replacing. AES-256 and SHA-3 remain strong choices against known quantum attacks.",

                "QBot: NIST has already standardized new algorithms like ML-KEM for encryption and ML-DSA for digital signatures.",

                "Professor: Organizations around the world are already planning and beginning this migration.",

                "Player: So future cybersecurity is about knowing which algorithms are safe and which are vulnerable.",

                "Professor: Exactly. Security professionals must identify outdated cryptography and replace it before powerful quantum computers become available.",

                "QBot: Your final challenge is to act as a Quantum Security Firewall.",

                "QBot: Allow quantum-safe algorithms through the firewall, and block vulnerable algorithms before they can compromise the network.",

                "Professor: This challenge combines everything you've learned throughout Semester 3.",

                "Professor: Press SPACE, ENTER, or CLICK to begin the Crypto Firewall Challenge."

            ]

        });

    }

    preload() {

        this.load.image(
            "classroom16_bg",
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