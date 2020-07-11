import { GameObjects } from 'phaser';
import { ROOM_DEPTH } from '../constants';

class Room extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
        this.setDepth(ROOM_DEPTH);
    }
}

export default Room;
