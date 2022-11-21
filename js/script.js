
//MILESTONE 1
const team= [
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "/img/angela-caroll-chief-editor.jpg"
    },
    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "/img/walter-gordon-office-manager.jpg"
    },
    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "/img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "image" : "/img/scott-estrada-developer.jpg"
    },
    {
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "/img/barbara-ramos-graphic-designer.jpg"
    }    
];

//MILESTONE 2 && MILESTONE 3



     
let teamSpace= document.getElementById('team');
let newDiv= document.createElement('div');
let newHeading= document.createElement('h3');
let newSub= document.createElement('sub');
let newImg;
    
for (let i=0; i<team.length; i++){
    let member= team[i];
    console.log(`${member.name} ${member.role} ${member.image}`)
    let newImg= `<img src=${member.img} alt="${member.name}">`

    newDiv.innerHTML += (newHeading, newSub, newImg);
    teamSpace.innerHTML += newDiv;   

    newHeading.innerHTML += `${member.name}`;
    newSub.innerHTML += `${member.role}`;
        
    
}
