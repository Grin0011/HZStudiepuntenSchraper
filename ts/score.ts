/** Class representing a scoreboard */
class Score {

    private _score: number;
    private _el: Element;
    private _infoBar: HTMLElement = document.getElementById('infoBar');
    private _parent: Element;
    private _game: Game;

    /**
     * Create a Scoreboard.
     * @param {Element} element - the parent element
     */
    constructor(element: Element) {
        this._score = 0;
        this._parent = element;
        this.render();
    }

    /**
     * Resets the score of the scoreboard.
     * @param {number} score - The string containing two comma-separated numbers
     */
    public resetScore(score: number) {
        this._score = score;
        this._el.innerHTML = String(this._score); //nicer if in render()
    }

    /**
     * Add the score with five.
     */
    public addScore() {
        console.log('in addscore');
        this._score += 5;
        console.log(this._score);
        this._el.innerHTML = String(this._score); //nicer if in render()
    }

    /**
     * Renders the DOM representation of scoreboard (better to use a template)
     */
    public render() {
        //create scoreboard
        this._el = document.createElement('div');
        this._el.className = 'score';
        this._el.innerHTML = String(this._score);
        this._parent.appendChild(this._el);
    }

    //TODO: Melding als de score 60 is
        // Je hebt je propodeuse jaar gehaald

    //TODO: Melding als de score 240 is
        // Je hebt de opleiding gehaald
        // Reset score

}
