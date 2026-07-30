import Phaser from "phaser";

export default class MobileDPad {

    public left = false;
    public right = false;
    public up = false;
    public down = false;

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

        // Only show on touch devices
        if (!scene.sys.game.device.input.touch) return;

        const width = scene.scale.width;
        const height = scene.scale.height;

        this.createButton("◀", 70, height - 90, "left");
        this.createButton("▶", 170, height - 90, "right");
        this.createButton("▲", 120, height - 140, "up");
        this.createButton("▼", 120, height - 40, "down");
    }

    private createButton(
        label: string,
        x: number,
        y: number,
        direction: "left" | "right" | "up" | "down"
    ) {

        const button = this.scene.add.circle(x, y, 35, 0x000000, 0.35)
            .setScrollFactor(0)
            .setDepth(9999)
            .setInteractive();

        this.scene.add.text(x, y, label, {
            fontSize: "26px",
            color: "#ffffff"
        })
            .setOrigin(0.5)
            .setScrollFactor(0)
            .setDepth(10000);

        button.on("pointerdown", () => {
            this[direction] = true;
        });

        button.on("pointerup", () => {
            this[direction] = false;
        });

        button.on("pointerout", () => {
            this[direction] = false;
        });
    }
}