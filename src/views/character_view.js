const PubSub = require('../helpers/pub_sub.js');


const CharacterView = function(container, character) {
  this.container = container;
  this.character = character;
};

CharacterView.prototype.render = function () {
  const characterContainer = document.createElement('div');
  characterContainer.setAttribute('class', 'character');

  const characterName = document.createElement('h2');
  characterName.textContent = (this.character.name);
  characterContainer.appendChild(characterName);

  const characterValues = document.createElement('ul');
  characterValues.setAttribute('class', 'character-values');

  const species = document.createElement('li');
  species.textContent = (this.character.species);
  characterValues.appendChild(species);

  const gender = document.createElement('li');
  gender.textContent = (this.character.height);
  characterValues.appendChild(gender);

  characterContainer.appendChild(characterValues);
  this.container.appendChild(characterContainer);
      console.log(characterContainer);
};

module.exports = CharacterView;
