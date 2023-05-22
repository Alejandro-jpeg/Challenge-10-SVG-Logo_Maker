
class shape {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    svgTemplate(){
        return '';
    }
}

class triangle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    svgTemplate(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="200, 0 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class circle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    svgTemplate(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class rectangle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    svgTemplate(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${this.shapeColor   }" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = triangle;
module.exports = circle;
module.exports = rectangle;