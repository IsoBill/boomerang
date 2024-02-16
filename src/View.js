// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }
  render(track) {
    const yourTeamName = 'Dream Team';
    console.log(this.track);
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
