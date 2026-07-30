import BaseQuiz from "./BaseQuiz";

export default class Quiz13 extends BaseQuiz {

    protected title = "Lesson 13 Quiz - Quantum Cryptography";

    protected nextScene = "Lesson13Complete";

    protected questions= [

{
    question: "What is the main goal of Post-Quantum Cryptography?",
    options: [
        "Use quantum computers for encryption",
        "Create cryptographic algorithms resistant to quantum attacks",
        "Replace the internet",
        "Increase internet speed"
    ],
    answer: 1
},

{
    question: "Which widely used algorithm is threatened by Shor's Algorithm?",
    options: [
        "RSA",
        "AES-256",
        "SHA-256",
        "ChaCha20"
    ],
    answer: 0
},

{
    question: "RSA is primarily based on the difficulty of:",
    options: [
        "Sorting numbers",
        "Prime factorization",
        "Searching databases",
        "Hashing passwords"
    ],
    answer: 1
},

{
    question: "ECC stands for:",
    options: [
        "Efficient Computer Code",
        "Elliptic Curve Cryptography",
        "Encrypted Cloud Computing",
        "Electronic Cipher Code"
    ],
    answer: 1
},

{
    question: "Which quantum algorithm threatens RSA and ECC?",
    options: [
        "Grover's Algorithm",
        "Deutsch's Algorithm",
        "Shor's Algorithm",
        "Simon's Algorithm"
    ],
    answer: 2
},

{
    question: "What does 'Harvest Now, Decrypt Later' mean?",
    options: [
        "Delete encrypted files",
        "Store encrypted data today and decrypt it when quantum computers become available",
        "Backup data every day",
        "Compress encrypted files"
    ],
    answer: 1
},

{
    question: "Which of the following is considered quantum-resistant today?",
    options: [
        "RSA",
        "ECC",
        "ML-KEM",
        "DSA"
    ],
    answer: 2
},

{
    question: "What does ML-KEM primarily provide?",
    options: [
        "Password storage",
        "Key establishment",
        "Data compression",
        "Database indexing"
    ],
    answer: 1
},

{
    question: "Why is the world transitioning to Post-Quantum Cryptography now?",
    options: [
        "Quantum computers are already breaking everything",
        "To prepare before large-scale quantum computers become practical",
        "To replace classical computers",
        "To eliminate passwords"
    ],
    answer: 1
},

{
    question: "Which statement best describes Post-Quantum Cryptography?",
    options: [
        "It requires a quantum computer to work",
        "It uses photons for encryption",
        "It runs on classical computers but resists quantum attacks",
        "It replaces the internet"
    ],
    answer: 2
}

];
    constructor() {
        super("Quiz13");
    }

}