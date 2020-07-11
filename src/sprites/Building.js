import { GameObjects } from 'phaser';
import { BUILDING_DEPTH } from '../constants';

class Building extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'building',
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(BUILDING_DEPTH);
    }
}

export default Building;
