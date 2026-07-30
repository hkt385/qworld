import BaseQuiz from "./BaseQuiz";

export default class Quiz8 extends BaseQuiz {

    protected title = "Lesson 8 Quiz";

    protected nextScene = "Lesson8Complete";

    protected questions = [
        {
            question: "What is a Quantum Circuit?",
            options: [
                "A sequence of quantum gates",
                "A CPU",
                "A Battery",
                "A Network Cable"
            ],
            answer: 0
        },
        {
            question: "Which gate creates Superposition?",
            options: [
                "X Gate",
                "Z Gate",
                "Hadamard Gate",
                "NOT Gate"
            ],
            answer: 2
        },
        {
            question: "Applying H to |0⟩ gives",
            options: [
                "|1⟩",
                "|+⟩",
                "|−⟩",
                "|0⟩"
            ],
            answer: 1
        }
    ];

    constructor() {
        super("Quiz8");
    }

}