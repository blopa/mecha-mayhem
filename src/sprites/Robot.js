import { GameObjects } from 'phaser';
import { ROBOT_DEPTH } from '../constants';

class Robot extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'robot',
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(ROBOT_DEPTH);
        this.setScale(2);
        this.createAnimations();
        this.addSoundEffects();
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_idle_01',
                        'robot_idle_02',
                        'robot_idle_03',
                        'robot_idle_04',
                        'robot_idle_05',
                        'robot_idle_06',
                    ],
                }),
                frameRate: 6,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_walk`)) {
            this.scene.anims.create({
                key: `${assetKey}_walk`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_walking_01',
                        'robot_walking_02',
                        'robot_walking_03',
                        'robot_walking_04',
                        'robot_walking_05',
                        'robot_walking_06',
                        'robot_walking_07',
                        'robot_walking_08',
                        'robot_walking_09',
                    ],
                }),
                frameRate: 10,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_hit`)) {
            this.scene.anims.create({
                key: `${assetKey}_hit`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_hit_01',
                        'robot_hit_02',
                        'robot_hit_03',
                        'robot_hit_04',
                    ],
                }),
                frameRate: 12,
                // yoyo: true,
                repeat: 0,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_die`)) {
            this.scene.anims.create({
                key: `${assetKey}_die`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_dying_01',
                        'robot_dying_02',
                        'robot_dying_03',
                        'robot_dying_04',
                        'robot_dying_05',
                        'robot_dying_06',
                        'robot_dying_07',
                        'robot_dying_08',
                        'robot_dying_09',
                        'robot_dying_10',
                        'robot_dying_11',
                        'robot_dying_12',
                        'robot_dying_13',
                        'robot_dying_14',
                        'robot_dying_15',
                        'robot_dying_16',
                    ],
                }),
                frameRate: 11,
                // yoyo: true,
                repeat: 0,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_shield`)) {
            this.scene.anims.create({
                key: `${assetKey}_shield`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_shield_01',
                        'robot_shield_02',
                        'robot_shield_03',
                        'robot_shield_04',
                        'robot_shield_05',
                        'robot_shield_06',
                        'robot_shield_07',
                        'robot_shield_08',
                        'robot_shield_09',
                        'robot_shield_10',
                        'robot_shield_11',
                        'robot_shield_12',
                        'robot_shield_13',
                        'robot_shield_09',
                        'robot_shield_10',
                        'robot_shield_11',
                        'robot_shield_12',
                        'robot_shield_13',
                        'robot_shield_09',
                        'robot_shield_10',
                        'robot_shield_11',
                        'robot_shield_12',
                        'robot_shield_13',
                        'robot_shield_09',
                        'robot_shield_10',
                        'robot_shield_11',
                        'robot_shield_12',
                    ],
                }),
                frameRate: 18,
                // yoyo: true,
                repeat: 0,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_punch`)) {
            this.scene.anims.create({
                key: `${assetKey}_punch`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_punching_01',
                        'robot_punching_02',
                        'robot_punching_03',
                        'robot_punching_04',
                        'robot_punching_05',
                        'robot_punching_06',
                        'robot_punching_07',
                        'robot_punching_08',
                        'robot_punching_09',
                        'robot_punching_10',
                    ],
                }),
                frameRate: 10,
                // yoyo: true,
                repeat: 0,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_shoot`)) {
            this.scene.anims.create({
                key: `${assetKey}_shoot`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_shooting_01',
                        'robot_shooting_02',
                        'robot_shooting_03',
                        'robot_shooting_04',
                        'robot_shooting_05',
                        'robot_shooting_06',
                        'robot_shooting_07',
                        'robot_shooting_08',
                        'robot_shooting_09',
                        'robot_shooting_10',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_shooting_11',
                        'robot_after_shooting_01',
                        'robot_after_shooting_02',
                        'robot_after_shooting_03',
                        'robot_after_shooting_04',
                    ],
                }),
                frameRate: 11,
                // yoyo: true,
                repeat: 0,
            });
        }
    };

    setAnimation = (animationName) => {
        if (this.currentAnimationName === animationName) {
            return;
        }

        if (animationName === 'walk') {
            this.robotWalking.play();
        } else {
            this.robotWalking.stop();
        }

        const assetKey = this.texture.key;
        const animationKey = `${assetKey}_${animationName}`;
        this.currentAnimationName = animationName;
        this.currentAnimationKey = animationKey;
        this.anims.play(animationKey);
    };

    addSoundEffects = () => {
        this.robotLaser = this.scene.sound.add('robot_laser_sfx');
        this.robotDying = this.scene.sound.add('robot_die_sfx');
        this.robotShilding = this.scene.sound.add('robot_shield_hit_sfx');
        this.robotPunch = this.scene.sound.add('robot_punch_sfx');
        this.robotWalking = this.scene.sound.add(
            'robot_walking_sfx',
            {
                loop: false,
                volume: 0.5,
            }
        );
    }
}

export default Robot;
