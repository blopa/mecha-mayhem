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
            x: 450,
            y: 250,
            asset: 'room',
        });
        this.add.existing(this.laserRoom);

        this.hero = new Hero({
            scene: this,
            x: 100,
            y: 250,
            asset: 'hero',
        });
        this.add.existing(this.hero);

        this.scene.launch('RobotStageScene');

        // Shen stuff
        this.chargeLaserButton = this.input.keyboard.addKey('A');

        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x4C1130 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);

        this.physics.world.enable(this.hero);
        this.physics.world.enable(this.laserRoom);

        this.laserChargeCounter = 0;
        this.laserChargeLimit = 1;
        this.laserText = this.add.text(350, 300, '');

        this.laserChargeBar = this.add.rectangle(this.laserRoom.x + 25 + 5, this.laserRoom.y + 25, 10, 0);
        this.laserChargeBar.setFillStyle(0x00FF00);

        this.wall = this.add.rectangle(this.laserRoom.x - 25 + 25, this.laserRoom.y + 25 + 5 + 10, 50, 10).setFillStyle(0x741B47);

        this.physics.world.enable(this.wall, 1);

        // this.wallGroup = this.physics.add.staticGroup(); - if we need a group for later

        this.physics.add.collider(this.hero, this.wall);

        // TODO pablo tests
        const tilemap = this.make.tilemap({ key: 'stage_01' });
        const tileset = tilemap.addTilesetImage('tileset', 'tilesetImage');
        tilemap.createStaticLayer('background', tileset, 0, 150);
        tilemap.createStaticLayer('details', tileset, 0, 150);
    }

    update(time, delta) {
        this.hero.update(time, delta);
        this.laserText.text = '';
        if (this.laserChargeCounter >= this.laserChargeLimit) {
            this.laserText.text = 'Laser ready!';
        } else if (this.physics.overlap(this.hero, this.laserRoom) && (this.chargeLaserButton.isDown)) {
            this.laserChargeCounter += 0.01;
            this.laserChargeBar.height = this.laserRoom.height * (this.laserChargeCounter / this.laserChargeLimit) * -1;
            this.laserText.text = 'Charging...';
        } else if (this.physics.overlap(this.hero, this.laserRoom)) {
            this.laserText.text = 'Hold A to charge laser';
        }
    }
}

export default ControlRoomScene;
