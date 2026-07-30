import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.audio("menuMusic", "assets/audio/menu.mp3");
        this.load.audio("exteriorMusic", "assets/audio/exterior.mp3");
        this.load.audio("classroomMusic", "assets/audio/classroom.mp3");
        this.load.audio("puzzleMusic", "assets/audio/puzzle.mp3");
        this.load.audio("graduationMusic", "assets/audio/graduation.mp3");

        this.load.image("spark", "assets/particles/spark.png");

    }

    create() {

        this.scene.start("MainMenuScene");

    }

}