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
      const banking = profile.banking || {};
      await Promise.all(Object.keys(profile.members)
        .map(async (key) => {
          this.members[key] = await new Player(key, profile.members[key]);
        }));

      this.banking = {
        balance: banking.balance || null,
        transactions: banking.transactions || [],
      };
      this.unlocked_minions = {};
      return this;
    })();
  }
}

module.exports = Profile;
