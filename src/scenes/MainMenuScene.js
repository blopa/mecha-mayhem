import { Scene } from 'phaser';

class MainMenuScene extends Scene {
    constructor() {
        super('MainMenuScene');
    }

    preload() {
        // TODO
    }

    create() {
        this.scene.start('ControlRoomScene');
    }

    update() {
        // TODO
    }
}

export default MainMenuScene;
