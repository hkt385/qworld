import BaseQuiz from "./BaseQuiz";

export default class Quiz12 extends BaseQuiz {

    protected title = "Lesson 12 Quiz - Bloch Sphere";

    protected nextScene = "Lesson12Complete";

    protected questions = [

        {
            question: "What does the Bloch Sphere represent?",
            options: [
                "The possible states of a qubit",
                "A quantum computer",
                "A logic gate",
                "An electrical circuit"
            ],
            answer: 0
        },

        {
            question: "Which state is shown at the top (North Pole) of the Bloch Sphere?",
            options: [
                "|0⟩",
                "|1⟩",
                "|+⟩",
                "|−⟩"
            ],
            answer:0
        },

        {
            question: "Which state is shown at the bottom (South Pole) of the Bloch Sphere?",
            options: [
                "|0⟩",
                "|+⟩",
                "|1⟩",
                "|−⟩"
            ],
            answer: 2
        },

        {
            question: "What do quantum gates do on the Bloch Sphere?",
            options: [
                "Delete qubits",
                "Rotate a qubit's state",
                "Measure every qubit",
                "Create new qubits"
            ],
            answer: 1
        },

        {
            question: "Why is the Bloch Sphere useful?",
            options: [
                "It helps visualize the state of a qubit",
                "It stores quantum information",
                "It replaces a quantum computer",
                "It increases computing speed"
            ],
            answer: 0
        }

    ];
    constructor() {
        super("Quiz12");
    }

}