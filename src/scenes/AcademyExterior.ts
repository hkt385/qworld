import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";


export default class AcademyExterior extends Phaser.Scene {
  
private enterPrompt!: Phaser.GameObjects.Text;
  private player!: Phaser.Physics.Arcade.Sprite;
  private doorPrompt!: Phaser.GameObjects.Text;
  private enteringDoor = false;
  private touchStartX = 0;
private touchStartY = 0;

private touchCurrentX = 0;
private touchCurrentY = 0;

private isTouching = false;

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
    
    
    AudioManager.play(this, "exteriorMusic", 0.30);
    

    localStorage.setItem("currentScene", "AcademyExterior");

    
    

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
    60,
    60,
    "📱 Drag your finger or use arrow keys to move",
    {
        fontSize: "16px",
        color: "#ffffff",
        backgroundColor: "#000000",
        padding: {
            x: 8,
            y: 5
        }
    }
);

this.enterPrompt
    .setScrollFactor(0)
    .setDepth(1000);


    

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
    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
    this.isTouching = true;

    this.touchStartX = pointer.x;
    this.touchStartY = pointer.y;

    this.touchCurrentX = pointer.x;
    this.touchCurrentY = pointer.y;
});


this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
    if (this.isTouching) {
        this.touchCurrentX = pointer.x;
        this.touchCurrentY = pointer.y;
    }
});

this.input.on("pointerup", () => {
    this.isTouching = false;
});
this.doorPrompt = this.add.text(
    408,
    186,
    "🚪 Walk to the door to enter",
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

this.doorPrompt
    .setOrigin(0.5)
    .setDepth(500)
    .setVisible(false);
  }
    update() {
    const speed = 180;

let vx = 0;
let vy = 0;

// Keyboard movement
if (this.keys.A.isDown || this.cursors.left.isDown) {
    vx = -speed;
    
}
else if (this.keys.D.isDown || this.cursors.right.isDown) {
    vx = speed;
    
}
if (this.keys.W.isDown || this.cursors.up.isDown) {
    vy = -speed;
    
}
else if (this.keys.S.isDown || this.cursors.down.isDown) {
    vy = speed;
    
}

// Touch & Drag movement
if (this.isTouching) {

    const dx = Phaser.Math.Clamp(
    this.touchCurrentX - this.touchStartX,
    -80,
    80
);

const dy = Phaser.Math.Clamp(
    this.touchCurrentY - this.touchStartY,
    -80,
    80
);

    const deadZone = 15;

    if (Math.abs(dx) > deadZone || Math.abs(dy) > deadZone) {

        const length = Math.sqrt(dx * dx + dy * dy);

        vx = (dx / length) * speed;
        vy = (dy / length) * speed;
    }
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

// Show prompt when nearby
if (distance < 180) {

  this.doorPrompt
        .setPosition(408, 186)
        .setText("Walk to the door to enter")
        .setVisible(true);

} else {

    this.doorPrompt.setVisible(false);

}

// Enter automatically when very close
if (distance < 25 && !this.enteringDoor) {

    this.enteringDoor = true;

    AudioManager.stop(this, "exteriorMusic");

    this.cameras.main.fadeOut(300, 0, 0, 0);

    this.cameras.main.once(
        Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
        () => {
            this.scene.start("AcademyInterior");
        }
    );

}

    
    }
  
  }