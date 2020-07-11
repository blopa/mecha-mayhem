/* globals __DEV__ */
import { Scene } from 'phaser';
import Robot from '../sprites/Robot';
import Background from '../sprites/Background';

class GameScene extends Scene {
    constructor() {
        super('GameScene');
    }

    init() {
        // TODO
    }

    preload() {
        // TODO
    }

    create() {
        this.background = new Background({
            scene: this,
            x: 0,
            y: 0,
            asset: 'background',
        }).setOrigin(0, 0);

        this.christmastree = new Robot({
            scene: this,
            x: 400,
            y: 200,
            asset: 'robot',
        }).setScale(3);

        this.add.existing(this.background);
        this.add.existing(this.christmastree);

        // this.cameras.main.startFollow(this.movablechristmastree);
    }

    update(time, delta) {
        // TODO
    }
}

export default GameScene;
