import Phaser from "phaser";

export default class Professor extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {

        super(scene, x, y, "professor");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        const body = this.body as Phaser.Physics.Arcade.Body;
body.setAllowGravity(false);
this.setImmovable(true);

        this.setScale(0.06);
        this.setDepth(100);
    }

    public canTalk(player: Phaser.Physics.Arcade.Sprite): boolean {

        const distance = Phaser.Math.Distance.Between(
            player.x,
            player.y,
            this.x,
            this.y
        );

        return distance < 150;
    }
}