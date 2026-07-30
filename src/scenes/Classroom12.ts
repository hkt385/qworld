import BaseClassroom from "./base/BaseClassroom";

export default class Classroom12 extends BaseClassroom {

    constructor() {

        super("Classroom12", {

            background: "classroom12_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "BlochSpherePuzzle",

            messages: [

"Professor: Welcome to the final lesson of Semester 2!",

"Professor: Congratulations! You've learned about superposition, entanglement, quantum gates, teleportation, error correction, and quantum cryptography.",

"QBot: That's a lot of quantum knowledge!",

"Professor: Today, we'll learn about one of the most important tools used by quantum scientists: the Bloch Sphere.",

"Professor: The Bloch Sphere is a way of visualizing the state of a single qubit.",

"QBot: Wait... I thought a qubit could only be |0⟩, |1⟩, or a superposition of both.",

"Professor: That's true, but there are infinitely many possible superposition states.",

"Professor: The Bloch Sphere lets us represent every possible state of a single qubit using a point on a sphere.",

"Professor: Imagine the Bloch Sphere as a globe, just like the Earth.",

"Professor: The North Pole represents the state |0⟩.",

"Professor: The South Pole represents the state |1⟩.",

"Professor: Every point between the poles represents a different superposition of |0⟩ and |1⟩.",

"QBot: So moving around the sphere changes the qubit's quantum state?",

"Professor: Exactly!",

"Professor: The sphere has three coordinate axes: X, Y, and Z.",

"Professor: These axes help describe the direction of the qubit's state in three-dimensional space.",

"Professor: Earlier, you learned about the Pauli-X, Pauli-Y, and Pauli-Z gates.",

"Professor: Each of these gates can be understood as rotating the qubit around one of these axes.",

"QBot: So quantum gates don't simply change numbers—they rotate the qubit's state on the Bloch Sphere!",

"Professor: Exactly. The Hadamard Gate, Pauli Gates, and many other quantum gates can all be visualized as rotations.",

"Professor: Different rotations create different quantum states.",

"Professor: This is why quantum algorithms are often described as carefully rotating qubits before making a measurement.",

"QBot: Once we measure the qubit, it collapses to either |0⟩ or |1⟩.",

"Professor: Correct. Until measurement, the Bloch Sphere helps us visualize where the qubit's state is located.",

"Professor: Scientists and engineers use the Bloch Sphere to design quantum circuits, understand quantum gates, and debug quantum algorithms.",

"Professor: Although the Bloch Sphere only represents a single qubit, it provides deep insight into how quantum information behaves.",

"QBot: It's like a map that lets us see where a qubit is pointing before it's measured.",

"Professor: Mastering the Bloch Sphere is an important milestone for every quantum computing student.",

"Professor: Congratulations on completing Semester 2!",

"Professor: In the next semester, you'll begin exploring real quantum algorithms and advanced quantum computing concepts.",

"QBot: Let's explore the Bloch Sphere and visualize different qubit states!",

"Press SPACE, ENTER or CLICK to begin the Bloch Sphere Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom12_bg",
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