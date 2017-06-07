/** Class representing a collision */
class Collision {

  private _game: Game;
  private _player: Player
  private _score: Score;
  private _credit: Credit;
  private _keyboardListener: KeyListener = new KeyListener();

  /**
   * Create a collisionListener
   * @param {Game} - the calling Game object
   */
  constructor(game: Game, player: Player) {
    this._game = game;
    this._player = player;
  }

  /** What to do if objects collide */
  public collide() {
    const window = this._game.windowListener;
    const player = this._game.player.el;
    const credit = document.getElementById('cc');

    /** Collision detection with the bars */
    for (let index in this._game.bars) {
      if (player.offsetLeft + player.offsetWidth >= this._game.bars[index].el.offsetLeft && player.offsetLeft <= this._game.bars[index].el.offsetLeft + this._game.bars[index].el.offsetWidth) {
        if (player.offsetTop + player.offsetHeight == this._game.bars[index].el.offsetTop) {
          this._game.player.yPos = window.windowHeight - this._game.bars[index].el.offsetTop;
          this._keyUp();
        }
      }
    }
  
    /** Collision detection with the credits */
    if (credit) {
      for (let index in this._game.bars) {
        if (credit.parentNode == this._game.bars[index].el) {
          if (player.offsetLeft + player.offsetWidth >= this._game.bars[index].el.offsetLeft + credit.offsetLeft && player.offsetLeft <= this._game.bars[index].el.offsetLeft + credit.offsetLeft + credit.offsetWidth) {
            if (player.offsetTop + player.offsetHeight >= this._game.bars[index].el.offsetTop + credit.offsetTop + credit.offsetHeight && player.offsetTop <= this._game.bars[index].el.offsetTop + credit.offsetTop) {
              console.log('score wordt toegevoegd');
              this._game.score.addScore();
              credit.remove();      
            }
          }
        }
      }
    }

    //TODO: Als de player keydown doet dan moet die ook op de bar blijven staan
    
  }

  /** What to do if ArrowUp is true */
  private _keyUp() {
    if (this._keyboardListener.keyevents.up == true) {
      this._player.move();
    }
  }
}
