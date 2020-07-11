import { Scene } from 'phaser';

class LoadingScene extends Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('control_room', 'assets/images/control_room.png');
        this.load.image('robot', 'assets/images/robot.png');
        this.load.atlas('hero', 'assets/images/hero.png', 'assets/atlas/hero_atlas.json');
        // this.load.atlas('robot', `assets/images/hero.png`, `assets/atlas/robot_atlas.json`);
    }

    create() {
        this.scene.start('MainMenuScene');
    }

    update() {
        // TODO
    }
}

export default LoadingScene;
