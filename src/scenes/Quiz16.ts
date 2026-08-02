import BaseQuiz from "./BaseQuiz";

export default class Quiz16 extends BaseQuiz {

    protected title = "Lesson 16 Quiz - The Future of Quantum Computing";

    protected nextScene = "Lesson16Complete";
protected questions = [

{
    question: "As a Quantum Security Firewall, which algorithm should you BLOCK?",
    options: [
        "ML-KEM",
        "AES-256",
        "RSA",
        "SHA-3"
    ],
    answer: 2
},

{
    question: "Which algorithm should be ALLOWED because it is quantum-safe?",
    options: [
        "ECC",
        "DES",
        "ML-DSA",
        "RSA"
    ],
    answer: 2
},

{
    question: "Why are RSA and ECC considered vulnerable?",
    options: [
        "They consume too much memory",
        "They can be broken by Shor's Algorithm on a powerful quantum computer",
        "They only work on old computers",
        "They are slower than AES"
    ],
    answer: 1
},

{
    question: "Which pair of algorithms remain strong against known quantum attacks?",
    options: [
        "RSA and ECC",
        "DES and 3DES",
        "AES-256 and SHA-3",
        "RSA and AES-128"
    ],
    answer: 2
},

{
    question: "Why are organizations migrating to Post-Quantum Cryptography today?",
    options: [
        "To prepare before powerful quantum computers become practical",
        "To replace classical computers",
        "To make the internet faster",
        "To reduce electricity usage"
    ],
    answer: 0
},

{
    question: "Which NIST-standardized algorithm is used for secure key establishment?",
    options: [
        "RSA",
        "ECC",
        "ML-KEM",
        "DES"
    ],
    answer: 2
},

{
    question: "Which NIST-standardized algorithm is used for digital signatures?",
    options: [
        "ML-DSA",
        "AES-256",
        "SHA-3",
        "ECC"
    ],
    answer: 0
},

{
    question: "What is the main responsibility of a Quantum Security Firewall?",
    options: [
        "Allow vulnerable algorithms",
        "Block quantum-safe algorithms",
        "Allow safe algorithms and block vulnerable ones",
        "Encrypt every file"
    ],
    answer: 2
},

{
    question: "Which statement best summarizes the future of cybersecurity?",
    options: [
        "Every computer will become quantum",
        "Only quantum computers will be secure",
        "Organizations must replace vulnerable cryptography with quantum-resistant algorithms",
        "Passwords will no longer exist"
    ],
    answer: 2
},

{
    question: "After completing Semester 3, what is the most important lesson?",
    options: [
        "Quantum computers replace classical computers",
        "Preparing early with quantum-resistant cryptography protects future data",
        "RSA is still the safest algorithm",
        "Only governments need cybersecurity"
    ],
    answer: 1
}

];
    constructor() {
        super("Quiz16");
    }

}