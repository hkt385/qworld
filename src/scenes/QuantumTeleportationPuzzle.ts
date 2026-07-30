import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

export default class QuantumTeleportationPuzzle extends Phaser.Scene {

    private stage = 0;

    private info!: Phaser.GameObjects.Text;
    private alice!: Phaser.GameObjects.Text;
    private bob!: Phaser.GameObjects.Text;

    private classicalBits = "";
    private correctGate = "";

    constructor() {
        super("QuantumTeleportationPuzzle");
    }

    create() {

        AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", "QuantumTeleportationPuzzle");

        const width = this.scale.width;

        this.cameras.main.setBackgroundColor("#12082A");

        this.add.text(
            width / 2,
            60,
            "Quantum Teleportation Puzzle",
            {
                fontSize: "40px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.info = this.add.text(
            width / 2,
            120,
            "Step 1: Create Entanglement",
            {
                fontSize: "24px",
                color: "#FFFFFF",
                align: "center"
            }
        ).setOrigin(0.5);

        this.alice = this.add.text(
            260,
            320,
            "Alice\n|ψ⟩",
            {
                fontSize: "34px",
                backgroundColor: "#2D1B55",
                padding: {
                    left: 20,
                    right: 20,
                    top: 15,
                    bottom: 15
                },
                align: "center"
            }
        ).setOrigin(0.5);

        this.bob = this.add.text(
            1020,
            320,
            "Bob\n|0⟩",
            {
                fontSize: "34px",
                backgroundColor: "#2D1B55",
                padding: {
                    left: 20,
                    right: 20,
                    top: 15,
                    bottom: 15
                },
                align: "center"
            }
        ).setOrigin(0.5);

        // Entangle Button
        this.createButton(
            150,
            620,
            "Entangle",
            () => this.entangle()
        );

        // Measure Button
        this.createButton(
            390,
            620,
            "Measure",
            () => this.measure()
        );

        // Send Bits Button
        this.createButton(
            630,
            620,
            "Send Bits",
            () => this.sendBits()
        );

        // Identity
        this.createButton(
            870,
            620,
            "Identity",
            () => this.checkGate("I")
        );

        // X Gate
        this.createButton(
            1110,
            620,
            "X Gate",
            () => this.checkGate("X")
        );

        // Z Gate
        this.createButton(
            870,
            700,
            "Z Gate",
            () => this.checkGate("Z")
        );

        // X + Z
        this.createButton(
            1110,
            700,
            "X + Z",
            () => this.checkGate("XZ")
        );

    }

    private createButton(
        x: number,
        y: number,
        label: string,
        callback: () => void
    ) {

        const btn = this.add.rectangle(
            x,
            y,
            180,
            60,
            0x6A0DAD
        )
        .setStrokeStyle(2, 0xffffff)
        .setInteractive({
            useHandCursor: true
        });

        this.add.text(
            x,
            y,
            label,
            {
                fontSize: "22px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        btn.on("pointerdown", callback);

    }
    private entangle() {

    if (this.stage !== 0) {

        this.info.setText("❌ Create entanglement first.");
        return;

    }

    this.stage = 1;

    this.alice.setText(
`Alice
|E⟩`
    );

    this.bob.setText(
`Bob
|E⟩`
    );

    // Draw entanglement line
    const line = this.add.line(
        640,
        320,
        -280,
        0,
        280,
        0,
        0x00ffff
    ).setLineWidth(4);

    this.tweens.add({
        targets: line,
        alpha: { from: 0.2, to: 1 },
        duration: 500,
        yoyo: true,
        repeat: -1
    });

    this.info.setText(
`✅ Entanglement Created!

Alice and Bob now share an entangled pair.

Step 2:
Measure Alice.`
    );

}

private measure() {

    if (this.stage !== 1) {

        this.info.setText(
            "❌ Entangle the qubits first."
        );

        return;

    }

    this.stage = 2;

    const outcomes = [
        "00",
        "01",
        "10",
        "11"
    ];

    this.classicalBits =
        Phaser.Utils.Array.GetRandom(outcomes);

    switch (this.classicalBits) {

        case "00":
            this.correctGate = "I";
            break;

        case "01":
            this.correctGate = "X";
            break;

        case "10":
            this.correctGate = "Z";
            break;

        case "11":
            this.correctGate = "XZ";
            break;

    }

    this.alice.setText(
`Alice

Measured

${this.classicalBits}`
    );

    this.info.setText(
`✅ Measurement Complete!

Result:

${this.classicalBits}

These are the classical bits.

Now send them to Bob.`
    );

}
private sendBits() {

    if (this.stage !== 2) {

        this.info.setText(
            "❌ Measure Alice first."
        );

        return;

    }

    this.stage = 3;

    const bits = this.add.text(
        360,
        250,
        this.classicalBits,
        {
            fontSize: "34px",
            color: "#00FFAA",
            backgroundColor: "#222222",
            padding: {
                left: 10,
                right: 10,
                top: 5,
                bottom: 5
            }
        }
    ).setOrigin(0.5);

    this.tweens.add({

        targets: bits,

        x: 930,

        duration: 1500,

        ease: "Linear",

        onComplete: () => {

            bits.destroy();

            this.info.setText(
`📨 Classical Bits Received!

Bob received:

${this.classicalBits}

Choose the correct correction gate.`
            );

        }

    });

}

private checkGate(choice: string) {

    if (this.stage !== 3) {

        this.info.setText(
            "❌ Send the classical bits first."
        );

        return;

    }

    if (choice !== this.correctGate) {

        this.info.setText(
`❌ Incorrect!

Alice measured:

${this.classicalBits}

Think carefully about which gate Bob should apply.

Try again!`
        );

        return;

    }

    this.stage = 4;

    this.bob.setText(
`Bob
|ψ⟩`
    );

    this.info.setText(
`🎉 Quantum Teleportation Successful!

Bob now has Alice's original quantum state.

The original quantum state no longer exists.

This follows the No-Cloning Theorem!

Great Job!`
    );

    this.time.delayedCall(3500, () => {

        AudioManager.stop(this, "puzzleMusic");

        this.scene.start("Quiz9");

    });

}}