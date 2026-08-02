import BaseQuiz from "./BaseQuiz";

export default class Quiz15 extends BaseQuiz {

    protected title = "Lesson 15 Quiz - Quantum Applications";

    protected nextScene = "Lesson15Complete";

    protected questions = [

    {
        question: "What mathematical structure is used in many post-quantum cryptography algorithms?",
        options: [
            "Prime Numbers",
            "Lattices",
            "Matrices",
            "Polynomials"
        ],
        answer: 1
    },

    {
        question: "What does SVP stand for?",
        options: [
            "Secure Vector Protocol",
            "Shortest Vector Problem",
            "Safe Verification Process",
            "Simple Vector Path"
        ],
        answer: 1
    },

    {
        question: "Why are lattice problems considered difficult?",
        options: [
            "They use very large prime numbers",
            "They require internet access",
            "They become extremely hard in hundreds or thousands of dimensions",
            "They only work on quantum computers"
        ],
        answer: 2
    },

    {
        question: "What does LWE stand for?",
        options: [
            "Learning With Errors",
            "Logic With Encryption",
            "Linear Wave Equation",
            "Layered Wireless Encryption"
        ],
        answer: 0
    },

    {
        question: "Which post-quantum algorithm mentioned in the lesson is built on lattice problems?",
        options: [
            "RSA",
            "ECC",
            "ML-KEM",
            "DES"
        ],
        answer: 2
    }

];

    constructor() {
        super("Quiz15");
    }

}