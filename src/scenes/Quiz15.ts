import BaseQuiz from "./BaseQuiz";

export default class Quiz15 extends BaseQuiz {

    protected title = "Lesson 15 Quiz - Quantum Applications";

    protected nextScene = "Lesson15Complete";

    protected questions = [

        {
            question: "Which field can use quantum computing to speed up drug discovery?",
            options: [
                "Healthcare",
                "Construction",
                "Sports",
                "Gaming"
            ],
            answer: 0
        },

        {
            question: "Quantum Machine Learning combines quantum computing with...",
            options: [
                "Agriculture",
                "Artificial Intelligence",
                "Architecture",
                "Astronomy"
            ],
            answer: 1
        },

        {
            question: "Which industry can benefit from quantum optimization?",
            options: [
                "Finance",
                "Fashion",
                "Photography",
                "Music"
            ],
            answer: 0
        },

        {
            question: "Which of these is a potential application of quantum computing?",
            options: [
                "Traffic Routing",
                "Supply Chain Optimization",
                "Scientific Simulation",
                "All of the above"
            ],
            answer: 3
        },

        {
            question: "Why are companies investing in quantum computing?",
            options: [
                "To solve complex problems faster",
                "To replace the internet",
                "To build larger keyboards",
                "To increase screen brightness"
            ],
            answer: 0
        }

    ];
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