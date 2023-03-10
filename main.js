import { apiHarry } from './api/apiHarry.js';
import listCH from './data/harrypotter/CharactersList.js';

const listElement = document.getElementById("list");
listElement.style.display = 'none';
const loadingDiv = document.getElementById("loading")
let dataList;
const charactersName = document.getElementById("characters-names");
const navMenu = document.querySelector('.Menu');
const navToogle = document.querySelector('.toggle')
apiHarry().then((listHarry) => {
  loadingDiv.style.display = 'none';
  listElement.style.display = 'block';
  dataList = listHarry 
  renderList(listHarry.characters)
  
})
function renderList(listHarry) {
  let listInsert = "";
  listHarry.map((item, index) => {
    const valitate = listCH.charactersList.find((itemCH) => itemCH.name === item.name);
    if (valitate) {
      listInsert +=
        `<ul class='ul-ch' id='ch${index}'>
          <li> <img src="${valitate.link}" alt="Picture of ${item.name}"> </li>
          <li>Name: ${item.name}</li>
          <li>Birth: ${item.birth}</li>
          <li>House: ${item.house ? item.house : "No aplica"}</li>
          <li>Species: ${item.species}</li>
          <li>Gender: ${item.gender}</li>
        </ul>`
    }
  })
  charactersName.innerHTML = listInsert
}
navToogle.addEventListener('click', () => {
  navMenu.classList.toggle('Menu_visible');
  if (navMenu.classList.contains('Menu_visible')) {
    navToogle.setAttribute('aria-label', 'Close menu');
  }else {
    navToogle.setAttribute('aria-label', 'Open menu');
  }
})

const selectHouse = document.getElementById("sl-house");
selectHouse.addEventListener('change', () => {
  let dataFilter;
  if(selectHouse.value != "")  dataFilter = dataList.characters.filter((item) => item.house === selectHouse.value)
  else dataFilter = dataList.characters
  
  renderList(dataFilter)
})