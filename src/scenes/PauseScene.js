import { Scene } from 'phaser';
import WebFont from 'webfontloader';

class PauseScene extends Scene {
    constructor() {
        super('PauseScene');
    }

    preload() {

    }

    create() {
        this.pauseButton = this.input.keyboard.addKey('P');
        this.add.sprite(384, 216, 'pause').setDepth(100);
    }

    update() {
        console.log('Pause scene loaded');
        if (Phaser.Input.Keyboard.JustDown(this.pauseButton)) {
            this.scene.resume('ControlRoomScene');
            this.scene.resume('RobotStageScene');
            this.scene.stop();
        }
    }
}

export default PauseScene;
