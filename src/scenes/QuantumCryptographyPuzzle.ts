import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";
export default class QuantumCryptographyPuzzle extends Phaser.Scene {

    private evePresent = false;

    private info!: Phaser.GameObjects.Text;

    constructor() {
        super("QuantumCryptographyPuzzle");
    }

    create() {
        AudioManager.play(this, "puzzleMusic", 0.05);
        localStorage.setItem("currentScene", "QuantumCryptographyPuzzle");

        this.cameras.main.setBackgroundColor("#12082A");

        const width = this.scale.width;

        this.add.text(
            width / 2,
            60,
            "Quantum Cryptography",
            {
                fontSize: "40px",
                color: "#FFD700"
            }
        ).setOrigin(0.5);

        this.info = this.add.text(
            width / 2,
            120,
            "Has the quantum key been intercepted?",
            {
                fontSize: "26px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.add.text(
            220,
            320,
            "Alice",
            { fontSize: "34px", color: "#87CEFA" }
        ).setOrigin(0.5);

        this.add.text(
            width/2,
            320,
            "🔑",
            { fontSize: "50px" }
        ).setOrigin(0.5);

        this.add.text(
            1060,
            320,
            "Bob",
            { fontSize: "34px", color: "#90EE90" }
        ).setOrigin(0.5);

        this.evePresent = Phaser.Math.Between(0,1)===1;

        if(this.evePresent){

            this.add.text(
                width/2,
                240,
                "👀 Eve",
                {
                    fontSize:"40px"
                }
            ).setOrigin(0.5);

        }

        this.createButton(
            430,
            620,
            "SAFE",
            ()=>this.answer(false)
        );

        this.createButton(
            850,
            620,
            "INTERCEPTED",
            ()=>this.answer(true)
        );

    }

    private createButton(x:number,y:number,label:string,callback:()=>void){

        const btn=this.add.rectangle(
            x,
            y,
            260,
            70,
            0x6A0DAD
        )
        .setInteractive({useHandCursor:true})
        .setStrokeStyle(2,0xffffff);

        this.add.text(
            x,
            y,
            label,
            {
                fontSize:"28px",
                color:"#FFFFFF"
            }
        ).setOrigin(0.5);

        btn.on("pointerdown",callback);

    }

    private answer(intercepted:boolean){

        if(intercepted===this.evePresent){

            this.info.setText(
                "🎉 Correct! Quantum communication is secure because eavesdropping can be detected."
            );

            this.time.delayedCall(2500,()=>{
                AudioManager.stop(this, "puzzleMusic");

                this.scene.start("Quiz11");

            });

        }

        else{

            this.info.setText(
                "❌ Not quite. Look carefully and try again!"
            );

        }

    }
    
    

}


