import Phaser from "phaser";

export default class AcademyScene extends Phaser.Scene {
  constructor() {
    super("AcademyScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#3b1b6d");

    this.add
      .text(640, 360, "🏛 Welcome to QWorld Academy", {
        fontSize: "42px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
  }
}