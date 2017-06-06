class Bar {
    private _el: HTMLElement = document.createElement('div');
    private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    public render() {
        const parent = document.querySelector('.container');
        // const bar = document.createElement('div');
        //this._el;
        this._el.id = 'bar'+this._id;
        this._el.className = 'bar';
        parent.appendChild(this._el);

    }

    /**
    * Get the Element (DOM) representation
    * @return {any} The el value
    */
    get el(): any {
        return this._el;
    }

    public getId(): number {
        return this._id;
    }
 }