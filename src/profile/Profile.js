/* eslint-disable camelcase */
const Player = require('../player/Player');

class Profile {
  /**
   * Profile class
   * @param profile {Object} Profile object returned by the Hypixel API
   * @type {Promise}
   */
  constructor(profile = {}) {
    return (async () => {
      if (!profile.profile_id) throw new Error('Invalid skyblock profile');
      this.id = profile.profile_id;
      this.members = {};
      this.game_mode = profile.game_mode || '';
      this.cute_name = profile.cute_name || '';
      this.selected = profile.selected || false;
      const banking = profile.banking || {};
      this.community_upgrades = profile.community_upgrades || {};
      await Promise.all(Object.keys(profile.members)
        .map(async (key) => {
          this.members[key] = await new Player(key, profile.members[key]);
        }));

      this.banking = {
        balance: banking.balance || null,
        transactions: banking.transactions || [],
      };
      const unlocked_minions = {};
      Object.keys(this.members).forEach((uuid) => {
        const { minions } = this.members[uuid];
        Object.keys(minions).forEach((minion) => {
          if (unlocked_minions[minion] < minions[minion] || !(minion in unlocked_minions)) {
            unlocked_minions[minion] = minions[minion];
          }
        });
      });
      this.unlocked_minions = unlocked_minions;
      return this;
    })();
  }
}

module.exports = Profile;
