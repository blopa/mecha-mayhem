import Phaser, { Scene } from 'phaser';
import Room from '../sprites/Room';
import Hero from '../sprites/Hero';
import DecorationWire from '../sprites/DecorationWire';
import RedButton from '../sprites/RedButton';

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
            x: 720,
            y: 200,
            asset: 'room',
        });

        this.punchRoom = new Room({
            scene: this,
            x: 680,
            y: 370,
            asset: 'room',
        });

        this.shieldRoom = new Room({
            scene: this,
            x: 110,
            y: 240,
            asset: 'room',
        });

        this.add.existing(this.laserRoom);
        this.add.existing(this.punchRoom);
        this.add.existing(this.shieldRoom);

        this.hero = new Hero({
            scene: this,
            x: 400,
            y: 300,
            asset: 'hero',
        });
        this.add.existing(this.hero);

        this.scene.launch('RobotStageScene');

        // Shen stuff
        this.chargeLaserButton = this.input.keyboard.addKey('SPACE');
        this.chargePunchButton = this.input.keyboard.addKey('SPACE');
        this.shieldSequenceLetters =
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
                .map((letter) => letter.toUpperCase());
        // this.shieldSequenceButtons = this.input.keyboard.addKeys(this.shieldSequenceLetters, true);
        this.shieldSequence = this.pickLetters();
        this.shieldSequenceIndex = 0;

        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x2c1e31 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);

        // TODO pablo tests
        const tilemap = this.make.tilemap({ key: 'stage_01' });
        const tileset = tilemap.addTilesetImage('tileset', 'tilesetImage');
        const layer1 = tilemap.createStaticLayer('background', tileset, 0, 128);
        const layer2 = tilemap.createStaticLayer('details', tileset, 0, 128);
        layer1.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.hero, layer1);
        layer2.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.hero, layer2);
        const redWire = new DecorationWire({
            scene: this,
            x: 739,
            y: 408,
            type: 'red',
            frame: 'red_wire_01',
        });
        this.add.existing(redWire);
        const greenWire = new DecorationWire({
            scene: this,
            x: 0,
            y: 402,
            type: 'green',
            frame: 'green_wire_01',
        });
        this.add.existing(greenWire);

        const laserRedButton = new RedButton({
            scene: this,
            x: 700,
            y: 200,
            frame: 'red_button_01',
        });
        this.add.existing(laserRedButton);
        const punchRedButton = new RedButton({
            scene: this,
            x: 660,
            y: 370,
            frame: 'red_button_01',
        });
        this.add.existing(punchRedButton);

        this.physics.world.enable(this.hero);
        this.physics.world.enable(this.laserRoom);
        this.physics.world.enable(this.punchRoom);
        this.physics.world.enable(this.shieldRoom);

        this.laserChargeCounter = 0;
        this.laserChargeLimit = 1;
        this.laserChargeBar = this.add.rectangle(this.laserRoom.x + 25 + 5, this.laserRoom.y + 25, 10, 0);
        this.laserChargeBar.setFillStyle(0x00FF00);
        this.readyToResetLaser = false;

        this.punchChargeCounter = 0;
        this.punchChargeLimit = 1;
        this.punchChargeBar = this.add.rectangle(this.punchRoom.x + 25 + 5, this.punchRoom.y + 25, 10, 0);
        this.punchChargeBar.setFillStyle(0x00FF00);
        this.readyToResetPunch = false;

        this.shieldChargeCounter = 0;
        this.shieldChargeLimit = 1;
        this.shieldChargeBar = this.add.rectangle(this.shieldRoom.x + 25 + 5, this.shieldRoom.y + 25, 10, 0);
        this.shieldChargeBar.setFillStyle(0x00FF00);
        this.readyToResetShield = false;

        this.text = this.add.text(50, 370, '');
        this.shieldRoomText = this.add.text(this.shieldRoom.x - 5, this.shieldRoom.y - 20, '').setDepth(10);
        this.counter = 0;
    }

    update(time, delta) {
        this.counter += 1;
        this.hero.update(time, delta);
        let newText = '';

        // ACTION CONTROLLERS
        // laser
        if (!this.readyToResetLaser) {
            if (this.physics.overlap(this.hero, this.laserRoom) && (this.laserChargeCounter >= this.laserChargeLimit)) {
                newText = 'Laser ready!';
                const { inGameActions } = window;
                const { willShootLaser } = inGameActions;
                if (!willShootLaser) {
                    window.inGameActions.willShootLaser = true;
                }
                this.readyToResetLaser = true;
                this.hero.setAnimation('idle');
            } else if (this.physics.overlap(this.hero, this.laserRoom) && (this.chargeLaserButton.isDown)) {
                this.laserChargeCounter += 0.01;
                this.laserChargeBar.height = this.laserRoom.height * (this.laserChargeCounter / this.laserChargeLimit) * -1;
                newText = 'Charging...';
                this.hero.setAnimation('action');
            } else if (this.physics.overlap(this.hero, this.laserRoom)) {
                newText = 'Hold SPACE to \ncharge laser';
            }
        }

        // punch
        if (!this.readyToResetPunch) {
            if ((this.punchChargeCounter >= this.punchChargeLimit) && this.physics.overlap(this.hero, this.punchRoom)) {
                newText = 'Punch ready!';
                const { inGameActions } = window;
                const { willDestroyBuilding } = inGameActions;
                if (!willDestroyBuilding) {
                    window.inGameActions.willDestroyBuilding = true;
                }
                this.readyToResetPunch = true;
                this.hero.setAnimation('idle');
            } else if (this.physics.overlap(this.hero, this.punchRoom) && (Phaser.Input.Keyboard.JustDown(this.chargePunchButton))) {
                // https://stackoverflow.com/a/11832950/4307769
                this.punchChargeCounter = Math.round((this.punchChargeCounter + 0.1 + Number.EPSILON) * 100) / 100;
                this.punchChargeBar.height = this.punchRoom.height * (this.punchChargeCounter / this.punchChargeLimit) * -1;
                newText = 'Charging...';
                this.hero.setAnimation('action');
            } else if (this.physics.overlap(this.hero, this.punchRoom)) {
                newText = 'Mash SPACE to \ncharge punch';
            }
        }

        // shield
        if (!this.readyToResetShield) {
            if ((this.shieldChargeCounter >= this.shieldChargeLimit) && this.physics.overlap(this.hero, this.shieldRoom)) {
                newText = 'Shield ready!';
                const { inGameActions } = window;
                const { willShield } = inGameActions;
                if (!willShield) {
                    window.inGameActions.willShield = true;
                }
                this.readyToResetShield = true;
                this.hero.setAnimation('idle');
            } else if (this.physics.overlap(this.hero, this.shieldRoom) && (this.shieldSequenceKeyIsDown())) {
                this.shieldChargeCounter += 0.25;
                this.shieldChargeBar.height = this.shieldRoom.height * (this.shieldChargeCounter / this.shieldChargeLimit) * -1;
                newText = 'Charging...';
                this.hero.setAnimation('action');
            } else if (this.physics.overlap(this.hero, this.shieldRoom)) {
                newText = 'Enter letters to \ncharge shield';
            }
        }

        // RESET CONTROLLERS
        if (this.readyToResetLaser && !window.inGameActions.willShootLaser) {
            this.readyToResetLaser = false;
            this.laserChargeCounter = 0;
            this.laserChargeBar.height = 0;
        }

        if (this.readyToResetPunch && !window.inGameActions.willDestroyBuilding) {
            this.readyToResetPunch = false;
            this.punchChargeCounter = 0;
            this.punchChargeBar.height = 0;
        }

        if (this.readyToResetShield && !window.inGameActions.willShield) {
            this.readyToResetShield = false;
            this.shieldChargeCounter = 0;
            this.shieldChargeBar.height = 0;
        }

        if (newText !== this.text.text) {
            this.text.text = newText;
        }

        this.displayShieldSequence();
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    displayShieldSequence() {
        this.shieldRoomText.text = this.shieldSequence[this.shieldSequenceIndex];
        if (this.counter % 20 === 0) {
            this.shieldSequenceIndex += 1;
        }
        if (this.shieldSequenceIndex > this.shieldSequence.length) {
            this.shieldSequenceIndex = 0;
        }
    }

    pickLetters() {
        const times = 4;
        const tempArray = [];
        for (let i = 0; i < times; i++) {
            tempArray.push(this.shieldSequenceLetters[Math.floor(Math.random() * this.shieldSequenceLetters.length)]);
        }
        return tempArray;
    }

    shieldSequenceKeyIsDown() {
        let check = false;
        for (let i = 0; i < this.shieldSequence.length; i++) {
            const key = this.input.keyboard.addKey(this.shieldSequence[i]);
            if (key.isDown) {
                this.shieldSequence.splice(i, 1);
                check = true;
            }
        }
        return check;
    }
}

export default ControlRoomScene;
