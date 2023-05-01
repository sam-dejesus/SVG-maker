// svg class that blueprints the svg file
class SVG {
    constructor () {
        this.text = ""
        this.shape = ""
    }
    draw(){
        return `<svg height="300px" width="200px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">	${this.shape} ${this.text} </svg>`
    }

    setText(incomingText,textColor) {
        this.text = `<text x="50%" y="50%" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${incomingText}</text>`;
    }
    setShape(incomingShape) {
        this.shape = incomingShape.draw();
    }
}
module.exports = { SVG };