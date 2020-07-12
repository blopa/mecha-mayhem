import { Scene } from 'phaser';
import Background from '../sprites/Background';
import Robot from '../sprites/Robot';
import {
    BACKGROUND_DEPTH,
    BUILDING, BUILDINGS_BACKGROUND_DEPTH, DINO,
    JET,
    MISSILE,
    NOTHING, PARALLAX_BACKGROUND_DEPTH,
    ROBOT_STAGE_CURRENT_POSITION_DATA_KEY,
    ROBOT_STAGE_LAYOUT_DATA_KEY,
} from '../constants';
import ParallaxBackground from '../sprites/ParallaxBackground';
import { startRobotMovement, renderStageEnemies } from '../utils';

class RobotStageScene extends Scene {
    constructor() {
        super('RobotStageScene');
    }

    enemies = [];

    init() {
        const data = [
            NOTHING,
            NOTHING,
            NOTHING,
            // JET,
            // DINO,
            NOTHING,
            NOTHING,
            NOTHING,
            NOTHING,
            JET,
            NOTHING,
            NOTHING,
            // MISSILE,
            DINO,
            NOTHING,
            NOTHING,
            BUILDING,
            NOTHING,
        ];

        this.data.set(ROBOT_STAGE_LAYOUT_DATA_KEY, data);
        this.data.set(ROBOT_STAGE_CURRENT_POSITION_DATA_KEY, 0);
    }

    preload() {
        // TODO
    }

    create() {
        this.background = new Background({
            scene: this,
            x: 0,
            y: 0,
            asset: 'background',
            depth: BACKGROUND_DEPTH,
        }).setOrigin(0, 0);
        this.add.existing(this.background);

        this.buildingsBackground = new ParallaxBackground({
            scene: this,
            assets: ['background_buildings'],
            depth: BUILDINGS_BACKGROUND_DEPTH,
        });
        this.buildingsBackground.forEach((parallaxBackground) => {
            this.add.existing(parallaxBackground);
        });

        this.parallaxBackground = new ParallaxBackground({
            scene: this,
            depth: PARALLAX_BACKGROUND_DEPTH,
        });
        this.parallaxBackground.forEach((parallaxBackground) => {
            this.add.existing(parallaxBackground);
        });

        this.robot = new Robot({
            scene: this,
            x: 0,
            y: 30,
            asset: 'robot_sprite',
        }).setOrigin(0, 0);
        this.add.existing(this.robot);
        this.robot.setAnimation('idle');

        this::renderStageEnemies();
        this::startRobotMovement();
    }

    update(time, delta) {
        this.parallaxBackground.update(time, delta);
    }
}

export default RobotStageScene;
