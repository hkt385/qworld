import BaseClassroom from "./base/BaseClassroom";

export default class Classroom1 extends BaseClassroom {

    constructor() {

        super(
            "Classroom1",
            {
                background: "classroom1_bg",

                teacherTexture: "professor",
                assistantTexture: "qbot",

                teacherScale: 0.18,
                assistantScale: 0.12,

                teacherOffsetX: -100,
                assistantOffsetX: 100,

                music: "classroomMusic",

                nextScene: "BinaryPuzzle",

                messages: [

"Professor: Welcome to QWorld Academy!",

"Professor: This academy will teach you the fascinating world of quantum computing, starting from the very basics.",

"Professor: Before we can understand quantum computers, we must first understand how ordinary computers think.",

"Professor: Humans naturally count using the decimal number system.",

"QBot: The decimal system is also called Base-10 because it uses ten different digits.",

"QBot: Those digits are 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.",

"Professor: Every number you have ever written is made by combining these ten digits.",

"Professor: For example, the number 347 means:",

"Professor: 3 hundreds, 4 tens and 7 ones.",

"Professor: In decimal, every place value is a power of 10.",

"Professor: But computers don't understand ten different symbols like we do.",

"QBot: Computers are built from billions of tiny electronic switches called transistors.",

"QBot: A transistor is like a tiny light switch.",

"QBot: It can either be OFF or ON.",

"Professor: Since a transistor only has two possible states, computers use only two digits.",

"Professor: These digits are 0 and 1.",

"Professor: This system is called Binary, or Base-2.",

"QBot: In binary, every place value is a power of 2 instead of a power of 10.",

"Professor: The smallest unit of information in a computer is called a bit.",

"Professor: A bit can store only ONE value at a time: either 0 or 1.",

"QBot: Think of a light switch.",

"QBot: OFF = 0",

"QBot: ON = 1",

"Professor: One bit can represent only two possibilities.",

"Professor: If we combine two bits together, we can represent four different values.",

"QBot: They are 00, 01, 10 and 11.",

"Professor: Three bits can represent eight different values.",

"Professor: Four bits can represent sixteen different values.",

"Professor: Every additional bit doubles the number of possible combinations.",

"Professor: Let's compare decimal and binary numbers.",

"Professor: Decimal 0 = Binary 0",

"Professor: Decimal 1 = Binary 1",

"Professor: Decimal 2 = Binary 10",

"Professor: Decimal 3 = Binary 11",

"Professor: Decimal 4 = Binary 100",

"QBot: Notice how binary numbers only use the digits 0 and 1.",

"Professor: Even though binary looks different, it represents exactly the same values as decimal.",

"Professor: Every letter, picture, song, video and game on your computer is ultimately stored as billions of 0s and 1s.",

"QBot: Amazing, isn't it? Everything digital begins with simple bits!",

"Professor: In the next lesson, we'll discover how combining many bits allows computers to represent enormous amounts of information.",

"Professor: But first, let's see if you've understood today's lesson.",

"Press SPACE, ENTER or CLICK to begin the Binary Puzzle."

]
            }
        );

    }

    preload() {

        this.load.image(
            "classroom1_bg",
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