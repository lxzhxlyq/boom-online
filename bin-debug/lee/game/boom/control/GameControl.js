var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 * 方向控制类
 */
var boom;
(function (boom) {
    var GameControl = (function (_super) {
        __extends(GameControl, _super);
        function GameControl() {
            var _this = _super.call(this) || this;
            //按钮半径
            _this._radius = 20;
            //按钮间隔
            _this._space = _this._radius / 2;
            _this._status = "";
            _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        GameControl.prototype.onAddToStage = function (event) {
            var _height = this.stage.stageHeight;
            this.up = new egret.Shape();
            this.up.x = this._radius * 3 + this._space;
            this.up.y = _height - this._radius * 5 - this._space;
            this.up.graphics.beginFill(0x000000, 0.5);
            this.up.graphics.lineStyle(2);
            this.up.graphics.drawCircle(0, 0, this._radius);
            this.up.graphics.endFill();
            this.up.touchEnabled = true;
            this.down = new egret.Shape();
            this.down.x = this._radius * 3 + this._space;
            this.down.y = _height - this._radius - this._space;
            this.down.graphics.beginFill(0x000000, 0.5);
            this.down.graphics.lineStyle(2);
            this.down.graphics.drawCircle(0, 0, this._radius);
            this.down.graphics.endFill();
            this.down.touchEnabled = true;
            this.left = new egret.Shape();
            this.left.x = this._radius + this._space;
            this.left.y = _height - this._radius * 3 - this._space;
            this.left.graphics.beginFill(0x000000, 0.5);
            this.left.graphics.lineStyle(2);
            this.left.graphics.drawCircle(0, 0, this._radius);
            this.left.graphics.endFill();
            this.left.touchEnabled = true;
            this.right = new egret.Shape();
            this.right.x = this._radius * 5 + this._space;
            this.right.y = _height - this._radius * 3 - this._space;
            this.right.graphics.beginFill(0x000000, 0.5);
            this.right.graphics.lineStyle(2);
            this.right.graphics.drawCircle(0, 0, this._radius);
            this.right.graphics.endFill();
            this.right.touchEnabled = true;
            this.addChild(this.up);
            this.addChild(this.down);
            this.addChild(this.left);
            this.addChild(this.right);
            var _obj = this;
            this.startEvent = new boom.ControlEvent(boom.ControlEvent.START);
            this.stopEvent = new boom.ControlEvent(boom.ControlEvent.STOP);
            //触屏监听
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.handleTouch, this);
            this.up.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doUp, this);
            this.up.addEventListener(egret.TouchEvent.TOUCH_END, this.doStop, this);
            this.up.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.doStop, this);
            this.down.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doDown, this);
            this.down.addEventListener(egret.TouchEvent.TOUCH_END, this.doStop, this);
            this.down.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.doStop, this);
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doLeft, this);
            this.left.addEventListener(egret.TouchEvent.TOUCH_END, this.doStop, this);
            this.left.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.doStop, this);
            this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doRight, this);
            this.right.addEventListener(egret.TouchEvent.TOUCH_END, this.doStop, this);
            this.right.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.doStop, this);
            //键盘监听
            document.addEventListener("keydown", function (e) {
                var currStatus = "";
                switch (e.keyCode) {
                    case 38:
                        currStatus = "up";
                        break;
                    case 40:
                        currStatus = "down";
                        break;
                    case 37:
                        currStatus = "left";
                        break;
                    case 39:
                        currStatus = "right";
                        break;
                }
                if (currStatus != _obj._status) {
                    _obj._status = currStatus;
                    _obj.commonDo();
                }
                return false;
            });
            document.addEventListener("keyup", function (e) {
                _obj._status = "";
                _obj.dispatchEvent(_obj.stopEvent);
            });
        };
        GameControl.prototype.doUp = function () {
            this._status = "up";
            this.commonDo();
        };
        GameControl.prototype.doDown = function () {
            this._status = "down";
            this.commonDo();
        };
        GameControl.prototype.doLeft = function () {
            this._status = "left";
            this.commonDo();
        };
        GameControl.prototype.doRight = function () {
            this._status = "right";
            this.commonDo();
        };
        GameControl.prototype.commonDo = function () {
            this.startEvent._status = this._status;
            this.dispatchEvent(this.startEvent);
        };
        GameControl.prototype.doStop = function () {
            this._status = "";
            this.dispatchEvent(this.stopEvent);
        };
        GameControl.prototype.handleTouch = function (evt) {
            console.log(evt.target.x);
            console.log(evt.target.y);
        };
        return GameControl;
    }(egret.DisplayObjectContainer));
    boom.GameControl = GameControl;
    __reflect(GameControl.prototype, "boom.GameControl");
})(boom || (boom = {}));
//# sourceMappingURL=GameControl.js.map