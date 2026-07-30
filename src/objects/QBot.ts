import Phaser from "phaser";

export default class QBot extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {

        super(scene, x, y, "qbot");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.07); // Change if your image is smaller/larger
        this.setDepth(99);

        const body = this.body as Phaser.Physics.Arcade.Body;
        body.allowGravity = false;
        body.setImmovable(true);
    }

    follow(player: Phaser.Physics.Arcade.Sprite) {

        const targetX = player.x - 20;
        const targetY = player.y - 20;

        this.x = Phaser.Math.Linear(this.x, targetX, 0.08);
        this.y = Phaser.Math.Linear(this.y, targetY, 0.08);
    }
}