import { GameObjects } from 'phaser';
import { isset } from '../utils';

class ParallaxBackground extends GameObjects.Group {
    constructor({
        scene,
        x = 0,
        y = 0,
        name = 'parallax-background',
        assets = [
            'background_clouds',
        ],
        speeds = [0.02, 0.1],
        depth = 0,
    }) {
        super(scene, [], { name });

        assets.forEach((asset) => {
            const parallaxBackground = new GameObjects.Image(
                scene,
                x,
                y,
                asset
            )
                .setOrigin(0, 0);

            const { width } = parallaxBackground.getBounds();
            const parallaxBackgroundClone = new GameObjects.Image(
                scene,
                x - width,
                y,
                asset
            )
                .setOrigin(0, 0);

            this.add(parallaxBackground);
            this.add(parallaxBackgroundClone);
        });

        this.setDepth(depth);
        this.setOrigin(0, 0);
        this.speeds = speeds;
    }

    update = (time, delta) => {
        if (!isset(this.speeds)) {
            return;
        }

        this.getChildren().forEach((child, index) => {
            const { width } = child.getBounds();
            if (child.x >= width) {
                child.setX(0 - width);
            }

            child.setX(child.x - this.speeds[Math.floor(index / 2)]);
        });
    }

    forEach = (callback) => this.getChildren().forEach(callback)
}

export default ParallaxBackground;
