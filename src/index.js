/* eslint-disable global-require */
const util = require('./util');

module.exports = {
  // Main classes
  Profile: require('./profile/Profile'),
  Player: require('./player/Player'),
  Pet: require('./pet/Pet'),
  Item: require('./item/Item'),
  // Constants
  constants: require('./constants'),
  // Utilities
  removeFormatting: util.removeFormatting,
  decodeData: util.decodeData,
};
