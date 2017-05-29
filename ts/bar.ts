class Bar {

    constructor() {

    }

    public render() {
        const parent = document.querySelector('.container');
        const bar = document.createElement('div');
        bar.id = 'bar';
        parent.appendChild(bar);
    }
}