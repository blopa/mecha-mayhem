import Phaser, { GameObjects, Scene } from 'phaser';
import Room from '../sprites/Room';
import Hero from '../sprites/Hero';
import DecorationWire from '../sprites/DecorationWire';
import RedButton from '../sprites/RedButton';
import { ROBOT_STAGE_LAYOUT_DATA_KEY, ROBOT_STAGE_MAP_DATA_KEY } from '../constants';
import Crank from '../sprites/Crank';

class ControlRoomScene extends Scene {
    constructor() {
        super('ControlRoomScene');
    }

    mainThemeMusic = {
        stop: () => {},
    }

    init(data) {
        this.data.set(ROBOT_STAGE_LAYOUT_DATA_KEY, data.data);
        this.data.set(ROBOT_STAGE_MAP_DATA_KEY, data.map);
    }

    preload() {
        // TODO
    }

    create() {
        this.laserRoom = new Room({
            scene: this,
            x: 720,
            y: 200,
            asset: 'invisible',
        });

        this.punchRoom = new Room({
            scene: this,
            x: 680,
            y: 370,
            asset: 'invisible',
        });

        this.shieldRoom = new Room({
            scene: this,
            x: 110,
            y: 240,
            asset: 'invisible',
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

        this.roomTerminal = new GameObjects.Image(
            this,
            this.shieldRoom.x - 38,
            this.shieldRoom.y - 10,
            'terminal'
        ).setOrigin(0, 0).setDepth(10);
        this.add.existing(this.roomTerminal);

        this.scene.launch(
            'RobotStageScene',
            this.data.get(ROBOT_STAGE_LAYOUT_DATA_KEY)
        );

        // Shen stuff
        this.pauseButton = this.input.keyboard.addKey('P');
        this.chargeLaserButton = this.input.keyboard.addKey('SPACE');
        this.chargePunchButton = this.input.keyboard.addKey('SPACE');
        this.shieldSequenceLetters =
            ['q', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
                .map((letter) => letter.toUpperCase());
        // this.shieldSequenceButtons = this.input.keyboard.addKeys(this.shieldSequenceLetters, true);
        this.shieldSequence = this.pickLetters();
        this.shieldSequenceIndex = 0;

        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x2c1e31 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);

        // TODO pablo tests
        const tilemap = this.make.tilemap({ key: this.data.get(ROBOT_STAGE_MAP_DATA_KEY) });
        const tileset = tilemap.addTilesetImage('tileset', 'tilesetImage');
        const layer1 = tilemap.createStaticLayer('background', tileset, 0, 128);
        const layer2 = tilemap.createStaticLayer('details', tileset, 0, 128);
        layer1.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.hero, layer1);
        layer2.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.hero, layer2);
        const redWire = new DecorationWire({
            scene: this,
            x: 700,
            y: 357,
            type: 'red',
            frame: 'red_wire_01',
        });
        this.add.existing(redWire);
        const greenWire = new DecorationWire({
            scene: this,
            x: 0,
            y: 380,
            type: 'green',
            frame: 'green_wire_01',
        }).setScale(0.2);
        this.add.existing(greenWire);

        this.laserCrank = new Crank({
            scene: this,
            x: this.laserRoom.x - 17,
            y: this.laserRoom.y - 7,
            frame: 'crank_idle_01',
        });
        this.add.existing(this.laserCrank);

        const punchRedButton = new RedButton({
            scene: this,
            x: 663,
            y: 380,
            frame: 'red_button_01',
        });
        this.add.existing(punchRedButton);

        this.physics.world.enable(this.hero);
        this.hero.body.setCollideWorldBounds();
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
        this.shieldRoomText = this.add.text(this.shieldRoom.x - 4, this.shieldRoom.y, '').setDepth(10);
        this.counter = 0;
        // SFX
        // this.laserChargeSfx = this.sound.add('laser_charge_sfx');
        this.laserChargeSfx = this.sound.add('crank_sfx');
        this.laserChargeSfxReadyToPlay = true;
        this.laserChargeCompleteSfx = this.sound.add('laser_charge_complete_sfx');
        this.punchChargeSfx = this.sound.add('punch_charge_sfx');
        this.punchChargeCompleteSfx = this.sound.add('punch_charge_complete_sfx');
        this.shieldChargeCorrectKeySfx = this.sound.add('shield_charge_correct_key_sfx');
        this.shieldChargeWrongKeySfx = this.sound.add('shield_charge_wrong_key_sfx');
        this.shieldChargeCompleteSfx = this.sound.add('shield_charge_complete_sfx');
        // battery
        this.laserBattery = this.add.sprite(this.laserRoom.x, this.laserRoom.y - 21, 'battery').setDepth(15);
        this.laserBatteryIndex = 0;
        this.punchBattery = this.add.sprite(this.punchRoom.x, this.punchRoom.y - 21, 'battery').setDepth(15);
        this.punchBatteryIndex = 0;
        this.shieldBattery = this.add.sprite(this.shieldRoom.x, this.shieldRoom.y - 21, 'battery').setDepth(15);
        this.shieldBatteryIndex = 0;
        // music
        this.mainThemeMusic = this.sound.add(
            'main_theme_music',
            {
                volume: 0.3,
                loop: true,
            }
        );
        this.mainThemeMusic.play();
    }

