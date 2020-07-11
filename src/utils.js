import {
    BUILDING,
    JET, METEOR, MISSILE, NOTHING,
    ROBOT_MOVEMENT_SIZE,
    ROBOT_MOVEMENT_TIME, ROBOT_OCCUPATION_SIZE,
    ROBOT_STAGE_CURRENT_POSITION_DATA_KEY,
    ROBOT_STAGE_LAYOUT_DATA_KEY,
} from './constants';
import Missile from './sprites/Missile';
import Jet from './sprites/Jet';
import Building from './sprites/Building';

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
    const velocity = 200;

    if (cursors.left.isDown) {
        this.body.setVelocityX(-velocity);
        this.body.setVelocityY(0);
    } else if (cursors.right.isDown) {
        this.body.setVelocityX(velocity);
        this.body.setVelocityY(0);
    } else if (cursors.up.isDown) {
        this.body.setVelocityY(-velocity);
        this.body.setVelocityX(0);
    } else if (cursors.down.isDown) {
        this.body.setVelocityY(velocity);
        this.body.setVelocityX(0);
    } else {
        this.body.setVelocity(0, 0);
    }
}

/**
 * @this RobotStageScene
 */
function containsEnemyAtPosition(position) {
    const stageLayoutData = this.data.get(ROBOT_STAGE_LAYOUT_DATA_KEY);

    return [JET, BUILDING, MISSILE].includes(stageLayoutData[position]);
}

/**
 * @this RobotStageScene
 */
function handleActionQueue(position) {
    const stageLayoutData = this.data.get(ROBOT_STAGE_LAYOUT_DATA_KEY);
    const enemyType = stageLayoutData[position];
    const { inGameActions } = window;
    const {
        willDuck,
        willShootLaser,
        willShield,
        willDestroyBuilding,
    } = inGameActions;

    if (willDuck && enemyType === METEOR) {
        // TODO
    }

    if (willShootLaser && enemyType === JET) {
        // TODO
    }

    if (willShield && enemyType === MISSILE) {
        // TODO
    }

    if (willDestroyBuilding && enemyType === BUILDING) {
        // TODO
    }

    // TODO OMG
    stageLayoutData[position] = NOTHING;
    this.data.set(ROBOT_STAGE_LAYOUT_DATA_KEY, stageLayoutData);
}

/**
 * @this RobotStageScene
 */
export function startRobotMovement() {
    // this.robot.setAnimation(''); // TODO
    const currentPosition = this.data.get(ROBOT_STAGE_CURRENT_POSITION_DATA_KEY);

    // does the next block contains an enemy? If yes we need to check our actions
    if (this::containsEnemyAtPosition(currentPosition + ROBOT_OCCUPATION_SIZE + 1)) {
        console.log('Incoming enemy...');
        this::handleActionQueue(currentPosition + ROBOT_OCCUPATION_SIZE + 1);
    }
    this.robot.setAnimation('walk');

    this.data.set(ROBOT_STAGE_CURRENT_POSITION_DATA_KEY, currentPosition + 1);

    this.buildingsBackground.forEach((parallaxBackground, index) => {
        this::moveRobotRelatedSprite(parallaxBackground, true);
    });

    this.enemies.forEach((enemy, index) => {
        this::moveRobotRelatedSprite(enemy);
    });

    this.time.delayedCall(
        ROBOT_MOVEMENT_TIME,
        () => {
            const stageLayoutData = this.data.get(ROBOT_STAGE_LAYOUT_DATA_KEY);
            this.robot.setAnimation('idle');

            // TODO the robot occupies 3 positions
            if (this::containsEnemyAtPosition(currentPosition + ROBOT_OCCUPATION_SIZE)) {
                console.log('Game over...');
                return;
            }

            if (currentPosition >= stageLayoutData.length) {
                console.log('You won yay');
                return;
            }

            this.time.delayedCall(
                ROBOT_MOVEMENT_TIME,
                this::startRobotMovement
            );
        }
    );
}

/**
 * @this RobotStageScene
 */
function moveRobotRelatedSprite(robotRelatedSprite, loop = false) {
    this.tweens.add({
        x: robotRelatedSprite.x - ROBOT_MOVEMENT_SIZE,
        y: robotRelatedSprite.y,
        targets: robotRelatedSprite,
        t: 1,
        ease: 'Linear',
        duration: ROBOT_MOVEMENT_TIME,
        repeat: 0,
        yoyo: false,
        onComplete: (tween) => {
            if (loop) {
                const { width } = robotRelatedSprite.getBounds();
                if (robotRelatedSprite.x + width <= 0) {
                    robotRelatedSprite.setX(width);
                }
            }

            tween.stop();
        },
    });
}

/**
 * @this RobotStageScene
 */
export function renderStageEnemies() {
    const data = this.data.get(ROBOT_STAGE_LAYOUT_DATA_KEY);
    const currentPosition = this.data.get(ROBOT_STAGE_CURRENT_POSITION_DATA_KEY);
    let x = currentPosition * ROBOT_MOVEMENT_SIZE;
    data.forEach((enemyType) => {
        const enemy = this::createEnemyByType(enemyType, x);
        if (enemy) {
            this.add.existing(enemy);
            this.enemies.push(enemy);
        }

        x += ROBOT_MOVEMENT_SIZE;
    });
}

/**
 * @this RobotStageScene
 */
function createEnemyByType(enemyType, x) {
    switch (enemyType) {
        case JET: {
            return new Jet({
                scene: this,
                x,
                y: 50,
            }).setOrigin(0, 0);
        }

        case MISSILE: {
            return new Missile({
                scene: this,
                x,
                y: 50,
            }).setOrigin(0, 0);
        }

        case BUILDING: {
            return new Building({
                scene: this,
                x,
                y: 10,
            }).setOrigin(0, 0);
        }

        case NOTHING:
        default: {
            return null;
        }
    }
}
