import { Scene } from 'phaser';
import Hero from '../sprites/Hero';
// import Background from '../sprites/Background';

class ControlRoomScene extends Scene {
    constructor() {
        super('ControlRoomScene');
    }

    preload() {
        // TODO
    }

    create() {
        // this.background = new Background({
        //     scene: this,
        //     x: 0,
        //     y: 0,
        //     asset: 'control_room',
        // }).setOrigin(0, 0);
        // this.add.existing(this.background);

        this.hero = new Hero({
            scene: this,
            x: 200,
            y: 200,
            asset: 'hero',
        });
        this.add.existing(this.hero);

        this.scene.launch('RobotStageScene');

        //Shen stuff
        this.chargeLaserButton = this.input.keyboard.addKey('A');
        this.controlRoomBackground = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomBackgroundFill = this.add.graphics({ fillStyle: { color: 0x741B47 } });
        this.controlRoomBackgroundFill.fillRectShape(this.controlRoomBackground);
        this.laserRoom = new Phaser.Geom.Rectangle(250, 200, 50, 50);
        this.laserRoomFill = this.add.graphics({ fillStyle: { color: 0xC27BA0 } });
        this.laserRoomFill.fillRectShape(this.laserRoom);
    }

    update(time, delta) {
        this.hero.update(time, delta);
        if (this.chargeLaserButton.isDown) {
            console.log('Charging...');
        }
        this.dummy = this.hero.getBounds();
    }
}

export default ControlRoomScene;
