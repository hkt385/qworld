import BaseQuiz from "./BaseQuiz";

export default class Quiz5 extends BaseQuiz {

    protected title = "Lesson 5 Quiz";

    protected nextScene = "Lesson5Complete";

    protected questions = [
        {
            question: "What happens when a qubit is measured?",
            options: [
                "It collapses into a single state",
                "It duplicates",
                "It becomes entangled",
                "Nothing changes"
            ],
            answer: 0
        },
        {
            question: "Measuring a qubit in superposition gives:",
            options: [
                "Always both 0 and 1",
                "Either 0 or 1",
                "Infinite values",
                "Decimal values"
            ],
            answer: 1
        },
        {
            question: "Measurement causes:",
            options: [
                "State collapse",
                "Faster internet",
                "Extra RAM",
                "More storage"
            ],
            answer: 0
        }
    ];

    constructor() {
        super("Quiz5");
    }

}