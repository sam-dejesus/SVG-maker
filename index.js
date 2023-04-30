const {Square, Circle, Triangle } = require('./lib/shapesClasses.js')
const inquirer = require('inquirer');
const fs = require('fs')

class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    draw(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.textElement}${this.shapeElement}</svg>`
    }
    
       setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.draw()

    }
}

//------
const shapeClasses = {
    Square: Square,
    Circle: Circle,
    Triangle: Triangle
  };
  
  function shapes(data) {
    const svg = new Svg();
  
    svg.setTextElement(data.text, data.textColor);
  

    const ShapeClass = shapeClasses[data.shape];
    const shape = new ShapeClass(data.shapeColor);

    svg.setShapeElement(shape);
  
    return svg.draw();
  }
  
//------

const questions = [
    {
        type: 'input',
        name: 'text',
        message:'please enter up to three characters for the logo'
    },
    {
        type:'input', 
        name: 'textColor',
        message:'please enter a color or hexadecimal number for the text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices:['Square','Circle','Triangle']
    },
    {
        type: 'text',
        name: 'shapeColor',
        message: 'please enter a color or hexadecimal number for the shape',
 
    },
    
]

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log(`${filename} Generated Logo.svg successfully!`);
    });
}


function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const shapeFile = shapes(data);
            writeToFile('Logo.svg', shapeFile);
        })
        .catch((error) => {
            console.log(error);
        });
}

init()

