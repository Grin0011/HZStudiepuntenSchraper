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
    function Credit(game, className) {
        this._el = document.createElement('div');
        this._game = game;
        this._className = className;
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
        if (this._lastBar !== undefined) {
            var remLastBar = document.querySelector('#bar' + this._lastBar.getId());
            remLastBar.innerHTML = '';
        }
        var currentBar = this.randomBar();
        var barElement = document.querySelector('#bar' + currentBar.getId());
        var creditElement = document.createElement('div');
        creditElement.classList.add(this._className, 'show');
        barElement.appendChild(creditElement);
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
        this.loop = function () {
            _this.move();
            _this.collide();
            _this.render();
            setTimeout(_this.loop, 1000 / 60);
        };
        this._player = new Player('player.png');
        this._credit = new Credit(this, 'credit');
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
        console.dir(this._bars);
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
        this._score++;
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
        var bar0 = this._game.bars[0].el;
        var bar1 = this._game.bars[1].el;
        var bar2 = this._game.bars[2].el;
        var bar3 = this._game.bars[3].el;
        var bar4 = this._game.bars[4].el;
        var bar5 = this._game.bars[5].el;
        var bar6 = this._game.bars[6].el;
        var bar7 = this._game.bars[7].el;
        var bar8 = this._game.bars[8].el;
        var bar9 = this._game.bars[9].el;
        var bar10 = this._game.bars[10].el;
        var bar11 = this._game.bars[11].el;
        var bar12 = this._game.bars[12].el;
        var credit = this._game.credit.el;
        if (player.offsetLeft <= 0) {
            console.log('left border');
        }
        if (player.offsetLeft >= window.windowWidth) {
            console.log('right border');
        }
        if (player.offsetLeft + player.offsetWidth >= bar0.offsetLeft && player.offsetLeft <= bar0.offsetLeft + bar0.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar0.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar0.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar1.offsetLeft && player.offsetLeft <= bar1.offsetLeft + bar1.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar1.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar1.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar2.offsetLeft && player.offsetLeft <= bar2.offsetLeft + bar2.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar2.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar2.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar3.offsetLeft && player.offsetLeft <= bar3.offsetLeft + bar3.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar3.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar3.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar4.offsetLeft && player.offsetLeft <= bar4.offsetLeft + bar4.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar4.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar4.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar5.offsetLeft && player.offsetLeft <= bar5.offsetLeft + bar5.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar5.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar5.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar6.offsetLeft && player.offsetLeft <= bar6.offsetLeft + bar6.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar6.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar6.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar7.offsetLeft && player.offsetLeft <= bar7.offsetLeft + bar7.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar7.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar7.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar8.offsetLeft && player.offsetLeft <= bar8.offsetLeft + bar8.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar8.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar8.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar9.offsetLeft && player.offsetLeft <= bar9.offsetLeft + bar9.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar9.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar9.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar9.offsetLeft && player.offsetLeft <= bar9.offsetLeft + bar9.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar9.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar9.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar10.offsetLeft && player.offsetLeft <= bar10.offsetLeft + bar10.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar10.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar10.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar11.offsetLeft && player.offsetLeft <= bar11.offsetLeft + bar11.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar11.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar11.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft + player.offsetWidth >= bar12.offsetLeft && player.offsetLeft <= bar12.offsetLeft + bar12.offsetWidth) {
            if (player.offsetTop + player.offsetHeight == bar12.offsetTop) {
                this._game.player.yPos = window.windowHeight - bar12.offsetTop;
                this._keyUp();
            }
        }
        if (player.offsetLeft == credit.offsetLeft + bar1.offsetLeft) {
            if (player.offsetTop == bar1.offsetTop + credit.offsetTop) {
                console.log("Get the credit");
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