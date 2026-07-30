import Phaser from "phaser";


export default class AudioManager {

    static isEnabled(): boolean {
        return localStorage.getItem("musicEnabled") !== "false";
    }

    static getVolume(defaultVolume: number): number {
        const master =
            Number(localStorage.getItem("musicVolume") ?? 1);

        return master * defaultVolume;
    }

    static play(
        scene: Phaser.Scene,
        key: string,
        defaultVolume: number
    ) {

        if (!this.isEnabled()) return;

        let music = scene.sound.get(key) as any;

        if (!music) {

            music = scene.sound.add(key, {
                loop: true,
                volume: this.getVolume(defaultVolume)
            });

        } else {

            music.volume=this.getVolume(defaultVolume);

        }

        if (!music.isPlaying) {
            music.play();
        }

    }

    static stop(scene: Phaser.Scene, key: string) {

        scene.sound.stopByKey(key);

    }

    static stopAll(scene: Phaser.Scene) {

        scene.sound.stopByKey("menuMusic");
        scene.sound.stopByKey("exteriorMusic");
        scene.sound.stopByKey("classroomMusic");
        scene.sound.stopByKey("puzzleMusic");
        scene.sound.stopByKey("graduationMusic");

    }

    static refreshVolumes(scene: Phaser.Scene) {

    const keys = [
        { key: "menuMusic", volume: 0.35 },
        { key: "exteriorMusic", volume: 0.35 },
        { key: "classroomMusic", volume: 0.35 },
        { key: "puzzleMusic", volume: 0.05 },
        { key: "graduationMusic", volume: 0.35 }
    ];

    keys.forEach(({ key, volume }) => {
        const sound = scene.sound.get(key) as any;

        if (sound) {
            sound.volume = this.getVolume(volume);
        }
    });

}

}