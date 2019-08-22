"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
