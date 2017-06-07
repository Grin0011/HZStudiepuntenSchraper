/** Class representing a collision */
class Collision {

  private _game: Game;
  private _player: Player
  //private _bar: Bar;
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

  /**
  * What to do if objects collide
  */
  public collide() {
    const window = this._game.windowListener;
    const player = this._game.player.el;
    const bar0 = this._game.bars[0].el;
    const bar1 = this._game.bars[1].el;
    const bar2 = this._game.bars[2].el;
    const bar3 = this._game.bars[3].el;
    const bar4 = this._game.bars[4].el;
    const bar5 = this._game.bars[5].el;
    const bar6 = this._game.bars[6].el;
    const bar7 = this._game.bars[7].el;
    const bar8 = this._game.bars[8].el;
    const bar9 = this._game.bars[9].el;
    const bar10 = this._game.bars[10].el;
    const bar11 = this._game.bars[11].el;
    const bar12 = this._game.bars[12].el;
    //const bar = document.getElementById('bar')
    const credit = document.getElementById('cc');

    /**
     * 
     * Collision detection with the bars
     * 
     */
    if (player.offsetLeft + player.offsetWidth >= bar0.offsetLeft && player.offsetLeft <= bar0.offsetLeft + bar0.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar0.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar0.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar1.offsetLeft && player.offsetLeft <= bar1.offsetLeft + bar1.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar1.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar1.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar2.offsetLeft && player.offsetLeft <= bar2.offsetLeft + bar2.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar2.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar2.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar3.offsetLeft && player.offsetLeft <= bar3.offsetLeft + bar3.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar3.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar3.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar4.offsetLeft && player.offsetLeft <= bar4.offsetLeft + bar4.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar4.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar4.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar5.offsetLeft && player.offsetLeft <= bar5.offsetLeft + bar5.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar5.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar5.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar6.offsetLeft && player.offsetLeft <= bar6.offsetLeft + bar6.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar6.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar6.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar7.offsetLeft && player.offsetLeft <= bar7.offsetLeft + bar7.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar7.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar7.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar8.offsetLeft && player.offsetLeft <= bar8.offsetLeft + bar8.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar8.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar8.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar9.offsetLeft && player.offsetLeft <= bar9.offsetLeft + bar9.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar9.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar9.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar9.offsetLeft && player.offsetLeft <= bar9.offsetLeft + bar9.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar9.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar9.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar10.offsetLeft && player.offsetLeft <= bar10.offsetLeft + bar10.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar10.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar10.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar11.offsetLeft && player.offsetLeft <= bar11.offsetLeft + bar11.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar11.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar11.offsetTop;
        this._keyUp();
      }
    }
    if (player.offsetLeft + player.offsetWidth >= bar12.offsetLeft && player.offsetLeft <= bar12.offsetLeft + bar12.offsetWidth) {
      if (player.offsetTop + player.offsetHeight == bar12.offsetTop) {
        this._game.player.yPos = window.windowHeight - bar12.offsetTop;
        this._keyUp();
      }
    }

  
  /**
     * 
     * Collision detection with the credits
     * 
     */
    if (player.offsetLeft + player.offsetWidth >= bar1.offsetLeft + credit.offsetLeft && player.offsetLeft <= bar1.offsetLeft + credit.offsetLeft + credit.offsetWidth) {
      if (player.offsetTop + player.offsetHeight >= bar1.offsetTop + credit.offsetTop + credit.offsetHeight && player.offsetTop <= bar1.offsetTop + credit.offsetTop) {
        console.log('score wordt toegevoegd');
        this._game.score.addScore();
        credit.remove();
        this._game.credit.render();         
      }
    }

  }
  private _keyUp() {
    if (this._keyboardListener.keyevents.up == true) {
      this._player.move();
    }
  }
}
