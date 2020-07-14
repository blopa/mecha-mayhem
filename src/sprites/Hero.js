import { GameObjects } from 'phaser';
import { handleSpriteMovement, isset } from '../utils';
import { HERO_DEPTH } from '../constants';

class Hero extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);

        Object.assign(this, {
            handleSpriteMovement,
        });

        this.createAnimations();
        this.addSoundEffects();
        this.setAnimation('idle');
        this.setDepth(HERO_DEPTH);
        this.setIsGettingHit(false);
    }

    update(time, delta) {
        this.handleSpriteMovement();
    }

    setIsGettingHit = (isGettingHit) => {
        this.isGettingHit = isGettingHit;
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'hero_idle_01',
                        'hero_idle_02',
                        'hero_idle_03',
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
                        'hero_walking_01',
                        'hero_walking_02',
                        'hero_walking_03',
                    ],
                }),
                frameRate: 7,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_action`)) {
            this.scene.anims.create({
                key: `${assetKey}_action`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'hero_action_01',
                        'hero_action_02',
                        'hero_action_03',
                        'hero_action_04',
                        'hero_action_05',
                        'hero_action_06',
                    ],
                }),
                frameRate: 10,
                // yoyo: true,
                repeat: -1,
            });
        }

        // if (!this.scene.anims.exists(`${assetKey}_jump`)) {
        //     this.scene.anims.create({
        //         key: `${assetKey}_jump`,
        //         frames: this.scene.anims.generateFrameNames(assetKey, {
        //             frames: [
        //                 'jumping_01',
        //                 'jumping_02',
        //                 'jumping_03',
        //                 'jumping_04',
        //                 'jumping_05',
        //                 'jumping_06',
        //                 'jumping_07',
        //             ],
        //         }),
        //         frameRate: 12,
        //         // yoyo: true,
        //         repeat: -1,
        //     });
        // }
    };

    setAnimation = (animationName) => {
        if (!isset(this.anims) || this.currentAnimationName === animationName) {
            return;
        }

        if (animationName === 'walk') {
            this.heroWalking.play();
        } else {
            this.heroWalking.stop();
        }

        const assetKey = this.texture.key;
        const animationKey = `${assetKey}_${animationName}`;
        this.currentAnimationName = animationName;
        this.currentAnimationKey = animationKey;
        this.anims.play(animationKey);
    };

    addSoundEffects = () => {
        this.heroWalking = this.scene.sound.add(
            'hero_walking_sfx',
            {
                loop: true,
                volume: 0.6,
            }
        );
    }
}

export default Hero;
