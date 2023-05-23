const shapes = require('./shapes')

class triangle extends shapes{
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

module.exports = triangle;