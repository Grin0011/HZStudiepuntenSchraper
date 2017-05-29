/** Class representing a collision */
class Collision{

  private _game: Game;
  private _player: Player;

  /**
  * Create a collisionListener
  * @param {Game} - the calling Game object
  */
  constructor(game: Game) {
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

    const playerStyle = document.getElementById('player');
    const barStyle = document.getElementById('bar');

    let playerHeight = this._player._yPos + playerStyle.style.height;
    let playerWidth = this._player._xPos + playerStyle.style.width;
    let barTop = parseInt(barStyle.style.top);

    // if(playerBottom + playerHeight > barTop) {
    //   playerBottom = barTop - playerHeight;
    //   console.log('Jep');
    // }
    // playerStyle.style.top = playerBottom + 'px';
    
  }

}
