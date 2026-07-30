import Phaser from "phaser";

export default class SemesterSelectScene extends Phaser.Scene {

  constructor() {
    super("SemesterSelectScene");
  }

  create() {
    

    console.log("Semester Select Loaded");

    this.cameras.main.setBackgroundColor("#1b0935");
    const semester3Unlocked =
    localStorage.getItem("semester3Unlocked") === "true";
    const semester2Unlocked =
    localStorage.getItem("semester2Unlocked") === "true";


    this.cameras.main.setBackgroundColor("#1b0935");

    this.add.text(640, 180, "Semester Select", {
      fontSize: "56px",
      color: "#ffffff",
      fontStyle: "bold",
    }).setOrigin(0.5);

    const menuItems = [
      "Semester 1",
      semester2Unlocked ? "Semester 2" : "Semester 2 🔒",
      semester3Unlocked ? "Semester 3" : "Semester 3 🔒",
      "Back"
    ];

    let selected = 0;
    const texts: Phaser.GameObjects.Text[] = [];

    const refreshMenu = () => {
      texts.forEach((text, index) => {
        text.setText(
          `${index === selected ? "▶ " : "   "}${menuItems[index]}`
        );

        text.setColor(index === selected ? "#FFD166" : "#FFFFFF");
      });
    };

    const activateMenu = (index: number) => {

      switch (index) {

        case 0:

          localStorage.setItem("selectedSemester", "1");
          this.scene.start("AcademyExterior");
          break;

        case 1:

          if (!semester2Unlocked) {
            return;
          }

          localStorage.setItem("selectedSemester", "2");
          this.scene.start("AcademyExterior");
          break;

        case 2:

          if (!semester3Unlocked) {
          return;
          }

          localStorage.setItem("selectedSemester", "3");
          this.scene.start("AcademyExterior");
          break;
        case 3:

          this.scene.start("MainMenuScene");
          break;

      }

    };

    menuItems.forEach((item, index) => {

      const text = this.add.text(
        640,
        320 + index * 70,
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
      selected = (selected - 1 + menuItems.length) % menuItems.length;
      refreshMenu();
    });

    this.input.keyboard?.on("keydown-DOWN", () => {
      selected = (selected + 1) % menuItems.length;
      refreshMenu();
    });

    this.input.keyboard?.on("keydown-E", () => {
      activateMenu(selected);
    });

  }

}