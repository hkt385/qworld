import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

export default class BlochSpherePuzzle extends Phaser.Scene {

    private step = 0;
    private info!: Phaser.GameObjects.Text;

    constructor() {
        super("BlochSpherePuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);


        localStorage.setItem("currentScene", "BlochSpherePuzzle");

        this.cameras.main.setBackgroundColor("#12082A");

        const w = this.scale.width;
        

        this.add.text(
            w / 2,
            60,
            "Bloch Sphere Puzzle",
            {
                fontSize: "40px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.info = this.add.text(
            w / 2,
            120,
            "Click the point representing |0⟩",
            {
                fontSize: "26px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.add.circle(w / 2, 350, 170)
            .setStrokeStyle(4, 0xffffff);

        const top = this.createPoint(w / 2, 180, "|0⟩");
        const bottom = this.createPoint(w / 2, 520, "|1⟩");
        const left = this.createPoint(w / 2 - 170, 350, "|+⟩");
        const right = this.createPoint(w / 2 + 170, 350, "|−⟩");

        top.on("pointerdown", () => this.check(0));
        bottom.on("pointerdown", () => this.check(1));
        left.on("pointerdown", () => this.check(2));
        right.on("pointerdown", () => this.check(3));

    }

    private createPoint(x:number,y:number,label:string){

        const c=this.add.circle(x,y,18,0x6A0DAD)
            .setInteractive({useHandCursor:true});

        this.add.text(x,y+35,label,{
            fontSize:"22px",
            color:"#FFFFFF"
        }).setOrigin(0.5);

        return c;

    }

    private check(choice:number){

        if(this.step===0){

            if(choice===0){

                this.step++;

                this.info.setText("Great! Now click |1⟩");

            }else{

                this.info.setText("Try again! Find |0⟩.");

            }

        }

        else if(this.step===1){

            if(choice===1){

                this.step++;

                this.info.setText("Excellent! Now select a superposition state.");

            }else{

                this.info.setText("That's not |1⟩.");

            }

        }

        else{

            if(choice===2 || choice===3){

                this.info.setText(
                    "🎉 Perfect!\nYou've explored the Bloch Sphere."
                );

                this.time.delayedCall(2500,()=>{
                    this.sound.stopByKey("puzzleMusic");

                    this.scene.start("Quiz12");

                });

            }

            else{

                this.info.setText(
                    "Choose one of the side points."
                );

            }

        }

    }

}