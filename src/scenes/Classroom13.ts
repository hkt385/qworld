import BaseClassroom from "./base/BaseClassroom";

export default class Classroom13 extends BaseClassroom {

    constructor() {

        super("Classroom13", {

            background: "classroom13_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "QuantumUpgradePuzzle",

            messages: [

"Professor: Welcome to Semester 3!",

"Professor: Congratulations on completing the foundations of quantum computing.",

"QBot: We've learned about qubits, superposition, entanglement, quantum gates, teleportation, error correction, and quantum cryptography!",

"Professor: Excellent work. But today we'll begin studying one of the most important challenges created by quantum computers.",

"Professor: Post-Quantum Cryptography.",

"QBot: Wait... didn't we already learn Quantum Cryptography?",

"Professor: That's an excellent question.",

"Professor: Although their names sound similar, Quantum Cryptography and Post-Quantum Cryptography are two completely different fields.",

"Professor: Quantum Cryptography uses quantum mechanics to protect information.",

"Professor: Post-Quantum Cryptography designs mathematical algorithms that remain secure even if an attacker owns a powerful quantum computer.",

"Professor: Before we understand Post-Quantum Cryptography, we first need to understand how today's internet stays secure.",

"QBot: Every time you log into a website, send a message, or make an online payment, cryptography is working behind the scenes.",

"Professor: Websites, banks, hospitals, governments, cloud services, and billions of devices all rely on modern cryptography.",

"Professor: Two of the most widely used public-key cryptographic systems are RSA and Elliptic Curve Cryptography, often called ECC.",

"QBot: These algorithms help people exchange secret keys and verify digital signatures securely.",

"Professor: Their security depends on mathematical problems that are extremely difficult for today's classical computers to solve.",

"Professor: RSA is based on the difficulty of factoring very large integers.",

"Professor: For example, multiplying two prime numbers together is easy.",

"Professor: But if you're only given the enormous product, discovering the original prime numbers is incredibly difficult.",

"Professor: Modern RSA keys use numbers hundreds of digits long, making brute-force attacks impractical with classical computers.",

"QBot: ECC relies on a different mathematical problem called the Elliptic Curve Discrete Logarithm Problem.",

"Professor: Classical computers would need an enormous amount of time to solve these problems.",

"Professor: Because of this, the world's digital infrastructure has trusted RSA and ECC for decades.",

"QBot: So... where do quantum computers enter the story?",

"Professor: In 1994, computer scientist Peter Shor discovered a remarkable quantum algorithm.",

"Professor: Shor's Algorithm showed that a sufficiently large fault-tolerant quantum computer could efficiently solve problems that classical computers struggle with.",

"Professor: This means future quantum computers could break RSA and ECC.",

"QBot: If that happens, many of today's encrypted communications could become vulnerable.",

"Professor: This is why researchers around the world are preparing new cryptographic algorithms today—even before large quantum computers exist.",

"Professor: There is another important concern called 'Harvest Now, Decrypt Later.'",

"Professor: An attacker can steal encrypted information today and simply store it.",

"Professor: Years later, when powerful quantum computers become available, they may attempt to decrypt that stored data.",

"QBot: That means information we encrypt today could still be at risk in the future!",

"Professor: Exactly.",

"Professor: The solution is not to wait until quantum computers arrive.",

"Professor: We must begin replacing vulnerable cryptographic algorithms before that happens.",

"Professor: This worldwide transition is called Post-Quantum Cryptography.",

"QBot: During this semester, you'll discover how entirely new mathematical ideas are protecting the future of digital security.",

"Professor: Welcome to one of the fastest-growing fields in modern cybersecurity.",

"Professor: Let's begin our journey into Post-Quantum Cryptography!",

"Press SPACE, ENTER or CLICK to begin the Post-Quantum Cryptography Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom13_bg",
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