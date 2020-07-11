import { Scene } from 'phaser';

class MainMenuScene extends Scene {
    constructor() {
        super('MainMenuScene');
    }

    preload() {
        // TODO
    }

    create() {
        this.scene.start('GameScene');
    }

    update() {
        // TODO
    }
}

export default MainMenuScene;
