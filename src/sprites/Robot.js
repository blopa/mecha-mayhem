import { GameObjects } from 'phaser';
import { ROBOT_DEPTH } from '../constants';

class Robot extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
        this.setDepth(ROBOT_DEPTH);
    }
}

export default Robot;
