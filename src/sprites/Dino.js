import { GameObjects } from 'phaser';
import { DINO_DEPTH } from '../constants';

class Dino extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'dino',
        frame,
        spriteKey = 'dino',
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(DINO_DEPTH);
        this.spriteKey = spriteKey;
    }
}

export default Dino;
