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

        let music = scene.sound.get(key);

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

        scene.sound.getAll().forEach(sound => {

            switch (sound.key) {

                case "menuMusic":
                    sound.volume = this.getVolume(0.35);
                    break;

                case "exteriorMusic":
                    sound.volume = this.getVolume(0.35);
                    break;

                case "classroomMusic":
                    sound.volume = this.getVolume(0.35);
                    break;

                case "puzzleMusic":
                    sound.volume = this.getVolume(0.05);
                    break;

                case "graduationMusic":
                    sound.volume = this.getVolume(0.35);
                    break;

            }

        });

    }

}