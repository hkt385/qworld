import BaseQuiz from "./BaseQuiz";

export default class Quiz10 extends BaseQuiz {

    protected title = "Lesson 10 Quiz - Quantum Error Correction";

    protected nextScene = "Lesson10Complete";

    protected questions = [

        {
            question: "Why do quantum computers need error correction?",
            options: [
                "Qubits are too expensive",
                "Qubits are fragile and can be affected by noise",
                "Classical computers require it",
                "To make computers faster"
            ],
            answer: 1
        },

        {
            question: "What is quantum noise?",
            options: [
                "The sound made by a quantum computer",
                "Unwanted disturbances that change a qubit's state",
                "A programming language",
                "A type of quantum gate"
            ],
            answer: 1
        },

        {
            question: "Why can't we simply copy a qubit as a backup?",
            options: [
                "It takes too much memory",
                "Quantum computers don't have storage",
                "Because of the No-Cloning Theorem",
                "It uses too much electricity"
            ],
            answer: 2
        },

        {
            question: "Quantum Error Correction protects information by...",
            options: [
                "Turning qubits into classical bits",
                "Using several entangled qubits to protect the information",
                "Making perfect copies of qubits",
                "Removing all quantum gates"
            ],
            answer: 1
        },

        {
            question: "Without Quantum Error Correction, quantum computers would...",
            options: [
                "Become smartphones",
                "Always run faster",
                "Be unreliable for complex computations",
                "Never need measurements"
            ],
            answer: 2
        }

    ];
    constructor() {
        super("Quiz10");
    }

}