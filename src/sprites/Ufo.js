import { GameObjects } from 'phaser';
import { JET_DEPTH } from '../constants';
import { isset } from '../utils';

class Ufo extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'ufo',
        frame,
        spriteKey = 'ufo',
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(JET_DEPTH);
        this.spriteKey = spriteKey;
        this.createAnimations();
        this.setAnimation('idle');
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'ufo_idle_01',
                        'ufo_idle_02',
                        'ufo_idle_03',
                        'ufo_idle_04',
                        'ufo_idle_05',
                        'ufo_idle_06',
                        'ufo_idle_07',
                        'ufo_idle_08',
                        'ufo_idle_09',
                        'ufo_idle_10',
                    ],
                }),
                frameRate: 12,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_die`)) {
            this.scene.anims.create({
                key: `${assetKey}_die`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'ufo_dying_01',
                        'ufo_dying_02',
                        'ufo_dying_03',
                        'ufo_dying_04',
                        'ufo_dying_05',
                        'ufo_dying_06',
                        'ufo_dying_04',
                    ],
                }),
                frameRate: 14,
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

export default Ufo;
