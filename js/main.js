var Game = (function () {
    function Game() {
        var _this = this;
        this._el = document.querySelector('#body');
        this._name = 'HZ Studiepunten Schraper';
        this.loop = function () {
            _this.move();
            _this.collide();
            _this.render();
            setTimeout(_this.loop, 1000 / 60);
        };
        this._player = new Player('player.png');
        this._windowListener = new WindowListener();
        this._collision = new Collision(this);
        this.render();
    }
    Game.prototype.start = function () {
        this.loop();
    };
    Game.prototype.render = function () {
        this._player.render();
    };
    Game.prototype.move = function () {
        this._player.move();
    };
    Game.prototype.collide = function () {
        this._collision.collide();
    };
    Object.defineProperty(Game.prototype, "player", {
        get: function () {
            return this._player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "windowListener", {
        get: function () {
            return this._windowListener;
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
var app = {};
(function () {
    var init = function () {
        app.game = new Game();
        app.game.start();
    };
    window.addEventListener('load', init);
})();
var Player = (function () {
    function Player(img) {
        this._el = document.createElement('img');
        this._baseUrl = './assets/';
        this._className = 'player';
        this._xPos = 0;
        this._yPos = 0;
        this._imageName = img;
        var game = document.querySelector('.container');
        this._el.setAttribute('src', this._baseUrl + this._imageName);
        this._el.className = 'player';
        game.appendChild(this._el);
        this._keyboardListener = new KeyListener();
    }
    Player.prototype.move = function () {
        var currentMovement = this._keyboardListener.keyevents;
        if (this._yPos > 0) {
            this._yPos -= 1;
        }
        if (this._yPos < 0) {
            this._yPos = +1;
        }
        if (currentMovement.up == true) {
            this._yPos += 5;
        }
        if (currentMovement.down == true) {
            this._yPos -= 10;
        }
        if (currentMovement.right == true) {
            this._xPos += 5;
        }
        else if (currentMovement.left == true) {
            this._xPos -= 5;
        }
    };
    Player.prototype.render = function () {
        this._el.style.bottom = this._yPos + 'px';
        this._el.style.left = this._xPos + 'px';
    };
    Object.defineProperty(Player.prototype, "el", {
        get: function () {
            return this._el;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
var Collision = (function () {
    function Collision(game) {
        this._game = game;
    }
    Collision.prototype.collide = function () {
        var window = this._game.windowListener;
        var player = this._game.player.el;
        if (player.offsetLeft <= 0) {
            console.log('left border');
        }
        if (player.offsetLeft >= window.windowWidth) {
            console.log('right border');
        }
    };
    return Collision;
}());
var KeyListener = (function () {
    function KeyListener() {
        var _this = this;
        this._keyevents = { left: false, right: false, up: false, down: false };
        this.keyUpDownHandler = function (e) {
            if (e.type == 'keydown') {
                if (e.key == 'ArrowLeft')
                    _this._keyevents.left = true;
                else if (e.key == 'ArrowUp')
                    _this._keyevents.up = true;
                else if (e.key == 'ArrowRight')
                    _this._keyevents.right = true;
                else if (e.key == 'ArrowDown')
                    _this._keyevents.down = true;
            }
            if (e.type == 'keyup') {
                if (e.key == 'ArrowLeft')
                    _this._keyevents.left = false;
                else if (e.key == 'ArrowUp')
                    _this._keyevents.up = false;
                else if (e.key == 'ArrowRight')
                    _this._keyevents.right = false;
                else if (e.key == 'ArrowDown')
                    _this._keyevents.down = false;
            }
        };
        window.addEventListener("keydown", this.keyUpDownHandler);
        window.addEventListener("keyup", this.keyUpDownHandler);
    }
    Object.defineProperty(KeyListener.prototype, "keyevents", {
        get: function () {
            return this._keyevents;
        },
        enumerable: true,
        configurable: true
    });
    return KeyListener;
}());
var WindowListener = (function () {
    function WindowListener() {
        this.listen(0);
    }
    WindowListener.prototype.listen = function (interval) {
        if (!window.innerWidth) {
            if (!(document.documentElement.clientWidth == 0)) {
                this._windowWidth = document.documentElement.clientWidth;
                this._windowHeight = document.documentElement.clientHeight;
            }
            else {
                this._windowWidth = document.body.clientWidth;
                this._windowHeight = document.body.clientHeight;
            }
        }
        else {
            this._windowWidth = window.innerWidth;
            this._windowHeight = window.innerHeight;
        }
    };
    Object.defineProperty(WindowListener.prototype, "windowHeight", {
        get: function () {
            return this._windowHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowListener.prototype, "windowWidth", {
        get: function () {
            return this._windowWidth;
        },
        enumerable: true,
        configurable: true
    });
    return WindowListener;
}());
var Vector = (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._size = null;
        this._angle = null;
        this._x = x;
        this._y = y;
    }
    Vector.prototype.x = function () {
        return this._x;
    };
    Vector.prototype.y = function () {
        return this._y;
    };
    Vector.prototype.size = function () {
        if (!this._size) {
            this._size = Math.sqrt(Math.pow(this._x, 2) +
                Math.pow(this._y, 2));
        }
        return this._size;
    };
    Vector.prototype.angle = function () {
        if (!this._angle) {
            this._size = Math.atan(this._y / this._x);
        }
        return this._angle;
    };
    Vector.prototype.add = function (input) {
        return new Vector(this._x + input.x(), this._y + input.y());
    };
    Vector.prototype.subtract = function (input) {
        return new Vector(this._x - input.x(), this._y - input.y());
    };
    Vector.prototype.distance = function (input) {
        return this.subtract(input).size();
    };
    Vector.prototype.scale = function (scalar) {
        return new Vector(this._x * scalar, this._y * scalar);
    };
    Vector.prototype.mirror_X = function () {
        return new Vector(this._x, this._y * -1);
    };
    Vector.prototype.mirror_Y = function () {
        return new Vector(this._x * -1, this._y);
    };
    return Vector;
}());
//# sourceMappingURL=main.js.map