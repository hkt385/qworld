import BaseQuiz from "./BaseQuiz";

export default class Quiz6 extends BaseQuiz {

    protected title = "Lesson 6 Quiz";

    protected nextScene = "Semester1Exam";

    protected questions = [
        {
            question: "What does the X Gate do?",
            options: [
                "Flips 0 to 1 and 1 to 0",
                "Measures a qubit",
                "Creates entanglement",
                "Deletes a qubit"
            ],
            answer: 0
        },
        {
            question: "Quantum gates are used to:",
            options: [
                "Manipulate qubits",
                "Increase RAM",
                "Store files",
                "Connect computers"
            ],
            answer: 0
        },
        {
            question: "Applying an X Gate to |0⟩ results in:",
            options: [
                "|0⟩",
                "|1⟩",
                "Superposition",
                "Entanglement"
            ],
            answer: 1
        }
    ];

    constructor() {
        super("Quiz6");
    }

}