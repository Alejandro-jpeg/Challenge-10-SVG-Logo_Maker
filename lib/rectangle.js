const shapes = require('./shapes')

class rectangle extends shapes{
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

module.exports = rectangle;