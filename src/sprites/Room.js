import { GameObjects } from 'phaser';

class Room extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
        this.setDepth(10);
    }
}

export default Room;
