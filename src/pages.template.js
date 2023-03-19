

const manager = require("../lib/Manager");
const engineer = require("../lib/Engineer");
const intern = require("../lib/Intern");
const fs = require("fs");


// create the team

const generateTeam = (team) => {
    

    // create the manager html
    
    const generateManager = (manager) => {
      return `
          <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
          `;
    };
  
    // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;


        
  };

let employeeHtmlString = ""

// for each team member in the team array
 team.forEach((element) => {
   
    
    if(element instanceof intern) {
      employeeHtmlString += generateIntern(element)
    };

    
    if(element instanceof manager) {
       
       employeeHtmlString += generateManager(element)
    };

    
    if(element instanceof engineer) {
       
       employeeHtmlString += generateEngineer(element)
    };
    
    
    
 });   
 return employeeHtmlString;
};
 

   
  
    



module.exports = generateTeam;