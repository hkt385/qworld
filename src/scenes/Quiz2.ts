import BaseQuiz from "./BaseQuiz";

export default class Quiz2 extends BaseQuiz {

    protected title = "Lesson 2 Quiz";

    protected nextScene = "Lesson2Complete";

    protected questions = [
        {
            question: "Which gate outputs 1 only when BOTH inputs are 1?",
            options: ["OR Gate", "AND Gate", "NOT Gate"],
            answer: 1
        },
        {
            question: "What is the output of 1 OR 0?",
            options: ["0", "1"],
            answer: 1
        },
        {
            question: "What is the output of NOT 0?",
            options: ["0", "1"],
            answer: 1
        },
        {
            question: "Which gate has only ONE input?",
            options: ["AND Gate", "OR Gate", "NOT Gate"],
            answer: 2
        },
        {
            question: "What is the output of 1 AND 0?",
            options: ["0", "1"],
            answer: 0
        }
    ];

    constructor() {
        super("Quiz2");
    }

}