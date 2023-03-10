const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern'); 
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./src/htmlMarkdown')
const teamMembers=[];

function managerAnswers(){
  inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        message: "Enter the team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team manager's email address:",
      },
      {
        type:"input",
        name:"officeNumber",
        message:"Enter the team manager's office number:",
      }
      
    ])
    .then((answers)=>{
      const manager= new Manager(answers.name, answers.id, answers.email, answers.officeNumber )
      teamMembers.push(manager);
      addTeamMember();
    })
}
function addTeamMember(){
inquirer
.prompt([
  {
    type: "list",
    name: "role",
    message: "Add an engineer or intern to the team?",
    choices: ["Engineer", "Intern", "Not at this time"],
  },
])
.then((answers) => {
  if (answers.role === "Engineer") {
    engineerAnswers();
  } else if (answers.role === "Intern") {
    internAnswers();
  } else {
    createFile();
  }
});
}
function engineerAnswers() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub Username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);
      addTeamMember();
    });
}
function internAnswers() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Intern's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "What school does/did the intern attend?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      addTeamMember();
    });
}
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data,(err)=>
  err? console.log(err) : console.log('Successfully created Profile!')
  );

}

    function createFile() {
        const htmlFile= generateMarkdown(teamMembers);
        writeToFile('index.html',htmlFile);
    }
  
    function init(){
      managerAnswers();
    }
    
init();