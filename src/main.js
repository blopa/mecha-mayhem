import { Game as PhaserGame } from 'phaser';

import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';
import MainMenuScene from './scenes/MainMenuScene';
import GameScene from './scenes/GameScene';
import ControlRoomScene from './scenes/ControlRoomScene';
import RobotStageScene from './scenes/RobotStageScene';

import config from './config';

const gameConfig = Object.assign(config, {
    scene: [
        BootScene,
        LoadingScene,
        GameScene,
        MainMenuScene,
        ControlRoomScene,
        RobotStageScene,
    ],
});

class Game extends PhaserGame {
    constructor() {
        super(gameConfig);
    }
}

window.inGameActions = {
    willDuck: false,
    willShootLaser: false,
    willShield: false,
    willDestroyBuilding: false,
};

window.game = new Game();
