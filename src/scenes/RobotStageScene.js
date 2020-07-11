import { Scene } from 'phaser';
import Background from '../sprites/Background';
import Robot from '../sprites/Robot';

class RobotStageScene extends Scene {
    constructor() {
        super('RobotStageScene');
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
        this.add.existing(this.background);

        this.robot = new Robot({
            scene: this,
            x: 0,
            y: 6,
            asset: 'robot',
        }).setOrigin(0, 0);
        this.add.existing(this.robot);
    }

    update() {
        // TODO
    }
}

export default RobotStageScene;
