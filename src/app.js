const Characters = require('./models/characters.js');
const CharacterListView = require('./views/character_list_view.js');
const CharacterView = require('./views/character_view')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const characterContainer = document.querySelector('.index-contents');
  const characterView = new CharacterListView(characterContainer);
  characterView.bindEvents();

  const characters = new Characters();
  characters.getData();
  console.log(characters);
})
