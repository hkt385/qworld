import BaseClassroom from "./base/BaseClassroom";

export default class Classroom3 extends BaseClassroom {

    constructor() {

        super("Classroom3", {

            background: "classroom3_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -100,
            assistantOffsetX: 100,

            music: "classroomMusic",

            nextScene: "SuperpositionPuzzle",
messages: [

"Professor: Excellent work!",

"Professor: You now understand how classical computers store and process information using bits and logic gates.",

"Professor: Today, we'll take our first step into the quantum world.",

"Professor: Quantum computers don't use bits.",

"Professor: Instead, they use Quantum Bits, or simply Qubits.",

"QBot: A classical bit can only store one value at a time.",

"QBot: It is either 0 or 1. Never both.",

"Professor: A qubit is very different.",

"Professor: A qubit is described by something called a Quantum State.",

"Professor: A quantum state tells us everything we can know about that qubit before it is measured.",

"QBot: Unlike a classical bit, a qubit isn't limited to just 0 or just 1.",

"Professor: A qubit can exist in a combination of both states at once.",

"Professor: This remarkable property is called Superposition.",

"QBot: Imagine spinning a coin.",

"QBot: While the coin is spinning, it isn't resting as Heads or Tails.",

"QBot: It has the potential to become either one when it lands.",

"Professor: Although a spinning coin is only an analogy, it helps us imagine how a qubit behaves before measurement.",

"Professor: When we measure a qubit, we always obtain a definite answer: either 0 or 1.",

"Professor: But before measurement, the qubit exists in its quantum state.",

"Professor: That quantum state contains Probability Amplitudes.",

"QBot: Probability amplitudes determine how likely the qubit is to be measured as 0 or as 1.",

"Professor: They are not ordinary probabilities.",

"Professor: Quantum mechanics uses these amplitudes to describe how quantum systems behave.",

"Professor: When we square the magnitude of a probability amplitude, we obtain the probability of measuring each outcome.",

"QBot: For example, one quantum state might have a 70% chance of becoming 0 and a 30% chance of becoming 1.",

"Professor: Another quantum state could give an equal 50% chance for both outcomes.",

"Professor: Scientists can carefully manipulate these probability amplitudes using Quantum Gates.",

"Professor: This allows quantum computers to explore many possible solutions during a computation.",

"QBot: That's what makes superposition so powerful!",

"Professor: Imagine searching a huge maze.",

"Professor: A classical computer usually explores one path after another.",

"Professor: A quantum computer can use superposition to represent many possible paths during its computation.",

"Professor: This doesn't mean it instantly checks every answer.",

"Professor: Instead, clever quantum algorithms manipulate probability amplitudes so that correct answers become more likely to appear when measured.",

"QBot: That's why quantum computers can solve certain problems much faster than classical computers.",

"Professor: Superposition is one of the most important ideas in all of quantum computing.",

"Professor: Master this concept, and you'll be ready to learn entanglement and quantum gates.",

"Professor: Let's experiment with Superposition ourselves!",

"Press SPACE, ENTER or CLICK to begin the Superposition Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom3_bg",
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