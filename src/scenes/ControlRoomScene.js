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
            x: 600,
            y: 350,
            asset: 'room',
        });

        this.punchRoom = new Room({
            scene: this,
            x: 400,
            y: 200,
            asset: 'room',
        });

        this.add.existing(this.laserRoom);
        this.add.existing(this.punchRoom);

        this.hero = new Hero({
            scene: this,
            x: 400,
            y: 300,
            asset: 'hero',
        });
        this.add.existing(this.hero);

        this.scene.launch('RobotStageScene');

        // Shen stuff
        this.chargeLaserButton = this.input.keyboard.addKey('A');
        this.chargePunchButton = this.input.keyboard.addKey('S');

        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x4C1130 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);

        this.physics.world.enable(this.hero);
        this.physics.world.enable(this.laserRoom);
        this.physics.world.enable(this.punchRoom);

        this.laserChargeCounter = 0;
        this.laserChargeLimit = 1;
        this.laserChargeBar = this.add.rectangle(this.laserRoom.x + 25 + 5, this.laserRoom.y + 25, 10, 0);
        this.laserChargeBar.setFillStyle(0x00FF00);

        this.punchChargeCounter = 0;
        this.punchChargeLimit = 1;
        this.punchChargeBar = this.add.rectangle(this.punchRoom.x + 25 + 5, this.punchRoom.y + 25, 10, 0);
        this.punchChargeBar.setFillStyle(0x00FF00);

        this.text = this.add.text(275, 300, '');

        this.wall = this.add.rectangle(this.laserRoom.x - 25 + 25, this.laserRoom.y + 25 + 5 + 10, 50, 10).setFillStyle(0x741B47);

        this.physics.world.enable(this.wall, 1);

        this.physics.add.collider(this.hero, this.wall);

        // TODO pablo tests
        // const tilemap = this.make.tilemap({ key: 'stage_01' });
        // const tileset = tilemap.addTilesetImage('tileset', 'tilesetImage');
        // tilemap.createStaticLayer('background', tileset, 0, 150);
        // tilemap.createStaticLayer('details', tileset, 0, 150);
    }

    update(time, delta) {
        this.hero.update(time, delta);
        this.text.text = '';
        //arm laser
        if ((this.laserChargeCounter >= this.laserChargeLimit) && this.physics.overlap(this.hero, this.laserRoom)) {
            this.text.text = 'Laser ready!';
        } else if (this.physics.overlap(this.hero, this.laserRoom) && (this.chargeLaserButton.isDown)) {
            this.laserChargeCounter += 0.01;
            this.laserChargeBar.height = this.laserRoom.height * (this.laserChargeCounter / this.laserChargeLimit) * -1;
            this.text.text = 'Charging...';
        } else if (this.physics.overlap(this.hero, this.laserRoom)) {
            this.text.text = 'Hold A to charge laser';
        }
        //arm punch
        if ((this.punchChargeCounter >= this.punchChargeLimit) && this.physics.overlap(this.hero, this.punchRoom)) {
            this.text.text = 'Punch ready!';
        } else if (this.physics.overlap(this.hero, this.punchRoom) && (Phaser.Input.Keyboard.JustDown(this.chargePunchButton))) {
            this.punchChargeCounter += 0.1;
            this.punchChargeBar.height = this.punchRoom.height * (this.punchChargeCounter / this.punchChargeLimit) * -1;
            this.text.text = 'Charging...';
        } else if (this.physics.overlap(this.hero, this.punchRoom)) {
            this.text.text = 'Mash S to charge punch';
        }
        console.log(this.punchChargeCounter);
    }
}

export default ControlRoomScene;
