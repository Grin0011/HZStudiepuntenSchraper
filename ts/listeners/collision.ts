/** Class representing a collision */
class Collision{

  private _game: Game;
  private _player: Player;
  private _bar: Bar;

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
    const bar = this._game.bar.el;
    //
    //console.log(player.offsetLeft);
    //
    if(player.offsetLeft <= 0){
      console.log('left border'); //stop the game
    }
    if(player.offsetLeft >= window.windowWidth){
      console.log('right border'); //stop the game
    }

    // if (player.offsetLeft == bar.offsetLeft) { 
    //   //console.log(player.offsetWidth);
    //   //if (player.offsetLeft - player.offsetWidth + bar.offsetWidth == bar.offsetLeft + bar.offsetWidth) {
    //   if (player.offsetTop + player.offsetHeight == bar.offsetTop) {
    //     //console.log('Gelijke offset');
    //     this._game.player._yPos = window.windowHeight - bar.offsetTop;
    //   }
    // }

    // if (player.offsetLeft + player.offsetWidth == bar.offsetLeft) {
    //   if (player.offsetTop + player.offsetHeight == bar.offsetTop) {
    //     this._game.player._yPos = window.windowHeight - bar.offsetTop;
    //   }
    // }

    // if (player.offsetLeft == bar.offsetLeft + bar.offsetWidth) {
    //   if (player.offsetTop + player.offsetHeight == bar.offsetTop) {
    //     this._game.player._yPos = window.windowHeight - bar.offsetTop;
    //   }
    // }
    for (var i = player.offsetLeft + player.offsetWidth; i <= bar.offsetLeft + bar.offsetWidth + player.offsetWidth; i++) {
      console.log("For loop werkt");
      if (player.offsetTop + player.offsetHeight == bar.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar.offsetTop;
        //console.log(this._game.player.keyboardListener.keyevents);
      }  
    }
  }
}
