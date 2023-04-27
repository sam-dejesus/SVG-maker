const shapes = require('./lib/shapes')
const inquirer = require('inquirer');
const fs = require('fs')

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

