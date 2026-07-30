import BaseQuiz from "./BaseQuiz";

export default class Quiz9 extends BaseQuiz {

    protected title = "Lesson 9 Quiz - Quantum Teleportation";

    protected nextScene = "Lesson9Complete";

    protected questions = [

        {
            question: "What is transferred during Quantum Teleportation?",
            options: [
                "A physical object",
                "The quantum state of a qubit",
                "Electricity",
                "A computer program"
            ],
            answer: 1
        },

        {
            question: "Quantum Teleportation requires ________ between two qubits.",
            options: [
                "A USB cable",
                "Entanglement",
                "Wi-Fi",
                "A battery"
            ],
            answer: 1
        },

        {
            question: "Why is a classical message needed?",
            options: [
                "To charge the qubits",
                "To duplicate the qubit",
                "To tell the receiver which correction to apply",
                "To create more qubits"
            ],
            answer: 2
        },

        {
            question: "According to the No-Cloning Theorem, an unknown quantum state...",
            options: [
                "Can be copied perfectly",
                "Can be cloned many times",
                "Cannot be copied perfectly",
                "Can only be copied once"
            ],
            answer: 2
        },

        {
            question: "Which statement about Quantum Teleportation is TRUE?",
            options: [
                "People are teleported instantly",
                "Objects move faster than light",
                "The quantum state is transferred, not the object itself",
                "No classical communication is required"
            ],
            answer: 2
        }

    ];
    constructor() {
        super("Quiz9");
    }

}