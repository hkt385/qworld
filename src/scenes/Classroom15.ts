import BaseClassroom from "./base/BaseClassroom";

export default class Classroom15 extends BaseClassroom {

    constructor() {

        super("Classroom15", {

            background: "classroom15_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "LatticePuzzle",

            messages: [

                "Professor: Welcome back! Today we'll discover why Post-Quantum Cryptography is built on lattice mathematics.",

                "Professor: You already know that RSA relies on prime numbers.",

                "Professor: Modern post-quantum algorithms rely on completely different mathematical problems.",

                "Player: What kind of mathematics?",

                "Professor: Many are based on structures called lattices.",

                "QBot: Imagine an endless grid of points stretching in every direction.",

                "QBot: That grid is called a lattice.",

                "Professor: Instead of factoring huge numbers, cryptographers solve problems inside these lattices.",

                "Professor: One famous challenge is the Shortest Vector Problem, or SVP.",

                "Player: Why is finding the shortest vector so difficult?",

                "Professor: In two or three dimensions it's easy.",

                "Professor: But in hundreds or thousands of dimensions, the number of possibilities becomes enormous.",

                "Professor: No efficient classical or quantum algorithm is known for solving these problems.",

                "QBot: Searching becomes like looking for a single grain of sand in an entire desert.",

                "Professor: Another important problem is Learning With Errors, or LWE.",

                "Player: What does that mean?",

                "Professor: Imagine every clue you receive contains a tiny amount of random noise.",

                "Professor: Recovering the real answer becomes extremely difficult.",

                "QBot: That small amount of randomness creates very strong security.",

                "Professor: Algorithms such as ML-KEM are built upon these hard mathematical problems.",

                "Professor: Researchers have studied lattice problems for decades without discovering efficient attacks.",

                "Player: So the security comes from mathematics, not secrecy?",

                "Professor: Exactly.",

                "Professor: We always assume attackers know the algorithm.",

                "Professor: Only the cryptographic key should remain secret.",

                "QBot: Strong mathematics protects that key.",

                "Professor: Now it's your turn to experience a simplified lattice challenge.",

                "Professor: Press SPACE, ENTER, or CLICK to begin the Lattice Challenge!"

            ]

        });

    }

    preload() {

        this.load.image(
            "classroom15_bg",
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