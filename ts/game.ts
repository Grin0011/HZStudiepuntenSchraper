class Game {

    private _el: Element = document.querySelector('#body');
    private _name: string = 'HZ Studiepunten Schraper';
    private _player: Player;
    private _collision: Collision;
    private _windowListener: WindowListener;


    /**
      * Create a game
      */
    constructor() {
        this._player = new Player('player.png');
        this._windowListener = new WindowListener();
        this._collision = new Collision(this);
        this.render();
    }
    /**
  * start the game
  */
    private start() {
        this.loop();
    }

    /**
    * Game loop 60 frames per seconds
    */
    private loop = () => {
        this.move();
        this.collide();
        this.render();
        setTimeout(this.loop, 1000 / 60);
    }

    /**
    * Render the game objects
    */
    public render() {
        this._player.render();
    }

    /**
    * Move all game objects
    */
    public move() {
        this._player.move();
    }

    /**
    * Check collision of different game objects
    */
    private collide() {
        this._collision.collide();
    }


    /**
    * Get the player
    * @return {Player} The player value
    */
    get player(): Player {
        return this._player;
    }

    /**
    * Get the bar
    * @return {Bar} The player value
    */
    get bar(): Bar {
        return this._bar;
    }

    /**
    * Get the windowListener
    * @return {WindowListener} The windowListener value
    */
    get windowListener(): WindowListener {
        return this._windowListener;
    }
}