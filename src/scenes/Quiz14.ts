import BaseQuiz from "./BaseQuiz";

export default class Quiz14 extends BaseQuiz {

    protected title = "Lesson 14 Quiz - PostQuantumMigration";

    protected nextScene = "Lesson14Complete";

    protected questions = [

    {
        question: "What is the primary goal of Post-Quantum Cryptography (PQC)?",
        options: [
            "To build quantum computers",
            "To create algorithms resistant to quantum attacks",
            "To make the internet faster",
            "To replace classical computers"
        ],
        answer: 1
    },

    {
        question: "What is the main difference between Quantum Cryptography and Post-Quantum Cryptography?",
        options: [
            "They are exactly the same",
            "Quantum Cryptography uses quantum physics, while PQC uses classical computers with new mathematics",
            "PQC requires quantum computers",
            "Quantum Cryptography replaces RSA"
        ],
        answer: 1
    },

    {
        question: "Which organization standardized many Post-Quantum Cryptography algorithms?",
        options: [
            "NASA",
            "Google",
            "NIST",
            "IEEE"
        ],
        answer: 2
    },

    {
        question: "Which algorithm is primarily used for secure key establishment in PQC?",
        options: [
            "RSA",
            "ECC",
            "ML-KEM",
            "SHA-256"
        ],
        answer: 2
    },

    {
        question: "Which algorithm is primarily used for digital signatures in PQC?",
        options: [
            "AES-256",
            "ML-DSA",
            "RSA",
            "SHA-3"
        ],
        answer: 1
    },

    {
        question: "Why are organizations migrating to PQC today?",
        options: [
            "Quantum computers already break every encryption system",
            "To prepare before large-scale quantum computers become practical",
            "To replace the internet",
            "To make passwords unnecessary"
        ],
        answer: 1
    },

    {
        question: "Which of the following can run Post-Quantum Cryptography?",
        options: [
            "Only quantum computers",
            "Only supercomputers",
            "Today's classical computers",
            "Only IBM quantum processors"
        ],
        answer: 2
    },

    {
        question: "Which statement about ML-KEM is correct?",
        options: [
            "It is used for secure key establishment",
            "It is a hashing algorithm",
            "It is used to build quantum computers",
            "It replaces AES"
        ],
        answer: 0
    },

    {
        question: "Which statement best describes Post-Quantum Cryptography?",
        options: [
            "It uses photons to encrypt messages",
            "It protects classical systems against future quantum attacks",
            "It requires qubits to work",
            "It replaces the internet"
        ],
        answer: 1
    },

    {
        question: "Why is preparing early for quantum threats important?",
        options: [
            "Because waiting until quantum computers arrive may leave sensitive data exposed",
            "Because classical computers will stop working",
            "Because quantum computers already replace phones",
            "Because passwords will disappear"
        ],
        answer: 0
    }

];

    constructor() {
        super("Quiz14");
    }

}