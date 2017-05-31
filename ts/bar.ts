class Bar {
    private _el: HTMLElement = document.createElement('div');

    constructor() {
    }

    public render() {
        const parent = document.querySelector('.container');
        // const bar = document.createElement('div');
        this._el;
        this._el.id = 'bar';
        parent.appendChild(this._el);
    }

    /**
    * Get the Element (DOM) representation
    * @return {any} The el value
    */
    get el(): any {
        return this._el;
    }
}