/** Class representing a collision */
class Collision {

  private _game: Game;
  private _player: Player
  private _bar: Bar;
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

  /**
  * What to do if objects collide
  */
  public collide() {
    const window = this._game.windowListener;
    const player = this._game.player.el;
    const bar = this._game.bar.el;
    const credit = this._game.credit.el;
    

    //
    //console.log(player.offsetLeft);
    //
    if (player.offsetLeft <= 0) {
      console.log('left border'); //stop the game
    }
    if (player.offsetLeft >= window.windowWidth) {
      console.log('right border'); //stop the game
    }

    /**
     * 
     * Collision detection with the bars
     * 
     */
    if (player.offsetLeft + player.offsetWidth >= bar.offsetLeft && player.offsetLeft <= bar.offsetLeft + bar.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar.offsetTop;
        if (this._keyboardListener.keyevents.up == true) {
          this._player.move();
        } 
      }
    }

    /**
     * 
     * Collision detection with the credits
     * 
     */
    //console.log(credit.offsetTop);
    if (player.offsetLeft == credit.offsetLeft + bar.offsetLeft) {
      // console.log(player.offsetLeft);
      console.log("Get the creditLeft");
      if (player.offsetTop == bar.offsetTop - credit.offsetTop) {
        console.log("Get the credit");
      }
    }

  }
}
