
class shape {
    constructor(text, textColor, shapeColor){
        //TODO: MAKE IT SO THAT IT ONLY ACCEPTS 3 CHARACTERS
        this.text = text
        this.textColor = textColor
        //TODO: MAKE IT SO THAT IT ONLY ACCEPTS VALID COLORS
        this.shapeColor = shapeColor
    }
    svgTemplate(){
        return '';
    }
}

module.exports = shape;
