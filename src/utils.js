import { ROBOT_MOVEMENT_TIME } from './constants';

export const isObjectEmpty = (obj) =>
    obj !== null
    && typeof obj === 'object'
    // https://stackoverflow.com/a/32108184/4307769
    && Object.keys(obj).length === 0
    && obj.constructor === Object;

export const isset = (...args) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const arg of args) {
        if (
            isObjectEmpty(arg)
            || arg === undefined
            || arg === null
            || (Array.isArray(arg) && !arg.length)
        ) {
            return false;
        }
    }

    return true;
};

/**
 * @this Phaser.GameObject.Sprite
 */
function onDragEvent(pointer, x, y) {
    this.setX(x);
    this.setY(y);
}

/**
 * @this Phaser.GameObject.Sprite
 */
function onDragStartEvent() {
    this.setScale(this.scale + 1);
}

/**
 * @this Phaser.GameObject.Sprite
 */
function onDragEndEvent() {
    this.setScale(this.scale - 1);
}

/**
 * @this Phaser.GameObject.Sprite
 */
export function setSpriteDraggable() {
    this.setInteractive();

    this.scene.input.dragDistanceThreshold = 5;
    this.scene.input.setDraggable(this);
    this.on('dragstart', this::onDragStartEvent);
    this.on('drag', this::onDragEvent);
    this.on('dragend', this::onDragEndEvent);
}

/**
 * @this Phaser.GameObject.Sprite
 */
export function handleSpriteMovement() {
    const cursors = this.scene.input.keyboard.createCursorKeys();
    const velocity = 3;

    if (cursors.left.isDown) {
        this.setX(this.x - velocity);
    } else if (cursors.right.isDown) {
        this.setX(this.x + velocity);
    } else if (cursors.up.isDown) {
        this.setY(this.y - velocity);
    } else if (cursors.down.isDown) {
        this.setY(this.y + velocity);
    }
}

/**
 * @this RobotStageScene
 */
export function moveRobot() {
    // this.robot.setAnimation(''); // TODO

    this.time.delayedCall(
        ROBOT_MOVEMENT_TIME,
        () => {
            this.tweens.add({
                x: this.buildingsBackground.x - 50,
                y: 0,
                targets: this.buildingsBackground,
                t: 1,
                ease: 'Linear',
                duration: ROBOT_MOVEMENT_TIME,
                repeat: 0,
                yoyo: false,
                onComplete: (tween) => {
                    tween.stop();
                    this::moveRobot();
                },
            });
        }
    );
}
