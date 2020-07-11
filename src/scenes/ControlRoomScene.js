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
            x: 700,
            y: 200,
            asset: 'room',
        });

        this.punchRoom = new Room({
            scene: this,
            x: 650,
            y: 350,
            asset: 'room',
        });

        this.shieldRoom = new Room({
            scene: this,
            x: 110,
            y: 225,
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
        this.shieldSequenceButtons = this.input.keyboard.addKeys('q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m');
        this.shieldSequenceLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
        this.shieldSequence = this.pickLetters();
        this.shieldSequenceIndex = 0;

        this.controlRoom = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
        this.controlRoomFill = this.add.graphics({ fillStyle: { color: 0x4C1130 } });
        this.controlRoomFill.fillRectShape(this.controlRoom);

        // TODO pablo tests
        const tilemap = this.make.tilemap({ key: 'stage_01' });
        const tileset = tilemap.addTilesetImage('tileset', 'tilesetImage');
        const layer1 = tilemap.createStaticLayer('background', tileset, 0, 150);
        const layer2 = tilemap.createStaticLayer('details', tileset, 0, 150);
        layer1.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.hero, layer1);
        layer2.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.hero, layer2);

        this.physics.world.enable(this.hero);
        this.physics.world.enable(this.laserRoom);
        this.physics.world.enable(this.punchRoom);
        this.physics.world.enable(this.shieldRoom);

        this.laserChargeCounter = 0;
        this.laserChargeLimit = 1;
        this.laserChargeBar = this.add.rectangle(this.laserRoom.x + 25 + 5, this.laserRoom.y + 25, 10, 0);
        this.laserChargeBar.setFillStyle(0x00FF00);

        this.punchChargeCounter = 0;
        this.punchChargeLimit = 1;
        this.punchChargeBar = this.add.rectangle(this.punchRoom.x + 25 + 5, this.punchRoom.y + 25, 10, 0);
        this.punchChargeBar.setFillStyle(0x00FF00);

        this.shieldChargeCounter = 0;
        this.shieldChargeLimit = 1;
        this.shieldChargeBar = this.add.rectangle(this.shieldRoom.x + 25 + 5, this.shieldRoom.y + 25, 10, 0);
        this.shieldChargeBar.setFillStyle(0x00FF00);

        this.text = this.add.text(275, 300, '');
        this.shieldRoomText = this.add.text(this.shieldRoom.x, this.shieldRoom.y, '').setDepth(10);
        this.counter = 0
    }

    update(time, delta) {
        this.counter += 1;
        this.hero.update(time, delta);
        this.text.text = '';
        //laser
        if ((this.laserChargeCounter >= this.laserChargeLimit) && this.physics.overlap(this.hero, this.laserRoom)) {
            this.text.text = 'Laser ready!';
        } else if (this.physics.overlap(this.hero, this.laserRoom) && (this.chargeLaserButton.isDown)) {
            this.laserChargeCounter += 0.01;
            this.laserChargeBar.height = this.laserRoom.height * (this.laserChargeCounter / this.laserChargeLimit) * -1;
            this.text.text = 'Charging...';
        } else if (this.physics.overlap(this.hero, this.laserRoom)) {
            this.text.text = 'Hold SPACE to charge laser';
        }
        //punch
        if ((this.punchChargeCounter >= this.punchChargeLimit) && this.physics.overlap(this.hero, this.punchRoom)) {
            this.text.text = 'Punch ready!';
        } else if (this.physics.overlap(this.hero, this.punchRoom) && (Phaser.Input.Keyboard.JustDown(this.chargePunchButton))) {
            this.punchChargeCounter += 0.1;
            this.punchChargeBar.height = this.punchRoom.height * (this.punchChargeCounter / this.punchChargeLimit) * -1;
            this.text.text = 'Charging...';
        } else if (this.physics.overlap(this.hero, this.punchRoom)) {
            this.text.text = 'Mash SPACE to charge punch';
        }
        //shield
        if ((this.shieldChargeCounter >= this.shieldChargeLimit) && this.physics.overlap(this.hero, this.shieldRoom)) {
            this.text.text = 'shield ready!';
        } else if (this.physics.overlap(this.hero, this.shieldRoom) && (this.shieldSequenceKeyIsDown())) {
            this.shieldChargeCounter += 0.25;
            this.shieldChargeBar.height = this.shieldRoom.height * (this.shieldChargeCounter / this.shieldChargeLimit) * -1;
            this.text.text = 'Charging...';
        } else if (this.physics.overlap(this.hero, this.shieldRoom)) {
            this.text.text = 'Enter letters to charge shield';
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
        if (this.counter % 20 == 0) {
            this.shieldSequenceIndex +=1    
        }
        if (this.shieldSequenceIndex > this.shieldSequence.length) {
            this.shieldSequenceIndex = 0
        }    
    }

    pickLetters() {
        var times = 4;
        var tempArray = [];
        for(var i=0; i < times; i++){
            tempArray.push(this.shieldSequenceLetters[Math.floor(Math.random() * this.shieldSequenceLetters.length)]);
        }
        return tempArray;
    }
    shieldSequenceKeyIsDown() {
        var check = false;
        for(let i = 0; i < this.shieldSequence.length; i++){
            var key = this.input.keyboard.addKey(this.shieldSequence[i])
            if (key.isDown) {
                this.shieldSequence.splice(i,1)
                check = true
            }
        }
        return check
    }
}

export default ControlRoomScene;
