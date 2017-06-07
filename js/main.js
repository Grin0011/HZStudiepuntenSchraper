var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bar = (function () {
    function Bar(id) {
        this._el = document.createElement('div');
        this._id = id;
    }
    Bar.prototype.render = function () {
        var parent = document.querySelector('.container');
        this._el.id = 'bar' + this._id;
        this._el.className = 'bar';
        parent.appendChild(this._el);
    };
    Object.defineProperty(Bar.prototype, "el", {
        get: function () {
            return this._el;
        },
        enumerable: true,
        configurable: true
    });
    Bar.prototype.getId = function () {
        return this._id;
    };
    return Bar;
}());
var Credit = (function () {
    function Credit(game) {
        this._el = document.createElement('div');
        this._className = 'credit';
        this._baseUrl = './assets/svg/';
        this._game = game;
    }
    Object.defineProperty(Credit.prototype, "el", {
        get: function () {
            return this._el;
        },
        enumerable: true,
        configurable: true
    });
    Credit.prototype.randomBar = function () {
        var idx = Math.floor(Math.random() * this._game.bars.length);
        var bar = this._game.bars[idx];
        if (bar === this._lastBar) {
            return this.randomBar();
        }
        this._lastBar = bar;
        return bar;
    };
    Credit.prototype.render = function () {
        if (!document.getElementById('cc')) {
            if (this._lastBar !== undefined) {
                var remLastBar = document.querySelector('#bar' + this._lastBar.getId());
                remLastBar.innerHTML = '';
            }
            var currentBar = this.randomBar();
            var barElement = document.querySelector('#bar' + currentBar.getId());
            var creditElement = document.createElement('div');
            creditElement.id = 'cc';
            creditElement.classList.add(this._className, 'show');
            barElement.appendChild(creditElement);
        }
    };
    return Credit;
}());
var CreditTweeEnEenHalfEC = (function (_super) {
    __extends(CreditTweeEnEenHalfEC, _super);
    function CreditTweeEnEenHalfEC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreditTweeEnEenHalfEC;
}(Credit));
var CreditVijfEC = (function (_super) {
    __extends(CreditVijfEC, _super);
    function CreditVijfEC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreditVijfEC;
}(Credit));
var Game = (function () {
    function Game() {
        var _this = this;
        this._el = document.querySelector('#body');
        this._name = 'HZ Studiepunten Schraper';
        this._timeUp = false;
        this.loop = function () {
            _this._credit.render();
            _this.move();
            _this.collide();
            _this.render();
            setTimeout(_this.loop, 1000 / 60);
        };
        this._player = new Player('player.png');
        this._credit = new Credit(this);
        this._windowListener = new WindowListener();
        this._collision = new Collision(this, this.player);
        this.createBars();
        for (var index in this._bars) {
            this._bars[index].render();
        }
        this._credit.render();
        this.render();
        this.renderScore();
    }
    Game.prototype.randomTime = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    Game.prototype.createBars = function () {
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
    };
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
    Object.defineProperty(Game.prototype, "bars", {
        get: function () {
            return this._bars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "credit", {
        get: function () {
            return this._credit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "score", {
        get: function () {
            return this._score;
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
    Game.prototype.renderScore = function () {
        var gameInformation = document.createElement('div');
        gameInformation.className = 'gameInformation';
        this._el.appendChild(gameInformation);
        this._score = new Score(gameInformation);
    };
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
        this.xPos = 0;
        this.yPos = 0;
        this._imageName = img;
        var game = document.querySelector('.container');
        this._el.setAttribute('src', this._baseUrl + this._imageName);
        this._el.id = 'player';
        game.appendChild(this._el);
        this.keyboardListener = new KeyListener();
    }
    Player.prototype.move = function () {
        var currentMovement = this.keyboardListener.keyevents;
        if (this.yPos > 0) {
            this.yPos -= 1;
        }
        if (this.yPos < 0) {
            this.yPos = +1;
        }
        if (currentMovement.up == true) {
            this.yPos += 5;
        }
        if (currentMovement.down == true) {
            this.yPos -= 10;
        }
        if (currentMovement.right == true) {
            this.xPos += 5;
        }
        else if (currentMovement.left == true) {
            this.xPos -= 5;
        }
    };
    Player.prototype.render = function () {
        this._el.style.bottom = this.yPos + 'px';
        this._el.style.left = this.xPos + 'px';
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
var Score = (function () {
    function Score(element) {
        this._score = 0;
        this._parent = element;
        this.render();
    }
    Score.prototype.resetScore = function (score) {
        this._score = score;
        this._el.innerHTML = String(this._score);
    };
    Score.prototype.addScore = function () {
        console.log('in addscore');
        this._score += 5;
        console.log(this._score);
        this._el.innerHTML = String(this._score);
    };
    Score.prototype.render = function () {
        this._el = document.createElement('div');
        this._el.className = 'score';
        this._el.innerHTML = String(this._score);
        this._parent.appendChild(this._el);
    };
    return Score;
}());
var Collision = (function () {
    function Collision(game, player) {
        this._keyboardListener = new KeyListener();
        this._game = game;
        this._player = player;
    }
    Collision.prototype.collide = function () {
        var window = this._game.windowListener;
        var player = this._game.player.el;
        var credit = document.getElementById('cc');
        for (var index in this._game.bars) {
            if (player.offsetLeft + player.offsetWidth >= this._game.bars[index].el.offsetLeft && player.offsetLeft <= this._game.bars[index].el.offsetLeft + this._game.bars[index].el.offsetWidth) {
                if (player.offsetTop + player.offsetHeight == this._game.bars[index].el.offsetTop) {
                    this._game.player.yPos = window.windowHeight - this._game.bars[index].el.offsetTop;
                    this._keyUp();
                }
            }
        }
        if (credit) {
            for (var index in this._game.bars) {
                if (credit.parentNode == this._game.bars[index].el) {
                    if (player.offsetLeft + player.offsetWidth >= this._game.bars[index].el.offsetLeft + credit.offsetLeft && player.offsetLeft <= this._game.bars[index].el.offsetLeft + credit.offsetLeft + credit.offsetWidth) {
                        if (player.offsetTop + player.offsetHeight >= this._game.bars[index].el.offsetTop + credit.offsetTop + credit.offsetHeight && player.offsetTop <= this._game.bars[index].el.offsetTop + credit.offsetTop) {
                            console.log('score wordt toegevoegd');
                            this._game.score.addScore();
                            credit.remove();
                        }
                    }
                }
            }
        }
    };
    Collision.prototype._keyUp = function () {
        if (this._keyboardListener.keyevents.up == true) {
            this._player.move();
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
//# sourceMappingURL=main.js.map