    update(time, delta) {
        // pause
        if ((Phaser.Input.Keyboard.JustDown(this.pauseButton)) && (window.inGameActions.pauseFunctionality)) {
            this.scene.launch('PauseScene');
            this.scene.pause('RobotStageScene');
            this.scene.pause();
        }
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
                this.laserCrank.setAnimation('stop');
                this.laserChargeSfx.stop();
                this.laserChargeCompleteSfx.play();
            } else if (this.physics.overlap(this.hero, this.laserRoom) && (this.chargeLaserButton.isDown)) {
                this.laserChargeCounter += 0.01;
                newText = 'Charging...';
                this.hero.setAnimation('action');
                this.laserCrank.setAnimation('idle');
                if (this.laserChargeSfxReadyToPlay) {
                    this.laserChargeSfxReadyToPlay = false;
                    this.laserChargeSfx.play();
                }
                this.laserBatteryIndex = Math.round((this.laserChargeCounter / this.laserChargeLimit) * 10);
                if (this.laserBatteryIndex < 11) {
                    this.laserBattery.setFrame(this.laserBatteryIndex);
                }
            } else if (this.physics.overlap(this.hero, this.laserRoom)) {
                newText = 'Hold SPACE to \ncharge laser';
                this.laserCrank.setAnimation('stop');
            }
            if (!this.chargeLaserButton.isDown) {
                this.laserChargeSfxReadyToPlay = true;
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
                this.punchChargeCompleteSfx.play();
            } else if (this.physics.overlap(this.hero, this.punchRoom) && (Phaser.Input.Keyboard.JustDown(this.chargePunchButton))) {
                // https://stackoverflow.com/a/11832950/4307769
                this.punchChargeCounter = Math.round((this.punchChargeCounter + 0.1 + Number.EPSILON) * 100) / 100;
                newText = 'Charging...';
                this.hero.setAnimation('action');
                this.punchChargeSfx.play();
                this.punchBatteryIndex = Math.round((this.punchChargeCounter / this.punchChargeLimit) * 10);
                if (this.punchBatteryIndex < 11) {
                    this.punchBattery.setFrame(this.punchBatteryIndex);
                }
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
                this.shieldChargeCorrectKeySfx.stop();
                this.shieldChargeCompleteSfx.play();
            } else if (this.physics.overlap(this.hero, this.shieldRoom) && (this.shieldSequenceKeyIsDown())) {
                this.shieldChargeCounter += 0.25;
                newText = 'Charging...';
                this.hero.setAnimation('action');
                this.shieldChargeCorrectKeySfx.play();
                this.shieldBatteryIndex = Math.round((this.shieldChargeCounter / this.shieldChargeLimit) * 10);
                if (this.shieldBatteryIndex < 11) {
                    this.shieldBattery.setFrame(this.shieldBatteryIndex);
                }
            } else if (this.physics.overlap(this.hero, this.shieldRoom) && (this.shieldIncorrectSequenceKeyIsDown())) {
                this.shieldChargeWrongKeySfx.play();
            } else if (this.physics.overlap(this.hero, this.shieldRoom)) {
                newText = 'Enter letters to \ncharge shield';
            }
        }

        // RESET CONTROLLERS
        if (this.readyToResetLaser && !window.inGameActions.willShootLaser) {
            this.readyToResetLaser = false;
            this.laserChargeCounter = 0;
            this.laserBattery.setFrame(0);
        }

        if (this.readyToResetPunch && !window.inGameActions.willDestroyBuilding) {
            this.readyToResetPunch = false;
            this.punchChargeCounter = 0;
            this.punchBattery.setFrame(0);
        }

        if (this.readyToResetShield && !window.inGameActions.willShield) {
            this.readyToResetShield = false;
            this.shieldChargeCounter = 0;
            this.shieldBattery.setFrame(0);
            this.shieldSequence = this.pickLetters();
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
        if (this.shieldSequence.length > 0) {
            this.shieldRoomText.text = this.shieldSequence[this.shieldSequenceIndex];
        } else {
            this.shieldRoomText.text = '';
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
        const key = this.input.keyboard.addKey(this.shieldSequence[0]);
        if (Phaser.Input.Keyboard.JustDown(key)) {
            this.shieldSequence.splice(0, 1);
            check = true;
        }
        return check;
    }

    shieldIncorrectSequenceKeyIsDown() {
        let check = false;
        const shieldSequenceLettersCopy = this.shieldSequenceLetters.slice(0);
        const currentLetter = this.shieldSequence[0];
        const letterIndex = shieldSequenceLettersCopy.indexOf(currentLetter);
        shieldSequenceLettersCopy.splice(letterIndex, 1);
        for (let i = 0; i < shieldSequenceLettersCopy.length; i++) {
            const key = this.input.keyboard.addKey(shieldSequenceLettersCopy[i]);
            if (Phaser.Input.Keyboard.JustDown(key)) {
                check = true;
            }
        }
        return check;
    }
}

export default ControlRoomScene;
