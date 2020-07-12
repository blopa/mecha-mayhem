// TODO remember to remove input from DOM after changing scene
class HtmlFileInput {
    constructor({
        scene,
        spriteKey,
        placeholder,
        width = 0,
        height = 0,
        fontSize,
        x = 0,
        y = 0,
    }) {
        const mainElement = scene.sys.game.canvas.parentElement;
        const canvasElement = scene.sys.game.canvas;
        const { width: gameActualWidth, height: gameActualHeight } =
            canvasElement.getBoundingClientRect();
        const { width: gameWidth, height: gameHeight } = scene.sys.game.canvas;

        // TODO I think this is not needed anymore, remove it
        const ratio = Math.max(
            gameActualWidth / gameWidth,
            gameActualHeight / gameHeight
        );

        const positionX = Math.floor(x * ratio);
        const positionY = Math.floor(y * ratio);
        const inputWidth = Math.floor(width * ratio);
        const inputHeight = Math.floor(height * ratio);

        const textfield = document.createElement('input');
        textfield.setAttribute('type', 'file');
        textfield.setAttribute('id', spriteKey);
        textfield.setAttribute('autocomplete', 'off');
        textfield.onkeypress = (event) => /[A-Za-z0-9_]/i.test(event.key);
        if (placeholder) {
            this.setPlaceholder(placeholder);
            textfield.setAttribute('placeholder', placeholder);
        }

        textfield.style.position = 'absolute';
        textfield.style.top = 0;
        textfield.style.display = 'block';
        textfield.style.marginTop = '-400px';

        if (y) {
            const canvasMarginTop = parseInt(canvasElement.style.marginTop, 10);
            if (canvasMarginTop) {
                textfield.style.marginTop = `${positionY + canvasMarginTop}px`;
            } else {
                textfield.style.marginTop = `${positionY}px`;
            }
        }
        if (x) {
            textfield.style.marginLeft = `${positionX}px`;
        }

        mainElement.appendChild(textfield);
        textfield.focus();
        // we only have the offsetWidth after appending to the DOM
        if (width) {
            textfield.style.width = `${inputWidth}px`;
        } else {
            textfield.style.width = `${textfield.offsetWidth}px`;
        }

        if (height) {
            textfield.style.height = `${inputHeight}px`;
        } else {
            textfield.style.height = `${textfield.offsetHeight}px`;
        }

        if (fontSize) {
            textfield.style.fontSize = `${fontSize}px`;
        }

        this.setWidth(inputWidth);
        this.setHeight(inputHeight);
        this.setY(positionY);
        this.setX(positionX);
        this.setFontSize(fontSize);
        this.setTextfield(textfield);
        this.setScene(scene);
    }

    setPlaceholder = (placeholder) => {
        this.placeholder = placeholder;
    };

    setWidth = (width) => {
        this.width = width;
    };

    setHeight = (height) => {
        this.height = height;
    };

    setY = (y) => {
        this.y = y;
    };

    setX = (x) => {
        this.x = x;
    };

    setFontSize = (fontSize) => {
        this.fontSize = fontSize;
    };

    setTextfield = (textfield) => {
        this.textfield = textfield;
    }

    setScene = (scene) => {
        this.scene = scene;
    }

    verticallyCenterObject = () => {
        this.textfield.style.marginLeft = 'auto';
        this.textfield.style.marginRight = 'auto';
        this.textfield.style.right = 0;
        this.textfield.style.left = 0;
    }

    getText = () => this.textfield.value;

    setActive = (active = true) => {
        if (active) {
            this.textfield.style.display = 'block';
        } else {
            this.textfield.style.display = 'none';
        }
    }

    // TODO create this function
    // getCustomBounds = () => {
    //     return {
    //         x: this.x,
    //         y: this.y,
    //         width: this.width,
    //         height: this.height,
    //     };
    // }
}

export default HtmlFileInput;
