/* globals VERSION */
/* globals IS_DEV */
import { GameObjects, Scene } from 'phaser';
import Background from '../sprites/Background';
import {BUILDING, DINO, GAME_JSON_DATA_KEY, JET, NOTHING} from '../constants';
import DecorationWire from '../sprites/DecorationWire';
import stages from '../../assets/stages/stages.json';
import HtmlFileInput from '../HtmlFileInput';
import {isset} from "../utils";

class MainMenuScene extends Scene {
    constructor() {
        super('MainMenuScene');
    }

    enemies = [];

    init(data) {
        // makes sure the values are all set to false
        window.inGameActions = {
            willDuck: false,
            willShootLaser: false,
            willShield: false,
            willDestroyBuilding: false,
        };

        if (isset(data)) {
            this.data.set(GAME_JSON_DATA_KEY, data);
        }
    }

    preload() {
        // TODO
    }

    create() {
        this.mainTheme = this.sound.add(
            'tutorial_theme_music',
            {
                volume: 0.3,
                loop: true,
            }
        );
        this.mainTheme.play();
        this.menuSelection = this.sound.add(
            'menu_selection',
            { volume: 0.1 }
        );

        this.background = new Background({
            scene: this,
            x: 0,
            y: 0,
            asset: 'selection_screen',
        }).setOrigin(0, 0);
        this.add.existing(this.background);

        this.gameLogo = new GameObjects.Image(
            this, 90, 15, 'game_logo'
        ).setOrigin(0, 0);
        this.add.existing(this.gameLogo);

        this.add.text(
            610,
            400,
            `v${VERSION}`
        ).setDepth(1000);

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
            y: 345,
            type: 'green',
            frame: 'green_wire_01',
        });
        this.add.existing(greenWire);

        const stagesData = this.data.get(GAME_JSON_DATA_KEY) || stages;
        this.createStages(stagesData, false, IS_DEV);
    }

    addEndlessStage = () => {
        const stageSelectionImage = new GameObjects.Image(
            this,
            100,
            180,
            'stage'
        );
        this.add.existing(stageSelectionImage);
        stageSelectionImage.setInteractive();
        const text = this.add.text(
            68,
            170,
            'endless'
        );

        stageSelectionImage.on('pointerup', () => {
            this.mainTheme.stop();
            this.scene.start('ControlRoomScene', []);
        });

        stageSelectionImage.on('pointerover', () => {
            this.menuSelection.play();
            stageSelectionImage.setScale(0.98);
            text.setScale(0.9);
        });

        stageSelectionImage.on('pointerout', () => {
            stageSelectionImage.setScale(1);
            text.setScale(1);
        });
    }

    addFileInput = () => {
        const stageSelectionImage = new GameObjects.Image(
            this,
            100,
            180,
            'stage'
        );
        this.add.existing(stageSelectionImage);
        stageSelectionImage.setInteractive();
        const text = this.add.text(
            68,
            170,
            'upload\nstages'
        );

        const fileInput = new HtmlFileInput({
            scene: this,
            spriteKey: 'file-input',
        });
        stageSelectionImage.on('pointerup', () => {
            // TODO
            fileInput.textfield.onchange = (e) => {
                const reader = new FileReader();
                reader.addEventListener('load', (event) => {
                    const result = JSON.parse(reader.result);
                    let cancel = false;
                    result.forEach((data) => {
                        if (!isset(data.data)) {
                            cancel = true;
                        }
                    });

                    if (!cancel) {
                        this.mainTheme.stop();
                        this.scene.start('MainMenuScene', result);
                        return;
                    }

                    window.alert('Sorry, your JSON is not valid');
                });
                reader.readAsText(e.target.files[0]);
            };
            fileInput.textfield.click();
        });

        stageSelectionImage.on('pointerover', () => {
            this.menuSelection.play();
            stageSelectionImage.setScale(0.98);
            text.setScale(0.9);
        });

        stageSelectionImage.on('pointerout', () => {
            stageSelectionImage.setScale(1);
            text.setScale(1);
        });
    }

    createStages = (stageData, addEndless, addOwnStages) => {
        let posX = 100;
        let posY = 180;
        let max = 4;

        if (addEndless || addOwnStages) {
            posX += 140;
            max = 3;
            if (addEndless) {
                this.addEndlessStage();
            } else if (addOwnStages) {
                this.addFileInput();
            }
        }

        stageData.forEach((data, index) => {
            const stageSelectionImage = new GameObjects.Image(
                this,
                posX,
                posY,
                'stage'
            );
            this.add.existing(stageSelectionImage);
            stageSelectionImage.setInteractive();
            const text = this.add.text(
                posX - 30,
                posY - 10,
                `stage ${index + 1}`
            );

            stageSelectionImage.on('pointerup', () => {
                this.mainTheme.stop();
                this.scene.start('ControlRoomScene', data);
            });

            stageSelectionImage.on('pointerover', () => {
                this.menuSelection.play();
                stageSelectionImage.setScale(0.98);
                text.setScale(0.9);
            });

            stageSelectionImage.on('pointerout', () => {
                stageSelectionImage.setScale(1);
                text.setScale(1);
            });

            if (index === max) {
                posX = 100;
                posY += 140;
            } else {
                posX += 140;
            }
        });
    }

    update() {
        // TODO
    }
}

export default MainMenuScene;
