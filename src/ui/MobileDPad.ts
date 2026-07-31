import Phaser from "phaser";

export default class MobileDPad {

    public left = false;
    public right = false;
    public up = false;
    public down = false;

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

        
        const height = scene.cameras.main.height;

        const centerX = 110;
        const centerY = height - 110;

        this.createButton("◀", centerX - 60, centerY, "left");
        this.createButton("▶", centerX + 60, centerY, "right");
        this.createButton("▲", centerX, centerY - 60, "up");
        this.createButton("▼", centerX, centerY + 60, "down");
    }

    private createButton(
        label: string,
        x: number,
        y: number,
        direction: "left" | "right" | "up" | "down"
    ) {

        const button = this.scene.add.circle(
            x,
            y,
            45,
            0x000000,
            0.45
        );

        button
            .setScrollFactor(0)
            .setDepth(100000)
            .setInteractive({ useHandCursor: false });

        const text = this.scene.add.text(
            x,
            y,
            label,
            {
                fontSize: "30px",
                color: "#ffffff",
                fontStyle: "bold"
            }
        );

        text
            .setOrigin(0.5)
            .setScrollFactor(0)
            .setDepth(100001);

        const press = () => {
            this[direction] = true;
        };

        const release = () => {
            this.left = false;
            this.right = false;
            this.up = false;
            this.down = false;
        };

        button.on("pointerdown", press);
        button.on("pointerup", release);
        button.on("pointerout", release);
        button.on("pointerupoutside", release);
    }
}