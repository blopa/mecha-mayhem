import { GameObjects } from 'phaser';
import { ROBOT_MOVEMENT_TIME, SPIKES_DEPTH } from '../constants';
import { isset, startRobotMovement } from '../utils';

class Spikes extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'spikes',
        spriteKey = 'spikes',
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(SPIKES_DEPTH);
        this.setOrigin(0, 0);
        this.isOn = false;
        this.spriteKey = spriteKey;
        this.createAnimations();
        this.handleAnimation();
    }

    handleAnimation = () => {
        this.setAnimation('start');
        this.scene.time.delayedCall(
            ROBOT_MOVEMENT_TIME / 2,
            () => {
                this.isOn = true;
                this.scene.time.delayedCall(
                    ROBOT_MOVEMENT_TIME,
                    () => {
                        this.setAnimation('stop');
                        this.scene.time.delayedCall(
                            ROBOT_MOVEMENT_TIME / 2,
                            () => {
                                this.isOn = false;
                                this.scene.time.delayedCall(
                                    ROBOT_MOVEMENT_TIME,
                                    () => {
                                        this.handleAnimation();
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_start`)) {
            this.scene.anims.create({
                key: `${assetKey}_start`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'spikes_idle_05',
                        'spikes_idle_04',
                        'spikes_idle_03',
                        'spikes_idle_02',
                        'spikes_idle_01',
                    ],
                }),
                frameRate: 100,
                // yoyo: true,
                repeat: 0,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_stop`)) {
            this.scene.anims.create({
                key: `${assetKey}_stop`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'spikes_idle_01',
                        'spikes_idle_02',
                        'spikes_idle_03',
                        'spikes_idle_04',
                        'spikes_idle_05',
                    ],
                }),
                frameRate: 10,
                // yoyo: true,
                repeat: 0,
            });
        }
    };

    setAnimation = (animationName) => {
        if (!isset(this.anims) || this.currentAnimationName === animationName) {
            return;
        }

        const assetKey = this.texture.key;
        const animationKey = `${assetKey}_${animationName}`;
        this.currentAnimationName = animationName;
        this.currentAnimationKey = animationKey;
        this.anims.play(animationKey);
    };
}

export default Spikes;
