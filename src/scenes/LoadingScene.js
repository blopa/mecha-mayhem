/* globals IS_DEV */
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
        // this.load.image('jet', 'assets/images/jet.png');
        // this.load.image('building', 'assets/images/building.png');
        if (IS_DEV) {
            this.load.image('tilesetImage', 'assets/images/tileset.png');
        } else {
            this.load.image('tilesetImage', 'assets/images/stage_tileset.png');
        }
        this.load.image('selection_screen', 'assets/images/selection_screen.png');
        this.load.image('stage', 'assets/images/stage.png');
        this.load.image('game_logo', 'assets/images/game_logo.png');
        this.load.image('you_won_screen', 'assets/images/you_won_screen.png');
        this.load.image('game_over_screen', 'assets/images/game_over_screen.png');
        this.load.image('terminal', 'assets/images/terminal.png');
        this.load.image('pause', 'assets/images/pause.png');

        // Atlas
        this.load.atlas('hero', 'assets/images/hero.png', 'assets/atlas/hero_atlas.json');
        this.load.atlas('green_wire', 'assets/images/green_wire.png', 'assets/atlas/green_wire.json');
        this.load.atlas('red_wire', 'assets/images/red_wire.png', 'assets/atlas/red_wire.json');
        this.load.atlas('robot_sprite', 'assets/images/robot_sprite.png', 'assets/atlas/robot_sprite.json');
        this.load.atlas('red_button', 'assets/images/red_button.png', 'assets/atlas/red_button.json');
        this.load.atlas('dino', 'assets/images/dino.png', 'assets/atlas/dino.json');
        this.load.atlas('ufo', 'assets/images/ufo.png', 'assets/atlas/ufo.json');
        this.load.atlas('enemy_building', 'assets/images/enemy_building.png', 'assets/atlas/enemy_building.json');
        this.load.atlas('crank', 'assets/images/crank.png', 'assets/atlas/crank.json');

        // Spritesheet
        this.load.spritesheet('battery', 'assets/images/battery_spritesheet.png', { frameWidth: 48, frameHeight: 21 }, 11);

        // Map
        this.load.tilemapTiledJSON('stage_01', 'assets/images/stage_01.json');
        this.load.tilemapTiledJSON('stage_02', 'assets/images/stage_02.json');
        this.load.tilemapTiledJSON('stage_03', 'assets/images/stage_03.json');

        // Sound Effects
        this.load.audio('robot_laser_sfx', 'assets/audio/robot_laser_sfx.mp3');
        this.load.audio('laser_charge_sfx', 'assets/audio/laser_charge.mp3');
        this.load.audio('crank_sfx', 'assets/audio/crank_sfx.mp3');
        this.load.audio('laser_charge_complete_sfx', 'assets/audio/laser_charge_complete.mp3');
        this.load.audio('punch_charge_sfx', 'assets/audio/punch_charge.mp3');
        this.load.audio('punch_charge_complete_sfx', 'assets/audio/punch_charge_complete.mp3');
        this.load.audio('shield_charge_correct_key_sfx', 'assets/audio/shield_charge_correct_key.mp3');
        this.load.audio('shield_charge_wrong_key_sfx', 'assets/audio/shield_charge_wrong_key.mp3');
        this.load.audio('shield_charge_complete_sfx', 'assets/audio/shield_charge_complete.mp3');
        this.load.audio('robot_die_sfx', 'assets/audio/robot_die_sfx.mp3');
        this.load.audio('robot_shield_hit_sfx', 'assets/audio/robot_shield_hit_sfx.mp3');
        this.load.audio('robot_punch_sfx', 'assets/audio/robot_punch_sfx.mp3');
        this.load.audio('menu_selection', 'assets/audio/menu_selection.mp3');
        this.load.audio('hero_walking_sfx', 'assets/audio/hero_walking_sfx.mp3');
        this.load.audio('robot_walking_sfx', 'assets/audio/robot_walking_sfx.mp3');

        // Music
        this.load.audio('tutorial_theme_music', 'assets/audio/tutorial_theme_music.mp3');
        this.load.audio('main_theme_music', 'assets/audio/main_level_theme.mp3');
    }

    create() {
        this.scene.start('MainMenuScene');
    }

    update() {
        // TODO
    }
}

export default LoadingScene;
