'use strict'
// Visa utvecklare felåtgärdsmeddelanden
var DEBUG = false;
function showDbg() {
    if (DEBUG) {
        console.log.apply(this, arguments);
    }
}


exports.max = function max(array) {
    // base-c : one item left in array
    // compare two items, keep larger throw out smaller
    // if only item left in array exit
    showDbg("array is: ", array);
    if (array.length == 0 || array.length == 1) {
        return array[0];
    }
    if (array[0] > array[1]) {
        array.splice(1, 1);
    } else {
        array.shift();
    }
    return max(array);
}


exports.min = function min(array) {
    // base-c : one item left in array
    // compare two items, keep smaller throw out larger
    // if only item left in array exit
    showDbg("array is: ", array);
    if (array.length == 0 || array.length == 1) {
        return array[0];
    }
    if (array[0] < array[1]) {
        array.splice(1, 1);
    } else {
        array.shift();
    }
    return min(array);
}

exports.filter = function filter(array, fn) {
    let tempArr = []; // temp container 4 matched array element
    showDbg("array: ", array);
    showDbg("array size: ", array.length);

    if (array.length == 0) {
        showDbg("base-c reached:", array);
        return array;
    }

    if (!fn(array[0])) { // test 4 boolean FALSE
        showDbg("no match");
        showDbg("slicing index[0]: ", array[0]);
        return filter(array.slice(1), fn); // remove element from array
    } else { // test 4 boolean TRUE
        showDbg("match");
        tempArr[0] = array[0]; // copy match element to new array
        return tempArr.concat(filter(array.slice(1), fn)); /* concatinate matched element to end of origianl array, then remove (the match) from original array and recurse filter function */
    }
}

exports.reject = function reject(array, fn) {
    let tempArr = []; // temp container 4 matched array element
    showDbg("array: ", array);
    showDbg("array size: ", array.length);

    if (array.length == 0) {
        showDbg("base-c reached:", array);
        return array;
    }

    if (!fn(array[0])) { // test 4 boolean FALSE
        showDbg("not match");
        showDbg("slicing index[0]: ", array[0]);
        tempArr[0] = array[0];
        return tempArr.concat(reject(array.slice(1), fn)); /* concatinate matched element to end of origianl array, then remove (the match) from original array and recurse filter function */
    } else { // test 4 boolean TRUE
        showDbg("match");
        return reject(array.slice(1), fn);
        // return filter(array, fn);
        //return filter(array.slice(1), fn); // remove element from array
    }
}

exports.every = function every(array, fn) {
    if (array.length == 0) {
        showDbg("base-c reached:", array);
        return true;
    }

    if (!fn(array[0])) {
        showDbg("false");
        return false;
    } else {
            showDbg("true");
            return every(array.slice(1), fn);
    }
}

exports.some = function some(array, fn) {
    // let flag = false;
    console.log(array);
        if (array.length == 0) {
            console.log("base-c reached:", array);
            return false;
        }

    if (!fn(array[0])) {
        console.log("false");
        return some(array.slice(1), fn);
    } else {
        console.log("true");
        return true;
    }

}

exports.none = function none(array, fn) {
    // returns true if 0 items in the array match
    console.log(array);
        if (array.length == 0) {
            showDbg("base-c reached:", array);
            return true;
        }

    if (!fn(array[0])) {
        showDbg("false");
        return none(array.slice(1), fn);
    } else {
        showDbg("true");
        return false;
    }
}

exports.map = function map(array, fn) {

    console.log(array);

        if (array.length === 0) {
            console.log("base-c reached:", array);
            return [];
        }
        // REVIEW THIS
        return [fn(arr
            ay[0])].concat(map(array.slice(1), fn));
};

exports.join = function join(array, delimiter) {}

exports.split = function split(string, delimiter) {}

exports.reduce = function reduce(array, fn, initialValue) {

    
}

exports.indexOf = function indexOf(array, value, position = 0) {}

exports.leftPad = function leftPad(string, padNum, delimiter) {}

exports.flatten = function flatten(array) {}

exports.binarySearch = function binarySearch(array, value, min = 0, max = array.length) {}
