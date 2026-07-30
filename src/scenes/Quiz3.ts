import BaseQuiz from "./BaseQuiz";

export default class Quiz3 extends BaseQuiz {

    protected title = "Lesson 3 Quiz";

    protected nextScene = "Lesson3Complete";

    protected questions = [
        {
            question: "A classical bit can store:",
            options: [
                "Only 0 or 1",
                "0 and 1 simultaneously",
                "Infinite values",
                "Letters"
            ],
            answer: 0
        },
        {
            question: "A qubit can exist in:",
            options: [
                "Only 0",
                "Only 1",
                "Superposition",
                "Decimal"
            ],
            answer: 2
        },
        {
            question: "Superposition means:",
            options: [
                "Two computers connected",
                "A qubit can exist in multiple states until measured",
                "Extra RAM",
                "Faster CPU"
            ],
            answer: 1
        }
    ];

    constructor() {
        super("Quiz3");
    }

}