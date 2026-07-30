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

    constructor() {
        super("Quiz15");
    }

}