import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {

        super(scene, x, y, "player", 0);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(2);
        this.setDepth(100);
        this.setCollideWorldBounds(true);
    }

    public stopMovement() {
        this.setVelocity(0, 0);
    }
}