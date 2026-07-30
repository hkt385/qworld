import Phaser from "phaser";

export default class Semester2Complete extends Phaser.Scene {

    constructor(){

        super("Semester2Complete");

    }

    create(){
        // Semester2Complete.ts
localStorage.setItem("currentScene", "Semester2Complete");

        this.cameras.main.setBackgroundColor("#12082A");

        const w=this.scale.width;
        

        this.add.text(
            w/2,
            100,
            "🏆 Semester 2 Complete!",
            {
                fontSize:"48px",
                color:"#FFD700",
                fontStyle:"bold"
            }
        ).setOrigin(0.5);

        this.add.text(
            w/2,
            320,
            "Fantastic work!\n\nYou completed Semester 2 of QWorld.\n\nYou explored:\n\n• Hadamard Gates\n• Quantum Circuits\n• Quantum Teleportation\n• Quantum Error Correction\n• Quantum Cryptography\n• Bloch Sphere",
            {
                fontSize:"28px",
                color:"#FFFFFF",
                align:"center",
                wordWrap:{width:900}
            }
        ).setOrigin(0.5);

        

        const btn=this.add.rectangle(
            w/2,
            650,
            450,
            70,
            0x6A0DAD
        )
        .setInteractive({useHandCursor:true})
        .setStrokeStyle(2,0xffffff);

        this.add.text(
            w/2,
            650,
            "Start Semester 3",
            {
                fontSize:"28px",
                color:"#FFFFFF"
            }
        ).setOrigin(0.5);

        btn.on("pointerdown",()=>{
            localStorage.setItem("semester3Unlocked", "true");
             localStorage.setItem("selectedSemester", "3");

            this.scene.start("AcademyInterior");

        });

    }

}