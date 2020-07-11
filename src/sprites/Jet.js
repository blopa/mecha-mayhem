import { GameObjects } from 'phaser';
import { JET_DEPTH } from '../constants';

class Jet extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'jet',
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(JET_DEPTH);
    }
}

export default Jet;
