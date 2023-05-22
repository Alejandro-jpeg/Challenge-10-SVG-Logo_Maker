const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes')

//ARRAY OF QUESTIONS:
const questions = [
  {type: 'input',name: 'text',message: 'PLease write 3 letters for the logo',},
  {type: 'input',name: 'textColor',message: 'What should the color of the letters be?'},
  {type: 'list',name: 'shape',message: 'What shape would you like the logo to be?',choices: ['circle', 'rectangle', 'triangle']},
  {type: 'input',name: 'shapeColor',message: 'What color should the shape be'},
];


//TODO: GENERATE THE SVG FILE
//TODO: WRITE THE SVG FILE
//TODO: INITIALIZE THE PROGRAM

inquirer
.prompt(
    questions
)
.then((answers) =>{
    fs.writeFile('logo.svg', answers, (err) =>
        err ? console.log(err) : console.log('Success!')
      );
      console.log('file logo.svg has been created')
})