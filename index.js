// importing shapeclasses.js, svgclass.js, and inquirer
const {Square, Circle, Triangle } = require('./lib/shapesClasses.js')
const inquirer = require('inquirer');
const fs = require('fs')
const svgClass = require('./lib/more/svgClass.js')
const path = require('path')
//questions that user will be asked
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

let chosenShape;
// will create a new svg file with the users imputs the switch method will filter the shape
//the svg variable will hold the data like shape, color, text, textcolor
function init(){
    return inquirer.prompt(questions)
    .then((answers) =>{
        switch (answers.shape){
            case "Circle":
                chosenShape = new Circle()
            break
            case "Triangle":
                chosenShape = new Triangle
            break
            case "Square":
                chosenShape = new Square()
            break
        }


     const svg = new svgClass.SVG()
     svg.setText(answers.text, answers.textColor);
     chosenShape.setcolor(answers.shapeColor);
     svg.setShape(chosenShape);

    const svgString = svg.draw();
    return writeToFile("logo.svg", svgString)
    })
// function will create the svg file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log(`${filename} Generated Logo.svg successfully!`);
    });
}


}







init()

