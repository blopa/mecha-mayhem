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
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'robot_walking_01',
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

export default Robot;
