import BaseClassroom from "./base/BaseClassroom";

export default class Classroom2 extends BaseClassroom {

    constructor() {

        super("Classroom2", {

            background: "classroom2_bg",

            teacherTexture: "professor",
            assistantTexture: "qbot",

            teacherScale: 0.18,
            assistantScale: 0.12,

            teacherOffsetX: -80,
            assistantOffsetX: 80,

            music: "classroomMusic",

            nextScene: "LogicGatePuzzle",
messages: [

"Professor: Welcome back to QWorld Academy!",

"Professor: In our previous lesson, you learned that computers store information using bits: 0s and 1s.",

"Professor: But storing information isn't enough. Computers also need to make decisions.",

"Professor: Every time you open an app, search the internet, or play a game, millions of decisions are made every second.",

"QBot: Computers don't understand words like 'Yes', 'No', 'True', or 'False'.",

"QBot: Instead, they represent these ideas using binary values.",

"Professor: In computer science, we call this Boolean Logic.",

"Professor: A value of 1 represents TRUE, while a value of 0 represents FALSE.",

"Professor: Using Boolean Logic, computers compare values and make decisions.",

"QBot: The tiny electronic circuits that perform these decisions are called Logic Gates.",

"Professor: Think of a Logic Gate as a tiny decision-making machine.",

"Professor: It accepts one or more inputs, performs a simple logical operation, and produces exactly one output.",

"Professor: Let's begin with the AND Gate.",

"Professor: The AND Gate produces an output of 1 ONLY when BOTH inputs are 1.",

"Professor: If even one input is 0, the output becomes 0.",

"QBot: Imagine a high-security laboratory.",

"QBot: The door opens only if you scan BOTH your ID card AND your fingerprint.",

"QBot: Missing either one keeps the door locked.",

"Professor: The truth table for an AND Gate is:",

"Professor: 0 AND 0 = 0",

"Professor: 0 AND 1 = 0",

"Professor: 1 AND 0 = 0",

"Professor: 1 AND 1 = 1",

"Professor: Now let's learn the OR Gate.",

"Professor: The OR Gate outputs 1 if AT LEAST ONE input is 1.",

"Professor: The only time it outputs 0 is when BOTH inputs are 0.",

"QBot: Think about unlocking your phone.",

"QBot: You can use your fingerprint OR your face scan.",

"QBot: Either one works, so the phone unlocks.",

"Professor: The truth table for an OR Gate is:",

"Professor: 0 OR 0 = 0",

"Professor: 0 OR 1 = 1",

"Professor: 1 OR 0 = 1",

"Professor: 1 OR 1 = 1",

"Professor: Finally, let's look at the NOT Gate.",

"Professor: Unlike the previous gates, it has only ONE input.",

"Professor: It simply reverses the value.",

"Professor: NOT 0 becomes 1.",

"Professor: NOT 1 becomes 0.",

"QBot: Imagine a light switch.",

"QBot: If the light is OFF, pressing the switch turns it ON.",

"QBot: If the light is ON, pressing it turns the light OFF.",

"Professor: By combining AND, OR, and NOT Gates, engineers can build much more complex circuits.",

"Professor: Gates like NAND, NOR, XOR, and XNOR are all created by combining these basic gates.",

"Professor: Inside your computer's processor are billions of transistors connected together to form billions of Logic Gates.",

"Professor: Every calculation, every comparison, every game, and every application relies on these gates.",

"Professor: Even something as simple as checking whether your password is correct is performed using logic gates.",

"QBot: Later in your quantum journey, you'll discover Quantum Gates.",

"QBot: Quantum Gates don't simply output 0 or 1—they manipulate qubits using the principles of quantum mechanics!",

"Professor: But before we reach that stage, you must master classical logic first.",

"Professor: Let's test your understanding with a Logic Gate Puzzle!",

"Press SPACE, ENTER or CLICK to begin the Logic Gate Puzzle."

]

        });

    }

    preload() {

        this.load.image(
            "classroom2_bg",
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