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
        this.load.image('missile', 'assets/images/missile.png');
        this.load.image('jet', 'assets/images/jet.png');
        this.load.image('building', 'assets/images/building.png');
        this.load.image('tilesetImage', 'assets/images/tileset.png');

        // Atlas
        this.load.atlas('hero', 'assets/images/hero.png', 'assets/atlas/hero_atlas.json');
        this.load.atlas('robot_sprite', 'assets/images/robot_sprite.png', 'assets/atlas/robot_sprite.json');
        // this.load.atlas('robot', `assets/images/hero.png`, `assets/atlas/robot_atlas.json`);

        // Map
        this.load.tilemapTiledJSON('stage_01', 'assets/images/stage_01.json');
    }

    create() {
        this.scene.start('MainMenuScene');
    }

    update() {
        // TODO
    }
}

export default LoadingScene;
