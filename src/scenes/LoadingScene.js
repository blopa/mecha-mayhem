import { Scene } from 'phaser';

class LoadingScene extends Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {
        // load your assets
        this.load.image('christmas_tree', 'assets/images/christmas_tree.png');
        this.load.image('background', 'assets/images/background.jpg');
    }

    create() {
        this.scene.start('MainMenuScene');
    }

    update() {
        // TODO
    }
}

export default LoadingScene;
