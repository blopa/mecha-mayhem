import { Scene } from 'phaser';
import WebFont from 'webfontloader';

class BootScene extends Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        this.fontsReady = false;
        this.fontsLoaded = this.fontsLoaded.bind(this);
        this.add.text(100, 100, 'loading fonts...');

        WebFont.load({
            google: {
                families: ['Bangers'],
            },
            active: this.fontsLoaded,
        });
    }

    update() {
        if (this.fontsReady) {
            this.scene.start('LoadingScene');
        }
    }

    fontsLoaded() {
        this.fontsReady = true;
    }
}

export default BootScene;
