import BaseClassroom from "./base/BaseClassroom";

export default class Classroom7 extends BaseClassroom {

    constructor() {

        super("Classroom7", {

            background: "classroom7_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "HadamardPuzzle",

            messages: [

                "Professor: Congratulations on completing Semester 1!",

                "Professor: Today you'll learn one of the most important quantum gates.",

                "Professor: Before we begin, let's understand a new notation used in quantum computing.",

                "Professor: The symbol |⟩ is called a 'ket' (pronounced 'ket').",

                "Professor: A ket simply represents the state of a qubit.",

                "Professor: |0⟩ is pronounced 'ket zero'. It means the qubit is in state 0.",

                "Professor: |1⟩ is pronounced 'ket one'. It means the qubit is in state 1.",

                "Professor: The Hadamard Gate can also create |+⟩ (ket plus) and |−⟩ (ket minus).",

                "QBot: |+⟩ and |−⟩ are superposition states, where the qubit exists as a combination of |0⟩ and |1⟩ until it is measured.",

                "Professor: Now that you know ket notation, let's learn the Hadamard Gate.",

                "Professor: Unlike the X Gate, the Hadamard Gate doesn't simply flip a qubit.",

                "Professor: It creates superposition.",

                "Professor: Applying the Hadamard Gate (H) to |0⟩ produces |+⟩.",

                "Professor: Applying the Hadamard Gate (H) to |1⟩ produces |−⟩.",

                "QBot: That's why the Hadamard Gate is used in almost every quantum algorithm!",

                "Professor: Let's try it ourselves!",

                "Press SPACE, ENTER or CLICK to continue."

            ]

        });

    }

    preload() {

        this.load.image(
            "classroom7_bg",
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