import { apiHarry } from './api/apiHarry.js';
import { filterData, filterProtagonists, searchFilter, sortList } from './data.js';
import listCH from './data/harrypotter/CharactersList.js';

const slSort = document.querySelector('#sl-sort');
const listElement = document.getElementById("list");
listElement.style.display = 'none';
const loadingDiv = document.getElementById("loading")
let dataList;
let dataFilter;
const charactersName = document.getElementById("characters-names");
const navMenu = document.querySelector('.Menu');
const navToogle = document.querySelector('.toggle');

apiHarry().then((listHarry) => {
  loadingDiv.style.display = 'none';
  listElement.style.display = 'block';
  dataList = listHarry;
  dataFilter = listHarry.characters;
  renderProtagonists();
});

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
          <li>House: ${item.house ? item.house : "Not apply"}</li>
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
});

const selectHouse = document.getElementById("sl-house");
selectHouse.addEventListener('change', () => {
  dataFilter = dataList.characters
  if(selectHouse.value !== "All Characters")  dataFilter = filterData(dataFilter, selectHouse.value);
  else dataFilter = dataList.characters;
  if(slSort.value !== "sort-by") {
    dataFilter = sortList(dataFilter)
  }
  renderList(dataFilter);
  title.style.display='none';
  subtitle.style.display = 'block';
  subtitle.textContent = `${selectHouse.value}`;
});

const btnHome = document.querySelector('#btn-home');
const title = document.querySelector('h1');
const subtitle = document.querySelector('#subtitle');
const protagonists = [
  'Harry Potter', 
  'Ronald Weasley', 
  'Hermione Granger', 
  'Albus Dumbledore', 
  'Severus Snape', 
  'Tom Riddle (Voldemort)'
];

const renderProtagonists = () => {
  dataFilter = filterProtagonists(dataList.characters, protagonists);
  title.style.display = 'block';
  selectHouse.value = 'Filter by';
  slSort.value = 'sort-by';
  subtitle.style.display = 'none';
  renderList(dataFilter);
};

btnHome.addEventListener('click', () => {
  renderProtagonists();
});

slSort.addEventListener('change', () => {
  dataFilter = dataList.characters
  if(slSort.value !== "sort-by") {
    title.style.display = 'none';
    selectHouse.value='All Characters';
    renderList(sortList(dataFilter));
  }else {
    selectHouse.value='Filter by';
    renderProtagonists();
  }
});

const searchBar = document.querySelector('#search');
searchBar.addEventListener('keyup', () => {
  title.style.display = 'none';
  renderList(searchFilter(dataList.characters, searchBar.value.toLowerCase()));
  if (searchBar.value === '') renderProtagonists();
});