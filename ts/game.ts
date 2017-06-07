class Game {

    private _el: Element = document.querySelector('#body');
    private _name: string = 'HZ Studiepunten Schraper';
    private _player: Player;
    private _bars: Array<Bar>;
    private _credit: Credit;
    private _collision: Collision;
    private _windowListener: WindowListener;
    private _score: Score;
    private _timeUp: boolean = false;

    /**
     * Create a game
     */
    constructor() {
        this._player = new Player('player.png');
        this._credit = new Credit(this, 'credit');
        this._windowListener = new WindowListener();
        this._collision = new Collision(this, this.player);
        this.createBars();
        for (let index in this._bars) {
            this._bars[index].render();
        }
        this._credit.render();
        
        this.render();
        this.renderScore();
    }

     /**
     * Renders a random time with a min and a max
     * @param {number} min - minimal time
     * @param {number} max - maximal time
     */
    private randomTime(min : number, max : number) : number {
        return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * Create bars
     */
    public createBars() {
        this._bars = [
            new Bar(0),
            new Bar(1),
            new Bar(2),
            new Bar(3),
            new Bar(4),
            new Bar(5),
            new Bar(6),
            new Bar(7),
            new Bar(8),
            new Bar(9),
            new Bar(10),
            new Bar(11),
            new Bar(12)
        ];
        //console.dir(this._bars);
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
        // const time = this.randomTime(1000, 5000);
        // this._credit.render();
        // setTimeout(() => {
        //     if(!this._timeUp) this.loop();
        // }, time);

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
    * @return {Bar} The bar value
    */
    get bars(): Array<Bar> {
        return this._bars;
    }

    /**
   * Get the credit
   * @return {Credit} The credit value
   */
    get credit(): Credit {
        return this._credit;
    }

    /**
   * Get the score
   * @return {Score} The score value
   */
    get score(): Score {
        return this._score;
    }

    /**
    * Get the windowListener
    * @return {WindowListener} The windowListener value
    */
    get windowListener(): WindowListener {
        return this._windowListener;
    }
    /**
     * Render scoreboard
     */
    private renderScore() {
        //create a container for the game
        const gameInformation = document.createElement('div');
        gameInformation.className = 'gameInformation';
        this._el.appendChild(gameInformation);

        //create scoreboard
        this._score = new Score(gameInformation);
    }
}