const Characters = require('./models/characters.js');
const CharacterListView = require('./views/character_list_view.js');
const CharacterView = require('./views/character_view')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const charContainer = document.querySelector('.index-contents');
  const charView = new CharacterListView(charContainer);
  charView.bindEvents();

  const characters = new Characters();
  characters.getData();
})
