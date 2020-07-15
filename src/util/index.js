const nbt = require('prismarine-nbt');
const util = require('util');

const parseNbt = util.promisify(nbt.parse);

function removeFormatting(i) {
  return i.replace(/§./g, '');
}

async function decodeData(data) {
  const parsedNbt = await parseNbt(Buffer.from(data, 'base64'));
  return nbt.simplify(parsedNbt);
}

function getNestedObjects(object = {}, pathString = '') {
  const path = pathString.split('.');
  for (let i = 0; i < path.length; i += 1) {
    if (object[path[i]] === undefined) {
      return false;
    }
    // eslint-disable-next-line no-param-reassign
    object = object[path[i]];
  }
  return object;
}

module.exports = {
  removeFormatting,
  decodeData,
  getNestedObjects,
};
