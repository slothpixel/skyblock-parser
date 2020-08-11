## About

**Work in progress!**

skyblock-parser is a javascript library for processing Hypixel SkyBlock data. It provides several classes, utility functions and constants.

**Note**:  If you don't need to interface with the Hypixel API yourself, it is easier to use [The Slothpixel API](https://docs.slothpixel.me) - it provides the same functionality.

## Installation

**Node.js 12.0.0 or newer is required.**

Run `npm i -s slothpixel/skyblock-parser` on your project folder.


## Example usage

In the following example we use the `node-fetch` library to retrieve data from the Hypixel API and then use `Profile` class
provided by skyblock-parse to process the data to a more readable form and then log uuid and player stats of each member to console.

```js
const fetch = require('node-fetch');
const { Profile } = require('skyblock-parser');

const apiKey = '';  // Insert your Hypixel API key here
const profileId = '83eeafe88f68419a8192406efe69fd86';

(async () => {
  const api = await fetch(`https://api.hypixel.net/skyblock/profile?key=${apiKey}&profile=${profileId}`);
  const json = await api.json();
  const profile = await new Profile(json.profile);
  
  Object.keys(profile.members).forEach((uuid) => {
    const member = profile.members[uuid]
    console.log(member.uuid, member.stats)
  });
})();

```

## History

  * Ported from https://github.com/LeaPhant/skyblock-stats
