import BaseQuiz from "./BaseQuiz";

export default class Quiz4 extends BaseQuiz {

    protected title = "Lesson 4 Quiz";

    protected nextScene = "Lesson4Complete";

    protected questions = [
        {
            question: "What is quantum entanglement?",
            options: [
                "Two qubits that become linked together",
                "Faster computer memory",
                "A programming language",
                "A type of binary number"
            ],
            answer: 0
        },
        {
            question: "If two qubits are entangled, measuring one can:",
            options: [
                "Delete the other qubit",
                "Affect the correlated state of the other qubit",
                "Double the computer's speed",
                "Create a new qubit"
            ],
            answer: 1
        },
        {
            question: "Why is entanglement important?",
            options: [
                "It allows unique quantum correlations used in quantum computing",
                "It increases internet speed",
                "It adds more RAM",
                "It improves battery life"
            ],
            answer: 0
        }
    ];

    constructor() {
        super("Quiz4");
    }

}