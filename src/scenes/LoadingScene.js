import { Scene } from 'phaser';

class LoadingScene extends Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {
        // Images
        this.load.image('background', 'assets/images/background.png');
        this.load.image('background_buildings', 'assets/images/background_buildings.png');
        this.load.image('background_clouds_01', 'assets/images/background_clouds_01.png');
        this.load.image('background_clouds_02', 'assets/images/background_clouds_02.png');
        this.load.image('control_room', 'assets/images/control_room.png');
        this.load.image('robot', 'assets/images/robot.png');
        this.load.image('room', 'assets/images/room.png');
        this.load.image('invisible', 'assets/images/invisible.png');
        // this.load.image('missile', 'assets/images/missile.png');
        this.load.image('jet', 'assets/images/jet.png');
        this.load.image('building', 'assets/images/building.png');
        this.load.image('tilesetImage', 'assets/images/tileset.png');

        // Atlas
        this.load.atlas('hero', 'assets/images/hero.png', 'assets/atlas/hero_atlas.json');
        this.load.atlas('green_wire', 'assets/images/green_wire.png', 'assets/atlas/green_wire.json');
        this.load.atlas('red_wire', 'assets/images/red_wire.png', 'assets/atlas/red_wire.json');
        this.load.atlas('robot_sprite', 'assets/images/robot_sprite.png', 'assets/atlas/robot_sprite.json');
        this.load.atlas('red_button', 'assets/images/red_button.png', 'assets/atlas/red_button.json');
        this.load.atlas('dino', 'assets/images/dino.png', 'assets/atlas/dino.json');

        // Map
        this.load.tilemapTiledJSON('stage_01', 'assets/images/stage_01.json');

        // Audio
        this.load.audio('robot_laser_sfx', 'assets/audio/robot_laser_sfx.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/laser_charge.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/laser_charge_complete.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/punch_charge.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/punch_charge_complete.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/shield_charge_correct_key.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/shield_charge_wrong_key.mp3');
        this.load.audio('robot_laser_sfx', 'assets/audio/shield_charge_complete.mp3');
    }

    create() {
        this.scene.start('MainMenuScene');
    }

    update() {
        // TODO
    }
}

export default LoadingScene;
