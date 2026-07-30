import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

export default class SettingsScene extends Phaser.Scene {
    private musicEnabled = true;
    private volume = 0.30;

    constructor() {
        super("SettingsScene");
    }

    create() {

    this.cameras.main.setBackgroundColor("#24123B");

    this.musicEnabled =
        localStorage.getItem("musicEnabled") !== "false";

    this.volume =
        Number(localStorage.getItem("musicVolume") ?? 0.30);

    this.add.text(
        640,
        80,
        "⚙ SETTINGS",
        {
            fontSize: "44px",
            color: "#FFD166",
            fontStyle: "bold"
        }
    ).setOrigin(0.5);

    // =========================
    // MUSIC
    // =========================

    const musicLabel = this.add.text(
        350,
        190,
        "Music",
        {
            fontSize: "30px",
            color: "#FFFFFF"
        }
    );

    const musicButton = this.add.text(
        820,
        190,
        "",
        {
            fontSize: "30px",
            backgroundColor: "#6A4C93",
            color: "#FFFFFF",
            padding: {
                left: 18,
                right: 18,
                top: 8,
                bottom: 8
            }
        }
    )
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true });

    const updateMusic = () => {

        musicButton.setText(
            this.musicEnabled ? "ON" : "OFF"
        );

    };

    updateMusic();

    musicButton.on("pointerdown", () => {

        this.musicEnabled = !this.musicEnabled;

        localStorage.setItem(
            "musicEnabled",
            String(this.musicEnabled)
        );

        updateMusic();

        if (!this.musicEnabled) {

    AudioManager.stopAll(this);

} else {

    AudioManager.play(this, "menuMusic", 0.35);

}

    });

    // =========================
    // VOLUME
    // =========================

    this.add.text(
    430,
    310,
    "Volume",
    {
        fontSize: "30px",
        color: "#FFFFFF"
    }
);

const minus = this.add.text(
    690,
    310,
    "◀",
    {
        fontSize: "34px",
        color: "#FFD166"
    }
)
.setOrigin(0.5)
.setInteractive({ useHandCursor: true });

const value = this.add.text(
    760,
    310,
    "",
    {
        fontSize: "30px",
        color: "#FFFFFF"
    }
).setOrigin(0.5);

const plus = this.add.text(
    830,
    310,
    "▶",
    {
        fontSize: "34px",
        color: "#FFD166"
    }
)
.setOrigin(0.5)
.setInteractive({ useHandCursor: true });
    const updateVolume = () => {

        value.setText(
            `${Math.round(this.volume * 100)}%`
        );

        localStorage.setItem(
            "musicVolume",
            String(this.volume)
        );

        AudioManager.refreshVolumes(this);

    };

    updateVolume();

    minus.on("pointerdown", () => {

        this.volume = Math.max(0, this.volume - 0.1);

        updateVolume();

    });

    plus.on("pointerdown", () => {

        this.volume = Math.min(1, this.volume + 0.1);

        updateVolume();

    });

    // =========================
// BACK BUTTON
// =========================

const back = this.add.rectangle(
    640,
    560,
    220,
    60,
    0x6A4C93
)
.setInteractive({ useHandCursor: true });

const backText = this.add.text(
    640,
    560,
    "BACK",
    {
        fontSize: "28px",
        color: "#FFFFFF",
        fontStyle: "bold"
    }
).setOrigin(0.5);

back.on("pointerover", () => {
    back.setFillStyle(0x8E63C8);
});

back.on("pointerout", () => {
    back.setFillStyle(0x6A4C93);
});

const goBack = () => {
    this.scene.start("MainMenuScene");
};

back.on("pointerdown", goBack);

backText
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", goBack)
    .on("pointerover", () => {
        back.setFillStyle(0x8E63C8);
    })
    .on("pointerout", () => {
        back.setFillStyle(0x6A4C93);
    });

}
}