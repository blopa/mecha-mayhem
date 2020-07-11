import { Scene } from 'phaser';
import Room from '../sprites/Room';
import Hero from '../sprites/Hero';

class ControlRoomScene extends Scene {
    constructor() {
        super('ControlRoomScene');
    }

    preload() {
        // TODO
    }

    create() {
        this.laserRoom = new Room({
            scene: this,
            x: 250,
            y: 200,
            asset: 'room',
        });
        this.add.existing(this.laserRoom);

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
        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x741B47 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);
        // this.laserRoom = new Phaser.Geom.Rectangle(250, 200, 50, 50);
        // this.laserRoomFill = this.add.graphics({ fillStyle: { color: 0xC27BA0 } });
        // this.laserRoomFill.fillRectShape(this.laserRoom);
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
