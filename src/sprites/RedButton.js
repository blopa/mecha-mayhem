import { GameObjects } from 'phaser';
import { RED_BUTTON_DEPTH } from '../constants';

class RedButton extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'red_button',
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(RED_BUTTON_DEPTH);
        this.setOrigin(0, 0);
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
                        'red_button_01',
                        'red_button_02',
                        'red_button_03',
                        'red_button_04',
                        'red_button_05',
                        'red_button_06',
                    ],
                }),
                frameRate: 12,
                yoyo: true,
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

export default RedButton;
