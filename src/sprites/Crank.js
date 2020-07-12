import { GameObjects } from 'phaser';
import { CRANK_DEPTH } from '../constants';

class Crank extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'crank',
        spriteKey = 'crank',
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(CRANK_DEPTH);
        this.setOrigin(0, 0);
        this.spriteKey = spriteKey;
        this.createAnimations();
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'crank_idle_01',
                        'crank_idle_02',
                        'crank_idle_03',
                        'crank_idle_04',
                        'crank_idle_05',
                        'crank_idle_06',
                        'crank_idle_07',
                        'crank_idle_08',
                    ],
                }),
                frameRate: 12,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_stop`)) {
            this.scene.anims.create({
                key: `${assetKey}_stop`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'crank_idle_01',
                    ],
                }),
                frameRate: 1,
                // yoyo: true,
                repeat: 0,
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

export default Crank;
