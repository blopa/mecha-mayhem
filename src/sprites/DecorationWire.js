import { GameObjects } from 'phaser';
import { DECORATION_WIRE_DEPTH } from '../constants';

class DecorationWire extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        type = 'red',
        asset = `${type}_wire`,
        frame,
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(DECORATION_WIRE_DEPTH);
        this.spriteType = type;
        this.createAnimations();
        this.setAnimation('idle');
        this.setOrigin(0, 0);
        this.setScale(0.1); // TODO why do I need this?
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        const { spriteType } = this;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        `${spriteType}_wire_01`,
                        `${spriteType}_wire_02`,
                        `${spriteType}_wire_03`,
                        `${spriteType}_wire_04`,
                        `${spriteType}_wire_05`,
                        `${spriteType}_wire_06`,
                        `${spriteType}_wire_07`,
                        `${spriteType}_wire_08`,
                        `${spriteType}_wire_09`,
                        `${spriteType}_wire_10`,
                        `${spriteType}_wire_11`,
                        `${spriteType}_wire_12`,
                    ],
                }),
                frameRate: 6,
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

export default DecorationWire;
