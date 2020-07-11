import { GameObjects } from 'phaser';

class Background extends GameObjects.Image {
    constructor({
        scene,
        x,
        y,
        asset,
        frame,
        depth = 0,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(depth);
    }
}

export default Background;
