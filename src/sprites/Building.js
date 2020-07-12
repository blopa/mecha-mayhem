import { GameObjects } from 'phaser';
import { BUILDING_DEPTH } from '../constants';

class Building extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'enemy_building',
        frame,
        spriteKey = 'enemy_building',
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(BUILDING_DEPTH);
        this.spriteKey = spriteKey;
        this.setScale(0.4); // TODO
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
                        'enemy_building_idle_01',
                        'enemy_building_idle_02',
                    ],
                }),
                frameRate: 2,
                // yoyo: true,
                repeat: -1,
            });
        }

        if (!this.scene.anims.exists(`${assetKey}_die`)) {
            this.scene.anims.create({
                key: `${assetKey}_die`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'enemy_building_dying_01',
                        'enemy_building_dying_02',
                        'enemy_building_dying_03',
                        'enemy_building_dying_04',
                    ],
                }),
                frameRate: 8,
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

export default Building;
