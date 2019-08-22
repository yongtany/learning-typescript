"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j + 1];
                    this.collection[j + 1] = this.collection[j];
                    this.collection[j] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
