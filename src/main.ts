

import { Game, Types } from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 340,
    pixelArt:true,
    transparent:true,
    physics:{
        default:'arcade',
        arcade:{
            debug:true
        }
        
    },
    //parent: 'game-container',
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    scene: [PreloadScene,PlayScene]
};

export default new Game(config);


