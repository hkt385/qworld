import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

export default class MainMenuScene extends Phaser.Scene {
  private stars: Phaser.GameObjects.Arc[] = [];
  private menuMusic!: Phaser.Sound.BaseSound;

  constructor() {
    super("MainMenuScene");
  }

  create() {
    

AudioManager.play(this, "menuMusic", 0.35);
    // Background
    this.cameras.main.setBackgroundColor("#1b0935");

    // Moon
    this.add.circle(1080, 120, 45, 0xf8f4ff);

    // Stars
    for (let i = 0; i < 80; i++) {
      const star = this.add.circle(
        Phaser.Math.Between(0, 1280),
        Phaser.Math.Between(0, 300),
        Phaser.Math.Between(1, 3),
        0xffffff
      );

      this.stars.push(star);
    }

    // Logo
    this.add
      .text(640, 200, "QWorld", {
        fontSize: "72px",
        color: "#ffffff",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    // Controls
    this.add
      .text(
    640,
    285,
    "↑ ↓ Navigate    Enter / E Select",
    {
        fontSize: "24px",
        color: "#d6b7ff",
    }
)
      .setOrigin(0.5);

    const menuItems = [
  "New Game",
  "Continue",
  "Semester Select",
  "Settings"
];

    let selected = 0;

    const texts: Phaser.GameObjects.Text[] = [];

    const refreshMenu = () => {
      texts.forEach((text, index) => {
        text.setText(
          `${index === selected ? "▶ " : "   "}${menuItems[index]}`
        );

        text.setColor(
          index === selected ? "#FFD166" : "#FFFFFF"
        );
      });
    };

    const activateMenu = (index: number) => {
      switch (index) {

case 0:

    localStorage.setItem("selectedSemester", "1");

    this.cameras.main.fadeOut(800, 0, 0, 0);

    this.time.delayedCall(850, () => {
        AudioManager.stop(this, "menuMusic");
        this.scene.start("AcademyExterior");
    });

    break;

case 1: {

    const savedScene = localStorage.getItem("currentScene");

    if (savedScene) {

        this.cameras.main.fadeOut(800, 0, 0, 0);

        this.time.delayedCall(850, () => {
            AudioManager.stop(this, "menuMusic");
            this.scene.start(savedScene);
        });

    } else {

        localStorage.setItem("selectedSemester", "1");

        this.cameras.main.fadeOut(800,0,0,0);

        this.time.delayedCall(850, () => {
            AudioManager.stop(this, "menuMusic");
            this.scene.start("AcademyExterior");
        });

    }

    break;
}

case 2:

    AudioManager.stop(this, "menuMusic");
    this.scene.start("SemesterSelectScene");
    break;

case 3:

    this.scene.start("SettingsScene");
    break;

}
    };

    menuItems.forEach((item, index) => {

      const text = this.add
        .text(
          640,
          410 + index * 70,
          item,
          {
            fontSize: "36px",
            color: "#ffffff",
          }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

      text.on("pointerover", () => {
        selected = index;
        refreshMenu();
      });

      text.on("pointerdown", () => {
        activateMenu(index);
      });

      texts.push(text);

    });
  

    refreshMenu();

    this.input.keyboard?.on("keydown-UP", () => {

      selected =
        (selected - 1 + menuItems.length) %
        menuItems.length;

      refreshMenu();

    });

    this.input.keyboard?.on("keydown-DOWN", () => {

      selected =
        (selected + 1) %
        menuItems.length;

      refreshMenu();

    });

    this.input.keyboard?.on("keydown-E", () => {

      activateMenu(selected);

    });

    // Optional: Enter key also works
    this.input.keyboard?.on("keydown-ENTER", () => {

      activateMenu(selected);

    });
  }

  update() {
    this.stars.forEach((star) => {
      star.alpha = 0.4 + Math.random() * 0.6;
    });
  }
}