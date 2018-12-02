const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Characters = function () {
  this.data = null;
};

Characters.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://rickandmortyapi.com/api/character/');
  requestHelper.get((characters) => {
    this.data = characters;
    PubSub.publish('Characters:character-list-ready', this.data);
  })
};

module.exports = Characters;
