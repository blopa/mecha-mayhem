import { GameObjects } from 'phaser';
import { DINO_DEPTH } from '../constants';

class Dino extends GameObjects.Sprite {
    constructor({
        scene,
        x,
        y,
        asset = 'dino',
        frame,
        spriteKey = 'dino',
    }) {
        super(scene, x, y, asset, frame);
        this.setDepth(DINO_DEPTH);
        this.createAnimations();
        this.setAnimation('idle');
        this.spriteKey = spriteKey;
    }

    createAnimations = () => {
        const assetKey = this.texture.key;
        if (!this.scene.anims.exists(`${assetKey}_idle`)) {
            this.scene.anims.create({
                key: `${assetKey}_idle`,
                frames: this.scene.anims.generateFrameNames(assetKey, {
                    frames: [
                        'dino_idle_01',
                        'dino_idle_02',
                        'dino_idle_03',
                        'dino_idle_04',
                        'dino_idle_05',
                        'dino_idle_06',
                    ],
                }),
                frameRate: 8,
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

    addSoundEffects = () => {
        this.robotLaser = this.scene.sound.add('robot_laser_sfx');
    }
}

export default Dino;
