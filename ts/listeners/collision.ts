/** Class representing a collision */
class Collision{

  private _game: Game;

  /**
  * Create a collisionListener
  * @param {Game} - the calling Game object
  */
  constructor(game: Game){
    this._game = game;
  }

  /**
  * What to do if objects collide
  */
  public collide(){
    const window = this._game.windowListener;
    const player = this._game.player.el;
    //
    //console.log(player.offsetLeft);
    //
    if(player.offsetLeft <= 0){
      console.log('left border'); //stop the game
    }
    if(player.offsetLeft >= window.windowWidth){
      console.log('right border'); //stop the game
    }
  }

}
