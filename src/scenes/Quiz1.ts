import BaseQuiz from "./BaseQuiz";

export default class Quiz1 extends BaseQuiz {

    protected title = "Lesson 1 Quiz";

    protected nextScene = "Lesson1Complete";

    protected questions = [
        {
            question: "How many values can ONE bit store?",
            options: ["1", "2", "4", "8"],
            answer: 1
        },
        {
            question: "How many combinations do TWO bits have?",
            options: ["2", "4", "6", "8"],
            answer: 1
        },
        {
            question: "Computers fundamentally store information using...",
            options: ["Letters", "Pixels", "Bits", "Images"],
            answer: 2
        }
    ];

    constructor() {
        super("Quiz1");
    }

}