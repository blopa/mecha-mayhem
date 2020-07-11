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
    localStorageName: 'puppet-master',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            enableBody: true,
            debug: true,
        },
    },
};
