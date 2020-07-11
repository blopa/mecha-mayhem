import Phaser, { Scene } from 'phaser';
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

        // Shen stuff
        this.chargeLaserButton = this.input.keyboard.addKey('A');

        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x741B47 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);

        this.physics.world.enable(this.hero);
        this.physics.world.enable(this.laserRoom);

        this.laserChargeCounter = 0;
        this.laserChargeLimit = 1;

        this.laserChargeBar = this.add.rectangle(this.laserRoom.x + 25 + 5, this.laserRoom.y + 25, 10, 0);
        this.laserChargeBar.setFillStyle(0x00FF00);
    }

    update(time, delta) {
        this.hero.update(time, delta);
        if (this.laserChargeCounter >= this.laserChargeLimit) {
            console.log('Laser ready!')
        } else if (this.physics.overlap(this.hero, this.laserRoom) && (this.chargeLaserButton.isDown)) {
            this.laserChargeCounter += 0.01;
            this.laserChargeBar.height = this.laserRoom.height * (this.laserChargeCounter/this.laserChargeLimit) * - 1;
            console.log('Charging...');
        }
    }

    foobar() {
        return this.laserChargeCounter;
    }
}

export default ControlRoomScene;
