
//MILESTONE 1
const team= [
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "angela-caroll-chief-editor.jpg"
    },
    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "walter-gordon-office-manager.jpg"
    },
    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "image" : "scott-estrada-developer.jpg"
    },
    {
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "barbara-ramos-graphic-designer.jpg"
    }    
];

//MILESTONE 2 && MILESTONE 3



     
let teamSpace= document.getElementById('team');

    
for (let i=0; i<team.length; i++){
    let member= team[i];
    console.log(`${member.name} ${member.role} ${member.image}`); 
    
    
    let newDiv= document.createElement('div');
    let newHeading= `<h3>${member.name}</h3>`;
    let newSub= `<sub>${member.role}</sub>`;
    let newImg= `<img src= "img/${member.image}">`;

    newDiv.innerHTML = `${newImg}  ${newHeading}  ${newSub}`;
    newDiv.classList.add('schede');

    teamSpace.append(newDiv);
}
