
class shape {
    constructor(text, textColor, shapeColor){
        if (text.length > 3){
            throw new Error('text content should not be longer than 3 characters');
        }
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
