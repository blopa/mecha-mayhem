/* globals IS_DEV */
import Phaser from 'phaser';

export default {
    type: Phaser.AUTO,
    parent: 'content',
    width: 768,
    height: 432,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    localStorageName: 'mecha-mayhem-game',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            enableBody: true,
            debug: IS_DEV,
        },
    },
};
