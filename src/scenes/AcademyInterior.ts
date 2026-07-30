import Phaser from "phaser";
import QuestUI from "../ui/QuestUI";
import UIScene from "./UIScene";
import QBot from "../objects/QBot";
import Journal from "../journal/Journal";

export default class AcademyInterior extends Phaser.Scene {
    private selectedSemester = "1";

    private player!: Phaser.Physics.Arcade.Sprite;
    private professor!: Phaser.Physics.Arcade.Sprite;
    private qbot!: QBot;
    

    private questUI!: QuestUI;
    private journal!: Journal;
    private talkPrompt!: Phaser.GameObjects.Text;

    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    private keys!: {
        W: Phaser.Input.Keyboard.Key;
        A: Phaser.Input.Keyboard.Key;
        S: Phaser.Input.Keyboard.Key;
        D: Phaser.Input.Keyboard.Key;
    };

    private interactKey!: Phaser.Input.Keyboard.Key;
    private journalKey!: Phaser.Input.Keyboard.Key;

    constructor() {
        super("AcademyInterior");
    }

    preload() {

        this.load.spritesheet("player", "assets/sprites/boy.png", {
            frameWidth: 16,
            frameHeight: 16,
        });

        this.load.image("qbot", "assets/sprites/qbot.png");
        this.load.image("professor", "assets/sprites/professor.png");

        this.load.image(
            "academy_interior_tiles",
            "assets/tiles/academy_interior_tiles.png"
        );

        this.load.tilemapTiledJSON(
            "academy_interior",
            "assets/maps/academy_interior.tmj"
        );
    }

    create() {
        localStorage.setItem("currentScene", "AcademyInterior");
        this.selectedSemester =
    localStorage.getItem("selectedSemester") ?? "1";
    
        

        if (!this.scene.isActive("UIScene")) {
            this.scene.launch("UIScene");
        }

        this.scene.bringToTop("UIScene");

        this.interactKey = this.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.T
        );

        this.journalKey = this.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.J
        );

        this.cursors = this.input.keyboard!.createCursorKeys();

        this.keys = this.input.keyboard!.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D,
        }) as any;

        const map = this.make.tilemap({
            key: "academy_interior",
        });

        const tileset = map.addTilesetImage(
            "academy_interior_tiles",
            "academy_interior_tiles"
        );

        if (!tileset) return;

        map.createLayer("Ground", tileset);
        map.createLayer("Walls", tileset);
        map.createLayer("NPCs", tileset);

        const collisionLayer = map.createLayer(
            "Collision",
            tileset
        );

        if (collisionLayer) {
            collisionLayer.setCollisionByExclusion([-1]);
            collisionLayer.visible = false;
        }

        this.player = this.physics.add.sprite(
            map.widthInPixels / 2,
            map.heightInPixels - 48,
            "player",
            0
        );

        this.player.setScale(2);
        this.player.setDepth(100);
        this.player.setCollideWorldBounds(true);

        this.professor = this.physics.add.staticSprite(
            180,
            120,
            "professor"
        );

        this.professor.setScale(0.06);
        this.professor.setDepth(100);

        this.qbot = new QBot(
            this,
            this.player.x - 20,
            this.player.y - 20
        );

        this.physics.add.collider(this.player, this.professor);

        if (collisionLayer) {
            this.physics.add.collider(
                this.player,
                collisionLayer
            );
        }

        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.cameras.main.setZoom(2);
        this.cameras.main.startFollow(this.player);

        this.questUI = new QuestUI(this);
        this.questUI.setQuest("Talk to Professor Qubit");

        this.journal = new Journal(this);

        this.talkPrompt = this.add.text(
            0,
            0,
            "Press T to Talk",
            {
                fontSize: "14px",
                color: "#ffffff",
                backgroundColor: "#000000",
                padding: { x: 6, y: 3 }
            }
        );

        this.talkPrompt
            .setOrigin(0.5)
            .setDepth(500)
            .setVisible(false);
    }
    private waitForContinue(nextScene: string) {

    const startScene = () => {

        this.input.keyboard?.off("keydown-SPACE", startScene);
        this.input.keyboard?.off("keydown-ENTER", startScene);
        this.input.off("pointerdown", startScene);

        this.scene.start(nextScene);

    };

    this.input.keyboard!.once("keydown-SPACE", startScene);
    this.input.keyboard!.once("keydown-ENTER", startScene);
    this.input.once("pointerdown", startScene);

}
        update() {

        const ui = this.scene.get("UIScene") as UIScene;

        // Stop movement while dialogue is open
        if (ui.isDialogueVisible()) {
            this.player.setVelocity(0, 0);
            return;
        }

        // Open / Close Journal
        if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {

    this.questUI.completeQuest("Talk to Professor Qubit");

    if (this.selectedSemester === "1") {

    ui.showDialogue([
        "Welcome to QWorld Academy!",
        "Professor Qubit: Your first lesson is about Binary and Bits.",
        
    ]);

    this.waitForContinue("Classroom1");

} else if (this.selectedSemester === "2") {

    ui.showDialogue([
        "Welcome back!",
        "Professor Qubit: Let's begin Semester 2.",
        "Press SPACE, ENTER or CLICK to start."
    ]);

    this.waitForContinue("Classroom7");

} else if (this.selectedSemester === "3") {

    ui.showDialogue([
        "Welcome back!",
        "Professor Qubit: This is your final semester.",
        "Press SPACE, ENTER or CLICK to begin Semester 3."
    ]);

    this.waitForContinue("Classroom13");

}

    return;
}

        const speed = 180;

        let vx = 0;
        let vy = 0;

        if (this.keys.A.isDown || this.cursors.left.isDown) {
            vx = -speed;
        } else if (this.keys.D.isDown || this.cursors.right.isDown) {
            vx = speed;
        }

        if (this.keys.W.isDown || this.cursors.up.isDown) {
            vy = -speed;
        } else if (this.keys.S.isDown || this.cursors.down.isDown) {
            vy = speed;
        }

        this.player.setVelocity(vx, vy);

        const body = this.player.body as Phaser.Physics.Arcade.Body;

        if (body.velocity.length() > 0) {
            body.velocity.normalize().scale(speed);
        }

        // Professor interaction
        const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            this.professor.x,
            this.professor.y
        );

        if (distance < 150) {

            this.talkPrompt.setVisible(true);

            this.talkPrompt.setPosition(
                this.professor.x,
                this.professor.y - 35
            );

            if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {

    this.questUI.completeQuest("Talk to Professor Qubit");

    if (this.selectedSemester === "1") {

    ui.showDialogue([
        "Welcome to QWorld Academy!",
        "Professor Qubit: Your first lesson is about Binary and Bits.",
        "Press SPACE, ENTER or CLICK to begin Semester 1."
    ]);

    this.waitForContinue("Classroom1");

} else if (this.selectedSemester === "2") {

    ui.showDialogue([
        "Welcome back!",
        "Professor Qubit: Let's begin Semester 2.",
        "Press SPACE to begin Semester 3."
    ]);

    this.waitForContinue("Classroom7");

} else if (this.selectedSemester === "3") {

    ui.showDialogue([
        "Welcome back!",
        "Professor Qubit: This is your final semester.",
        "Press SPACE to begin Semester 3."
    ]);

   this.waitForContinue("Classroom13");

}

    return;
}

        } else {

            this.talkPrompt.setVisible(false);

        }

        this.qbot.follow(this.player);

    }

}