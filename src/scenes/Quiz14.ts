import BaseQuiz from "./BaseQuiz";

export default class Quiz14 extends BaseQuiz {

    protected title = "Lesson 14 Quiz - PostQuantumMigration";

    protected nextScene = "Lesson14Complete";

    protected questions = [

    {
        question: "What is the main goal of Post-Quantum Cryptography (PQC)?",
        options: [
            "To protect today's systems from future quantum attacks",
            "To build quantum computers",
            "To replace the internet",
            "To speed up computers"
        ],
        answer: 0
    },

    {
        question: "What is the key difference between Quantum Cryptography and Post-Quantum Cryptography?",
        options: [
            "They are the same technology",
            "Quantum Cryptography uses quantum physics, while PQC runs on classical computers",
            "PQC requires quantum computers",
            "Quantum Cryptography uses RSA"
        ],
        answer: 1
    },

    {
        question: "Why are organizations adopting Post-Quantum Cryptography now?",
        options: [
            "Quantum computers already broke all encryption",
            "To prepare before large quantum computers become practical",
            "To replace classical computers",
            "To make passwords unnecessary"
        ],
        answer: 1
    },

    {
        question: "Which organization selected ML-KEM and ML-DSA as new cryptography standards?",
        options: [
            "NASA",
            "Google",
            "NIST",
            "Microsoft"
        ],
        answer: 2
    },

    {
        question: "Which algorithm is used for secure key establishment?",
        options: [
            "RSA",
            "ML-KEM",
            "ECC",
            "SHA-3"
        ],
        answer: 1
    },

    {
        question: "Which algorithm is used for digital signatures?",
        options: [
            "AES-256",
            "ML-DSA",
            "RSA",
            "DES"
        ],
        answer: 1
    },

    {
        question: "Which devices can run Post-Quantum Cryptography?",
        options: [
            "Only quantum computers",
            "Only supercomputers",
            "Today's laptops, phones, servers, and computers",
            "Only cloud servers"
        ],
        answer: 2
    },

    {
        question: "According to the lesson, replacing RSA and ECC is like...",
        options: [
            "Buying a faster computer",
            "Upgrading your digital locks before better lockpicks exist",
            "Installing antivirus software",
            "Creating stronger passwords"
        ],
        answer: 1
    },

    {
        question: "Why were new Post-Quantum algorithms tested by NIST?",
        options: [
            "To check their security, efficiency, and practicality",
            "To make computers faster",
            "To replace operating systems",
            "To improve internet speed"
        ],
        answer: 0
    },

    {
        question: "Which statement best describes Post-Quantum Cryptography?",
        options: [
            "It uses quantum physics to encrypt messages",
            "It protects classical computers using new mathematical algorithms",
            "It only works on quantum computers",
            "It replaces AES-256"
        ],
        answer: 1
    }

];

    constructor() {
        super("Quiz14");
    }

}