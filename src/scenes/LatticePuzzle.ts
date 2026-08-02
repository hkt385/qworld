import Phaser from "phaser";
import AudioManager from "../utils/AudioManager";

export default class LatticePuzzle extends Phaser.Scene {
private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
private dpad!: Phaser.GameObjects.Container;
    private tileSize = 64;

    private level = 0;

    private maps:number[][][]=[

        [
            [0,0,0,1,0,0,0],
            [0,1,0,1,0,1,0],
            [0,1,0,0,0,1,0],
            [0,1,1,1,0,1,0],
            [0,0,0,0,0,1,0],
            [1,1,1,0,1,1,0],
            [0,0,0,0,0,0,2]
        ],

        [
            [0,0,1,0,0,0,0],
            [1,0,1,0,1,1,0],
            [0,0,0,0,0,1,0],
            [0,1,1,1,0,1,0],
            [0,1,0,0,0,0,0],
            [0,1,0,1,1,1,0],
            [0,0,0,0,0,0,2]
        ],

        [
            [0,1,0,0,1,0,0],
            [0,1,0,1,1,0,1],
            [0,0,0,0,0,0,0],
            [1,1,1,1,0,1,0],
            [0,0,0,1,0,1,0],
            [0,1,0,0,0,1,0],
            [0,0,0,1,0,0,2]
        ]

    ];

    private playerRow=0;
    private playerCol=0;

    private player!:Phaser.GameObjects.Rectangle;



    constructor(){

        super("LatticePuzzle");

    }

    create() {

    AudioManager.play(this,"puzzleMusic",0.25);

    this.cameras.main.setBackgroundColor("#081421");

    this.cursors = this.input.keyboard!.createCursorKeys();

    this.loadLevel();

    this.createDPad();

}

    private loadLevel(){

        this.children.removeAll();

        this.add.text(

    640,
    55,

    `
    LATTICE CHALLENGE - LEVEL ${this.level + 1}
🟦 Blue = Your Position🟩 Green = Goal
🟥 Red = Blocked Path
Use ← ↑ ↓ → to move Find the shortest path!`,

    {
        fontSize: "22px",
        color: "#ffffff",
        align: "center"
    }

).setOrigin(0.5);

        const grid=this.maps[this.level];

        this.playerRow=0;
        this.playerCol=0;

        const offsetX=320;
        const offsetY=120;

        for(let r=0;r<grid.length;r++){

            for(let c=0;c<grid[r].length;c++){

                let colour=0x404040;

                if(grid[r][c]===1){

                    colour=0x8B0000;

                }

                else if(grid[r][c]===2){

                    colour=0x2E8B57;

                }

                this.add.rectangle(

                    offsetX+c*this.tileSize,
                    offsetY+r*this.tileSize,

                    this.tileSize-2,
                    this.tileSize-2,

                    colour

                ).setOrigin(0);

            }

        }

        this.player=this.add.rectangle(

            offsetX+8,
            offsetY+8,

            this.tileSize-16,
            this.tileSize-16,

            0x00BFFF

        ).setOrigin(0);
        this.createDPad();

    }
        private tryMove(rowOffset:number,colOffset:number){

        const grid=this.maps[this.level];

        const newRow=this.playerRow+rowOffset;
        const newCol=this.playerCol+colOffset;

        if(
            newRow<0||
            newCol<0||
            newRow>=grid.length||
            newCol>=grid[0].length
        ){
            return;
        }

        if(grid[newRow][newCol]===1){

            this.cameras.main.shake(120,0.004);

            return;
        }

        this.playerRow=newRow;
        this.playerCol=newCol;

        this.updatePlayerPosition();

        if(grid[newRow][newCol]===2){

            this.time.delayedCall(

                500,

                ()=>{

                    this.nextLevel();

                }

            );

        }

    }

    private updatePlayerPosition(){

        const offsetX=320;
        const offsetY=120;

        this.player.setPosition(

            offsetX+this.playerCol*this.tileSize+8,
            offsetY+this.playerRow*this.tileSize+8

        );

    }
    private createDPad() {

    this.dpad = this.add.container(0, 0);

    const createButton = (
        x:number,
        y:number,
        text:string,
        row:number,
        col:number
    ) => {

        const bg = this.add.rectangle(
            x,
            y,
            70,
            70,
            0x6A0DAD
        )
        .setStrokeStyle(2,0xffffff)
        .setInteractive();

        const label = this.add.text(
            x,
            y,
            text,
            {
                fontSize:"34px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);

        bg.on("pointerdown",()=>{

            this.tryMove(row,col);

        });

        this.dpad.add(bg);
        this.dpad.add(label);

    };

    createButton(160,620,"◀",0,-1);
    createButton(260,520,"▲",-1,0);
    createButton(260,620,"▼",1,0);
    createButton(360,620,"▶",0,1);

    this.dpad.setScrollFactor(0);
    this.dpad.setDepth(9999);

}

    private nextLevel(){

        this.level++;

        if(this.level>=this.maps.length){

            this.showComplete();

        }
        else{

            this.loadLevel();

        }

    }

    private showComplete(){

        this.children.removeAll();

if (this.dpad) {

    this.dpad.destroy();

}

        this.cameras.main.setBackgroundColor("#081421");

        this.add.text(

            640,
            120,

            "LATTICE CHALLENGE COMPLETE",

            {

                fontSize:"40px",
                color:"#FFD700"

            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            280,

            "✓ You successfully navigated\nthrough several lattices.\n\nImagine solving the same problem\nin hundreds or thousands of dimensions.\n\nThis computational difficulty is why\nlattice-based cryptography forms the\nfoundation of algorithms like ML-KEM.",

            {

                fontSize:"26px",
                color:"#FFFFFF",
                align:"center"

            }

        ).setOrigin(0.5);

        this.add.text(

            640,
            620,

            "Loading Quiz...",

            {

                fontSize:"24px",
                color:"#00FFAA"

            }

        ).setOrigin(0.5);

        this.time.delayedCall(

            5000,

            ()=>{

                AudioManager.stop(this,"puzzleMusic");

                this.scene.start("Quiz15");

            }

        );
        

    }

    update(){

        if(Phaser.Input.Keyboard.JustDown(this.cursors.left!)){

            this.tryMove(0,-1);

        }

        else if(Phaser.Input.Keyboard.JustDown(this.cursors.right!)){

            this.tryMove(0,1);

        }

        else if(Phaser.Input.Keyboard.JustDown(this.cursors.up!)){

            this.tryMove(-1,0);

        }

        else if(Phaser.Input.Keyboard.JustDown(this.cursors.down!)){

            this.tryMove(1,0);

        }

    }

}