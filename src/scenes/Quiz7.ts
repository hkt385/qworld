import BaseQuiz from "./BaseQuiz";

export default class Quiz7 extends BaseQuiz {

    protected title = "Lesson 7 Quiz";

    protected nextScene = "Lesson7Complete";

    protected questions = [

        {
            question: "What is the primary purpose of the Hadamard Gate?",
            options: [
                "Flip a qubit",
                "Create Superposition",
                "Measure a qubit",
                "Delete a qubit"
            ],
            answer: 1
        },

        {
            question: "Applying H to |0⟩ produces:",
            options: [
                "|1⟩",
                "|0⟩",
                "|+⟩",
                "|−⟩"
            ],
            answer: 2
        },

        {
            question: "The Hadamard Gate is commonly used in:",
            options: [
                "Quantum Algorithms",
                "Deleting Data",
                "Increasing Memory",
                "Computer Graphics"
            ],
            answer: 0
        }

    ];

    constructor() {
        super("Quiz7");
    }

}