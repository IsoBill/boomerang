const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang.js');
const { runInteractiveConsole } = require('./keyboard');

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero();
    this.enemy = new Enemy(trackLength - 1);
    this.track = [];
    this.regenerateTrack();
    this.view = new View();
  }

  regenerateTrack() {
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
    } else if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
    } else if (this.boomerang.position <= this.enemy.position) {
      this.boomerang.moveRight();
    } else if (this.boomerang.position >= this.hero.position) {
      this.boomerang.moveLeft();
    } else if (this.boomerang.position <= this.hero.position) {
      console.log("You WIN!!! Let's celebrate this 🍻🍻🍻");
      process.exit();
    }
  }

  play() {
    setInterval(() => {
      runInteractiveConsole();
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
    }, 500);
  }
}

module.exports = Game;
