import { GameObjects } from 'phaser';
import { handleSpriteMovement } from '../utils';

class Hero extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);

        Object.assign(this, {
            handleSpriteMovement,
        });

        this.createAnimations();
        this.setAnimation('walk');
        this.setDepth(2);
    }

    update(time, delta) {
        this.handleSpriteMovement();
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'idle_01',
                        'idle_02',
                        'idle_03',
                        'idle_04',
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
                        'walking_01',
                        'walking_02',
                        'walking_03',
                        'walking_04',
                    ],
                }),
                frameRate: 10,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_jump`)) {
            this.scene.anims.create({
                key: `${assetKey}_jump`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'jumping_01',
                        'jumping_02',
                        'jumping_03',
                        'jumping_04',
                        'jumping_05',
                        'jumping_06',
                        'jumping_07',
                    ],
                }),
                frameRate: 12,
                // yoyo: true,
                repeat: -1,
            });
        }
    };

    setAnimation = (animationName) => {
        if (this.currentAnimationName === animationName) {
            return;
        }

        const assetKey = this.texture.key;
        const animationKey = `${assetKey}_${animationName}`;
        this.currentAnimationName = animationName;
        this.currentAnimationKey = animationKey;
        this.anims.play(animationKey);
    };
}

export default Hero;
