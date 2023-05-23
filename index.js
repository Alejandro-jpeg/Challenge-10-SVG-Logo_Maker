const inquirer = require('inquirer');
const fs = require('fs');

//ARRAY OF QUESTIONS:
const questions = [
  {type: 'input',name: 'text',message: 'PLease write 3 letters for the logo',},
  {type: 'input',name: 'textColor',message: 'What should the color of the letters be?'},
  {type: 'list',name: 'shape',message: 'What shape would you like the logo to be?',choices: ['circle', 'rectangle', 'triangle']},
  {type: 'input',name: 'shapeColor',message: 'What color should the shape be'},
];


//GENERATE THE SVG FILE
const svgFile = ({text, textColor, shape, shapeColor}) =>{
  const generatedShape = require('./lib/' + shape);
  const newLogo = new generatedShape(text, textColor, shapeColor)
  const logoInfo = newLogo.svgTemplate();
  writeFile(logoInfo);
}

//WRITE THE SVG FILE
function writeFile(logoInfo){
  fs.writeFile('logo.svg', logoInfo, (err) =>
        err ? console.log(err) : console.log('file logo.svg has been created succesfully')
      );

}

//INITIALIZE THE PROGRAM
function init(){
  inquirer
    .prompt(questions)
    .then((answers)=>{
      svgFile(answers)
    })
  }
  init();