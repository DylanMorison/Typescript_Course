"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        this.collection.
            for(let, i = 0);
        i < length;
        i++;
        {
            for (var j = 0; j < length - i - 1; j++) {
                // if arr of numbers
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftNumber = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftNumber;
                }
                // if collection is a string, do this instead
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
