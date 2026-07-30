import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

interface MigrationTask {

    system: string;
    current: string;
    choices: string[];
    answer: string;
    explanation: string;

}

export default class PostQuantumMigrationPuzzle extends Phaser.Scene {

    private tasks: MigrationTask[] = [

        {
            system: "🏦 Bank Login",
            current: "RSA",
            choices: ["RSA","ECC","ML-KEM","AES-256"],
            answer: "ML-KEM",
            explanation: "ML-KEM replaces RSA for secure key establishment."
        },

        {
            system: "📱 Messaging App",
            current: "ECC",
            choices: ["ECC","RSA","ML-KEM","SHA-256"],
            answer: "ML-KEM",
            explanation: "ML-KEM replaces ECC for key exchange."
        },

        {
            system: "🏛 Government Portal",
            current: "RSA Signature",
            choices: ["ML-DSA","AES-256","ML-KEM","RSA"],
            answer: "ML-DSA",
            explanation: "ML-DSA replaces RSA for digital signatures."
        },

        {
            system: "🏥 Hospital Database",
            current: "AES-256",
            choices: ["Leave As Is","RSA","ECC","ML-DSA"],
            answer: "Leave As Is",
            explanation: "AES-256 remains secure against known quantum attacks."
        }

    ];

    private currentIndex = 0;

    private score = 0;

    private systemText!: Phaser.GameObjects.Text;
    private currentAlgoText!: Phaser.GameObjects.Text;
    private infoText!: Phaser.GameObjects.Text;

    private buttons: Phaser.GameObjects.Rectangle[] = [];
    private buttonLabels: Phaser.GameObjects.Text[] = [];

    constructor(){

        super("PostQuantumMigrationPuzzle");

    }

    create(){

        AudioManager.play(this,"puzzleMusic",0.05);

        localStorage.setItem(
            "currentScene",
            "PostQuantumMigrationPuzzle"
        );

        this.cameras.main.setBackgroundColor("#0F172A");

        this.add.text(

            640,
            55,

            "POST-QUANTUM MIGRATION",

            {

                fontSize:"40px",
                color:"#FFD700"

            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            105,

            "Upgrade vulnerable systems before quantum computers arrive.",

            {

                fontSize:"22px",
                color:"#FFFFFF"

            }

        ).setOrigin(0.5);

        this.systemText=this.add.text(

            640,
            220,

            "",

            {

                fontSize:"36px",
                color:"#00FFFF"

            }

        ).setOrigin(0.5);

        this.currentAlgoText=this.add.text(

            640,
            300,

            "",

            {

                fontSize:"30px",
                color:"#FFFFFF",
                align:"center"

            }

        ).setOrigin(0.5);

        this.infoText=this.add.text(

            640,
            640,

            "",

            {

                fontSize:"24px",
                color:"#FFFFFF",
                align:"center",
                wordWrap:{width:900}

            }

        ).setOrigin(0.5);

        const startY=400;

        for(let i=0;i<4;i++){

            const box=this.add.rectangle(

                640,
                startY+i*60,
                350,
                45,
                0x6A0DAD

            )

            .setStrokeStyle(2,0xffffff)
            .setInteractive({useHandCursor:true});

            const txt=this.add.text(

                640,
                startY+i*60,

                "",

                {

                    fontSize:"22px",
                    color:"#FFFFFF"

                }

            ).setOrigin(0.5);

            box.on("pointerdown",()=>{

                this.selectChoice(i);

            });

            this.buttons.push(box);
            this.buttonLabels.push(txt);

        }

        this.loadTask();

    }
    private loadTask(){

    const task=this.tasks[this.currentIndex];

    this.systemText.setText(task.system);

    this.currentAlgoText.setText(

`Current Algorithm

${task.current}`

    );

    this.infoText.setText(

        "Select the best Post-Quantum upgrade."

    );

    for(let i=0;i<4;i++){

        this.buttonLabels[i].setText(task.choices[i]);

        this.buttons[i].setFillStyle(0x6A0DAD);

        this.buttons[i].setInteractive({useHandCursor:true});

        this.buttons[i].setInteractive({useHandCursor:true});

    }

}

private selectChoice(index:number){

    this.buttons.forEach(btn=>btn.disableInteractive());

    const task=this.tasks[this.currentIndex];

    const selected=task.choices[index];

    if(selected===task.answer){

        this.score++;

        this.buttons[index].setFillStyle(0x2E8B57);

        this.infoText.setText(

`✅ Correct!

${task.explanation}`

        );

    }

    else{

        this.buttons[index].setFillStyle(0xC62828);

        this.infoText.setText(

`❌ Incorrect!

${task.explanation}`

        );

    }

    this.time.delayedCall(

        2500,

        ()=>{

            this.currentIndex++;

            if(this.currentIndex>=this.tasks.length){

                this.showResults();

            }

            else{

                this.loadTask();

            }

        }

    );

}

private showResults(){

    this.children.removeAll();

    this.cameras.main.setBackgroundColor("#081421");

    this.add.text(

        640,
        70,

        "POST-QUANTUM MIGRATION COMPLETE",

        {

            fontSize:"40px",
            color:"#FFD700"

        }

    ).setOrigin(0.5);

    this.add.text(

        640,
        150,

        `Systems Upgraded

${this.score}/${this.tasks.length}`,

        {

            fontSize:"30px",
            color:"#FFFFFF",
            align:"center"

        }

    ).setOrigin(0.5);

    const report=[

        "🏦 Bank        RSA → ML-KEM",
        "📱 Messaging   ECC → ML-KEM",
        "🏛 Government  RSA Signature → ML-DSA",
        "🏥 Hospital    AES-256 → Leave As Is"

    ];

    this.add.text(

        640,
        360,

        report.join("\n\n"),

        {

            fontSize:"26px",
            color:"#00FFFF",
            align:"left"

        }

    ).setOrigin(0.5);

    if(this.score===this.tasks.length){

        this.add.text(

            640,
            610,

            "🎉 Perfect!\nEvery vulnerable system has been successfully migrated.",

            {

                fontSize:"28px",
                color:"#00FF88",
                align:"center"

            }

        ).setOrigin(0.5);

    }

    else{

        this.add.text(

            640,
            610,

            "Good work!\nSome systems still need attention. Review the correct migrations.",

            {

                fontSize:"28px",
                color:"#FFD700",
                align:"center"

            }

        ).setOrigin(0.5);

    }

    this.time.delayedCall(

        5000,

        ()=>{

            AudioManager.stop(this,"puzzleMusic");

            this.scene.start("Quiz14");

        }

    );

}}