const Player = require('../player/Player');

class Profile {
  constructor(profile = {}) {
    if (!profile.profile_id) throw new Error('Invalid skyblock profile');
    this.id = profile.profile_id;
    this.banking = profile.banking;
    this.members = Object.keys(profile.members).map((key) => new Player(key, profile.members[key]));
  }
}

module.exports = Profile;
