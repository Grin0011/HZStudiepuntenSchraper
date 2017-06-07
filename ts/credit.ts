class Credit {

    private _amount: number;
    private _game: Game;
    private _el: HTMLElement = document.createElement('div');
    private _className: string = 'credit';
    private _image: string;
    private _baseUrl: string = './assets/svg/';
    private _lastBar: Bar;

    constructor(game: Game) {
        this._game = game;
        //this._image = image;
    }

    /**
    * Get the Element (DOM) representation
    * @return {any} The el value
    */
    get el(): any {
        return this._el;
    }

    private randomBar(): Bar {
        const idx = Math.floor(Math.random() * this._game.bars.length);
        const bar = this._game.bars[idx];
        if (bar === this._lastBar) {
            return this.randomBar();
        }
        this._lastBar = bar;
        return bar;
    }

    public render(): void {
        if (!document.getElementById('cc')) {
        if(this._lastBar !== undefined) {
            const remLastBar = document.querySelector('#bar'+this._lastBar.getId())
            remLastBar.innerHTML = '';
        }
        // kies een bar
        let currentBar = this.randomBar();
        const barElement = document.querySelector('#bar'+currentBar.getId());
        // maak element
        const creditElement = document.createElement('div');
        creditElement.id = 'cc';
        creditElement.classList.add(this._className, 'show');
        // voeg element toe aan de bar
        barElement.appendChild(creditElement);
        }
    }
}