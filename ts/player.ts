/** Class representing a player */
class Player {
  private _el: HTMLImageElement = document.createElement('img');
  private _baseUrl: string = './assets/'
  private _imageName: string;
  private _className: string = 'player';
  public xPos: number = 0;
  public yPos: number = 0;
  public keyboardListener: KeyListener;

  /**
   * Create a player
   * @param {string} img - representing a image
   */
  constructor(img: string) {
    this._imageName = img;
    const game = document.querySelector('.container');
    this._el.setAttribute('src', this._baseUrl + this._imageName);
    this._el.id = 'player';
    game.appendChild(this._el);
    this.keyboardListener = new KeyListener(); //append a keyboardListener
  }

  /** Move a player */
  public move() {
    const currentMovement = this.keyboardListener.keyevents;

    if (this.yPos > 0) {
      this.yPos -= 1;
    }
    if (this.yPos < 0) {
      this.yPos = + 1;
    }

    if (currentMovement.up == true) {
      this.yPos += 5;
    }
    if (currentMovement.down == true) {
      this.yPos -= 10;
    }
    if (currentMovement.right == true) {
      this.xPos += 5;
    } else if (currentMovement.left == true) {
      this.xPos -= 5;
    }
  }

  /**
   * Render coordinates on the Dom
   */
  public render() {
    this._el.style.bottom = this.yPos + 'px';
    this._el.style.left = this.xPos + 'px';
  }

  /**
   * Get the Element (DOM) representation
   * @return {any} The el value
   */
  get el(): any {
    return this._el;
  }
}
