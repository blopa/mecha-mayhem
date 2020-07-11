import { Scene } from 'phaser';
import Hero from '../sprites/Hero';
import Background from '../sprites/Background';

class ControlRoomScene extends Scene {
    constructor() {
        super('ControlRoomScene');
    }

    preload() {
        // TODO
    }

    create() {
        this.background = new Background({
            scene: this,
            x: 0,
            y: 0,
            asset: 'control_room',
        }).setOrigin(0, 0);
        this.add.existing(this.background);

        this.hero = new Hero({
            scene: this,
            x: 200,
            y: 200,
            asset: 'hero',
        });
        this.add.existing(this.hero);

        this.cameras.main.startFollow(this.hero);
        this.scene.launch('RobotStageScene');
    }

    update(time, delta) {
        this.hero.update(time, delta);
    }
}

export default ControlRoomScene;
