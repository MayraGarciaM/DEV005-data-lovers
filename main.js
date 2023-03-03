//import { example } from './data.js';
//import data from './data/harrypotter/harry.json' assert {type: 'json'}; 
//console.log(example, data['characters']);
import data from './data/harrypotter/harry.js';
import listCH from './data/harrypotter/CharactersList.js';

const charactersName = document.querySelector('#characters-names');
const characters = data.characters 

characters.forEach((element, i) => {
    if(listCH.charactersList.includes(element.name)){
        charactersName.innerHTML += 
            `<li id='ch${i}'>
                Name: ${element.name}
                Birth: ${element.birth}
                House: ${element.house}
                Species: ${element.species}
                Gender: ${element.gender}
            </li>`;

    }
});
/* 
+ ' ' + element.birth*/