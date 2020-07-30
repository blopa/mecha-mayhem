import { GameObjects, Input } from 'phaser';
import GameGroup from './Prefabs/GameGroup';
import { simulateKeyEvent } from '../utils';
import { TOUCH_CONTROLS_DEPTH } from '../constants';

class TouchScreenControls extends GameGroup {
    constructor({
        scene,
        x = 0,
        y = 0,
        name,
        dPadAsset,
        actionButtonAsset,
        controlKeys = {},
    }) {
        const {
            LEFT,
            RIGHT,
            UP,
            DOWN,
            SPACE,
        } = Input.Keyboard.KeyCodes;

        const baseKeys = {
            d_pad_left: LEFT,
            d_pad_right: RIGHT,
            d_pad_up: UP,
            d_pad_down: DOWN,
            action_button: SPACE,
        };

        const keys = {
            ...baseKeys,
            ...controlKeys,
        };

        const children = [];
        [dPadAsset, actionButtonAsset]
            .forEach((asset) => {
                if (asset === dPadAsset) {
                    let angle = 0;
                    ['left', 'up', 'right', 'down'].forEach((dPadDirection) => {
                        const assetName = `${asset}_${dPadDirection}`;
                        const child = new GameObjects.Image(
                            scene,
                            x,
                            y,
                            asset
                        );
                        child.setOrigin(0, 0);
                        child.setName(assetName);
                        child.setAngle(angle);
                        child.setInteractive();
                        child.on('pointerdown', () => {
                            simulateKeyEvent(keys[assetName], 'down');
                        });
                        child.on('pointerup', () => {
                            simulateKeyEvent(keys[assetName], 'up');
                        });
                        child.on('pointerout', () => {
                            simulateKeyEvent(keys[assetName], 'up');
                        });
                        angle += 90;
                        children.push(child);
                    });
                } else {
                    const child = new GameObjects.Image(
                        scene,
                        x,
                        y,
                        asset
                    );
                    child.setOrigin(0, 0);
                    child.setName(asset);
                    child.setInteractive();
                    child.on('pointerdown', () => {
                        simulateKeyEvent(keys[asset], 'down');
                    });
                    child.on('pointerup', () => {
                        simulateKeyEvent(keys[asset], 'up');
                    });
                    child.on('pointerout', () => {
                        simulateKeyEvent(keys[asset], 'up');
                    });
                    children.push(child);
                }
            });

        super({
            scene,
            children,
            name,
        });

        this.setOrigin(0, 0);
        this.setDepth(TOUCH_CONTROLS_DEPTH);
        this.setControlsPositions();
    }

    setControlsPositions() {
        const { width, height } = this.scene.cameras.main;
        const paddingX = 20;
        const paddingY = 60;
        this.getChildren().forEach((child) => {
            const { name } = child;
            child.setX(paddingX);
            child.setY(height - paddingY);
            child.setScrollFactor(0);

            switch (name) {
                case 'd_pad_left': {
                    child.setX(child.x);
                    child.setY(child.y - 20);
                    break;
                }
                case 'd_pad_up': {
                    child.setX(child.x + 40);
                    child.setY(child.y - 40);
                    break;
                }
                case 'd_pad_right': {
                    child.setX(child.x + 60);
                    break;
                }
                case 'd_pad_down': {
                    child.setY(child.y + 20);
                    child.setX(child.x + 20);
                    break;
                }
                case 'action_button':
                default: {
                    child.setY(child.y - 35);
                    child.setX(width - paddingX - 35);
                    break;
                }
            }
        });
    }
}

export default TouchScreenControls;
