import BaseQuiz from "./BaseQuiz";

export default class Quiz11 extends BaseQuiz {

    protected title = "Lesson 11 Quiz - Quantum Cryptography";

    protected nextScene = "Lesson11Complete";

    protected questions = [

        {
            question:"What is the main purpose of Quantum Cryptography?",
            options:[
                "Protect secret information",
                "Build quantum computers",
                "Increase internet speed",
                "Generate electricity"
            ],
            answer:0
        },

        {
            question:"What does QKD stand for?",
            options:[
                "Quantum Key Distribution",
                "Quantum Kernel Design",
                "Quick Key Detection",
                "Quantum Knowledge Database"
            ],
            answer:0
        },

        {
            question:"Why can an eavesdropper be detected?",
            options:[
                "They use the wrong password",
                "Measuring a qubit changes its state",
                "Their computer crashes",
                "The internet disconnects"
            ],
            answer:1
        },

        {
            question: "In the BB84 protocol, what happens if Eve measures the qubits?",
            options:[
    "Nothing changes",
    "The qubits are disturbed, revealing her presence",
    "The qubits disappear",
    "Alice receives duplicate qubits"
],
            answer:1
        },

        {
            question:"Quantum Cryptography is based on...",
            options:[
                "Quantum mechanics",
                "Bigger computers",
                "Cloud storage",
                "Wi-Fi signals"
            ],
            answer:0
        }

    ];
    constructor() {
        super("Quiz11");
    }

}