import { GameObjects } from 'phaser';
import { ROOM_DEPTH } from '../constants';

class Room extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame, visible = true }) {
        super(scene, x, y, asset, frame);
        this.setDepth(ROOM_DEPTH);
        this.setVisible(visible);
    }
}

export default Room;
