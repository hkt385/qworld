import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
import MobileDPad from "../ui/MobileDPad";

export default class AcademyExterior extends Phaser.Scene {
  
private enterPrompt!: Phaser.GameObjects.Text;
  private player!: Phaser.Physics.Arcade.Sprite;
  private interactKey!: Phaser.Input.Keyboard.Key;
  private dpad!: MobileDPad;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  private keys!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  constructor() {
    super("AcademyExterior");
  }

  preload() {
    // Player
    
this.load.spritesheet(
    "player",
    "assets/sprites/boy.png",
    {
        frameWidth: 16,
        frameHeight: 16,
    }
);



    

    // Tiles
    this.load.image(
      "academy_tiles",
      "assets/tiles/academy_tiles_v1.png"
    );

    // Map
    this.load.tilemapTiledJSON(
      "academy_map",
      "assets/maps/academy_exterior.tmj"
    );
  }

  create() {
    // E key
    this.dpad = new MobileDPad(this);
    AudioManager.play(this, "exteriorMusic", 0.30);
    

    localStorage.setItem("currentScene", "AcademyExterior");

    
    this.interactKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.E
    );
    

    // Map
    const map = this.make.tilemap({
      key: "academy_map",
    });

    console.log("Map Layers:", map.layers.map(l => l.name));

    const tileset = map.addTilesetImage(
      "academy_tiles",
      "academy_tiles"
    );

    if (!tileset) {
      console.error("Tileset not found!");
      return;
    }

    // Layers
    map.createLayer("Ground", tileset);
    map.createLayer("Path", tileset);
    map.createLayer("Buildings", tileset);
    map.createLayer("Decoration", tileset);

    const collisionLayer = map.createLayer(
      "Collision",
      tileset
    );

    if (collisionLayer) {
      collisionLayer.setCollisionByExclusion([-1]);
      collisionLayer.visible = false;
    }

    // Camera
    this.cameras.main.setBounds(
      0,
      0,
      map.widthInPixels,
      map.heightInPixels
    );

    this.cameras.main.setZoom(2);

    // Player
  this.player = this.physics.add.sprite(
    80,
    80,
    "player",
    0
);

this.player.setScale(2);

this.player.setDepth(100);
this.player.setCollideWorldBounds(true);

    

    if (collisionLayer) {
      this.physics.add.collider(
        this.player,
        collisionLayer
      );
    }

    this.cameras.main.startFollow(this.player);
    // Enter Prompt
this.enterPrompt = this.add.text(
    408,
    186,
    "Press E to Enter",
    {
        fontSize: "14px",
        color: "#ffffff",
        backgroundColor: "#000000",
        padding: {
            x: 6,
            y: 3
        }
    }
);

this.enterPrompt
    .setOrigin(0.5)
    .setDepth(500)
    .setVisible(false);
    

    // Input
    this.cursors = this.input.keyboard!.createCursorKeys();

    this.keys = this.input.keyboard!.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
    }) as {
      W: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };
  }
    update() {
    const speed = 180;

    let vx = 0;
    let vy = 0;

    // Horizontal movement
    if (this.keys.A.isDown || this.cursors.left.isDown || this.dpad.left) {
      vx = -speed;
    } else if (this.keys.D.isDown || this.cursors.right.isDown || this.dpad.right) {
      vx = speed;
    }

    // Vertical movement
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

    // =========================
// DOOR CHECK
// =========================

const distance = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    408,
    216
);

if (distance < 40) {

    this.enterPrompt
    .setPosition(408, 186)
    .setVisible(true);

    if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {

        AudioManager.stop(this, "exteriorMusic");
        this.scene.start("AcademyInterior");

    }

} else {

    this.enterPrompt.setVisible(false);

}

    
    }
  
}