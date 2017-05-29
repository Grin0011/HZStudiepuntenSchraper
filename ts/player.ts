/** Class representing a player */
class Player {
  private _el : HTMLImageElement = document.createElement('img');
  private _baseUrl : string = './assets/'
  private _imageName : string;
  private _className : string = 'player';
  public _xPos : number = 0;
  public _yPos : number = 0;
  private _keyboardListener: KeyListener;

  /**
  * Create a player
  * @param {string} img - representing a image
  */
  constructor(img: string){
    this._imageName = img;
    //creating a Dom Element
    const game = document.querySelector('.container');
    this._el.setAttribute('src', this._baseUrl + this._imageName);
    this._el.id = 'player';
    game.appendChild(this._el);
    this._keyboardListener = new KeyListener(); //append a keyboardListener
  }

  /**
  * Move a player
  */
  public move(){
    const currentMovement = this._keyboardListener.keyevents; //could be loosely coupled by pubsub system

    if (this._yPos > 0) {
      this._yPos -= 1;
    }
    if (this._yPos < 0) {
      this._yPos =+ 1;
    }


    if(currentMovement.up == true ){
      this._yPos += 5;
    }
    if(currentMovement.down == true){
      this._yPos -= 10;
    }
    if (currentMovement.right == true) {
        this._xPos += 5;
    } else if (currentMovement.left == true) {
      this._xPos -= 5;
    }
  }

  /**
  * Render coordinates on the Dom
  */
  public render(){
    this._el.style.bottom = this._yPos + 'px';
    this._el.style.left = this._xPos + 'px';
  }

  /**
  * Get the Element (DOM) representation
  * @return {any} The el value
  */
  get el(): any{
    return this._el;
  }
}
