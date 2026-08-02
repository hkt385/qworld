import BaseQuiz from "./BaseQuiz";

export default class Quiz13 extends BaseQuiz {

    protected title = "Lesson 13 Quiz - Quantum Cryptography";

    protected nextScene = "Lesson13Complete";

    protected questions = [

{
    question: "Which two public-key cryptographic systems are widely used on today's internet?",
    options: [
        "RSA and ECC",
        "AES and SHA-3",
        "DES and 3DES",
        "ML-KEM and ML-DSA"
    ],
    answer: 0
},

{
    question: "RSA is considered secure because it is difficult to...",
    options: [
        "Multiply two prime numbers",
        "Factor a very large number into its original prime numbers",
        "Generate random passwords",
        "Compress encrypted files"
    ],
    answer: 1
},

{
    question: "ECC is based on which mathematical problem?",
    options: [
        "Prime Factorization",
        "Shortest Vector Problem",
        "Elliptic Curve Discrete Logarithm Problem",
        "Learning With Errors"
    ],
    answer: 2
},

{
    question: "Which quantum algorithm could eventually break RSA and ECC?",
    options: [
        "Grover's Algorithm",
        "Shor's Algorithm",
        "Deutsch's Algorithm",
        "Bernstein-Vazirani Algorithm"
    ],
    answer: 1
},

{
    question: "What does 'Harvest Now, Decrypt Later' mean?",
    options: [
        "Delete encrypted files after downloading",
        "Steal encrypted data today and decrypt it in the future using powerful quantum computers",
        "Store passwords for later use",
        "Back up encrypted files every day"
    ],
    answer: 1
},

{
    question: "Why are researchers preparing new cryptographic algorithms today?",
    options: [
        "Because quantum computers already broke all encryption",
        "Because classical computers no longer work",
        "To protect information before large quantum computers become available",
        "To replace the internet"
    ],
    answer: 2
},

{
    question: "What is the worldwide transition to new quantum-resistant cryptography called?",
    options: [
        "Quantum Networking",
        "Post-Quantum Cryptography",
        "Quantum Teleportation",
        "Quantum Hardware Migration"
    ],
    answer: 1
},

{
    question: "According to the lesson, what protects RSA today?",
    options: [
        "Keeping the algorithm secret",
        "The difficulty of solving certain mathematical problems",
        "Fast internet connections",
        "Quantum computers"
    ],
    answer: 1
},

{
    question: "Why have RSA and ECC been trusted for decades?",
    options: [
        "Classical computers take an enormous amount of time to solve their underlying mathematical problems",
        "They use quantum physics",
        "They cannot be attacked",
        "They require special hardware"
    ],
    answer: 0
},



];
    constructor() {
        super("Quiz13");
    }

}