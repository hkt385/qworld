import BaseQuiz from "./BaseQuiz";

export default class Quiz16 extends BaseQuiz {

    protected title = "Lesson 16 Quiz - The Future of Quantum Computing";

    protected nextScene = "Lesson16Complete";

    protected questions = [

        {
            question: "What is one major challenge facing quantum computers today?",
            options: [
                "Decoherence",
                "Lack of keyboards",
                "Slow internet",
                "Small monitors"
            ],
            answer: 0
        },

        {
            question: "Which area could benefit from future quantum computers?",
            options: [
                "Climate Modeling",
                "Drug Discovery",
                "Artificial Intelligence",
                "All of the above"
            ],
            answer: 3
        },

        {
            question: "Why are researchers developing better quantum hardware?",
            options: [
                "To reduce errors and improve stability",
                "To make computers heavier",
                "To increase electricity usage",
                "To replace classical computers immediately"
            ],
            answer: 0
        },

        {
            question: "Which of these is a career in quantum computing?",
            options: [
                "Quantum Software Developer",
                "Quantum Hardware Engineer",
                "Quantum Research Scientist",
                "All of the above"
            ],
            answer: 3
        },

        {
            question: "What is the future goal of quantum computing?",
            options: [
                "Solve complex problems beyond the reach of classical computers",
                "Replace every smartphone",
                "Eliminate the internet",
                "Make video games easier"
            ],
            answer: 0
        }

    ];

    constructor() {
        super("Quiz16");
    }

}