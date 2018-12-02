const PubSub = require('../helpers/pub_sub.js');
const CharacterView = require('./character_view.js')

const CharacterListView = function (container) {
  this.container = container;
}

CharacterListView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:character-list-ready', (event) => {
    this.characters = event.detail;
    this.render();
  });
};

// // TODO:
CharacterListView.prototype.render = function () {
  const characterList = document.createElement('div');
  characterList.setAttribute('class', 'character-list');
  this.container.appendChild(characterList);
  console.log(characterList);

  this.characters.forEach(() => {
    const characterView = new CharacterView(this.container, character);
    characterView.render();
  })
};


module.exports = CharacterListView;
