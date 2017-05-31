class Credit {

    private _amount: number;
    private _el: HTMLElement = document.createElement('div');

    constructor() {

    }

    public render() {
        const parent = document.querySelector('#bar');
        this._el;
        this._el.id = 'credit';
        parent.appendChild(this._el);
    }
}