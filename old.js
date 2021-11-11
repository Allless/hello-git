function _chunk(arr, size = 1) {
    let newArr = [];
    let subArr = [];
    for (let i = 0; i < arr.length; i += size) {
        for (let j = 0; j < size && i + j < arr.length; j++) {
            subArr.push(arr[i + j]);
        }
        newArr.push(subArr);
        subArr = [];
    }
    return newArr;
}

function _compact(arr) {
    let newArr = [];
    for (let i of arr) {
        if (i) {
            newArr.push(i);
        }
    }
    return newArr;
}

function _concat(arr, ...args) {
    let newArr = [...arr];
    for (let i of args) {
        newArr.push(i);
    }
    return newArr;
}

function _differenceWith(arr1, arrs, fun) {
    let newArr = [];
    for (let element of arr1) {
        let break1 = false;
        let uniq = true;
        for (let arr of arrs) {
            if (break1) {
                break;
            }
            for (let element2 of arr) {
                if (fun(element, element2)) {
                    uniq = false;
                }
            }
        }
        if (uniq) {
            newArr.push(element);
        }
    }
    return newArr;
}

function _drop(arr, n = 1) {
    return arr.slice(n);
}

function _fromPairs(arr) {
    let newObj = {};
    for (let subArr of arr) {
        if (subArr.length == 2) {
            newObj[subArr[0]] = subArr[1];
        }
    }
    return newObj;
}

function _intersection(...arrays) {
    let newArr = [];
    for (let i of arrays[0]) {
        let contains = true;
        for (let arr of arrays) {
            if (!arr.includes(i)) {
                contains = false;
                break;
            }
        }
        if (contains == true) {
            newArr.push(i);
        }
    }
    return newArr;
}

function _zip(...arrays) {
    let newArr = [];
    for (let i in arrays[0]) {
        subArr = [];
        for (let arr of arrays) {
            subArr.push(arr[i]);
        }
        newArr.push(subArr);
    }
    return newArr;
}

function _unzip(array) {
    let newArr = [];
    for (let i in array[0]) {
        subArr = [];
        for (let arr of array) {
            subArr.push(arr[i]);
        }
        newArr.push(subArr);
    }
    return newArr;
}

function _xor(...arrays) {
    let newArr = [];
    for (let arr of arrays) {
        for (let i of arr) {
            let count = 0;
            for (let otherArr of arrays) {
                if (otherArr.includes(i)) {
                    count++;
                    if (count > 1) {
                        break;
                    }
                }
            }
            if (count == 1) {
                newArr.push(i);
            }
        }
    }

    return newArr;
}

function _groupBy(coll, fun) {
    let newObj = {};
    if (fun === 'length') {
        for (let i of coll) {
            if (newObj.hasOwnProperty(i.length)) {
                newObj[i.length] = [...newObj[i.length], i];
            } else {
                newObj[i.length] = [i];
            }
        }
        return newObj;
    }
    for (let i of coll) {
        if (newObj.hasOwnProperty(fun(i))) {
            newObj[fun(i)] = [...newObj[fun(i)], i];
        } else {
            newObj[fun(i)] = [i];
        }
    }
    return newObj;
}
function a(x) {
    return x.length;
}

function _identity(value) {
    return value;
}
function _reject(coll, fun = _identity) {
    let newArr = [];
    for (let element in coll) {
        if (fun(element) == false) {
            newArr.push(element);
        }
    }
    return newArr;
}

function _some(coll, fun = _identity) {
    let result = true;
    for (let element of coll) {
        if (fun(element) == false) {
            result = false;
            break;
        }
    }
    return result;
}

function _sortBy(coll, fun = _identity) {
    let newArr = [...coll];
    let len = newArr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i; j++) {
            let el1 = newArr[j];
            let el2 = newArr[j + 1];
            if (fun(el1) > fun(el2)) {
                newArr[j] = el2;
                newArr[j + 1] = el1;
            }
        }
    }
    return newArr;
}

function insertWhitespace(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str[i];
        if (i + 1 == str.length) {
            break;
        }
        let lowCase = str[i] === str[i].toLowerCase();
        if (lowCase && str[i + 1] === str[i + 1].toUpperCase()) {
            newStr += ' ';
        }
    }
    return newStr;
}
function getArgsIndex(str) {
    let bracketCount = 0;
    let firstIndex;
    let lastIndex;
    for (let i in str) {
        if (str[i] == '(') {
            if (bracketCount == 0) {
                firstIndex = i;
            }
            bracketCount++;
        } else if (str[i] == ')') {
            bracketCount--;
            if (bracketCount == 0) {
                lastIndex = i;
                return [firstIndex, lastIndex];
            }
        }
    }
}

function getBodyIndex(str) {
    let bracketCount = 0;
    let firstIndex;
    let lastIndex;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == '}') {
            if (bracketCount == 0) {
                lastIndex = i;
            }
            bracketCount++;
        } else if (str[i] == '{') {
            bracketCount--;
            if (bracketCount == 0) {
                firstIndex = i;
                return [firstIndex, lastIndex];
            }
        }
    }
}

function getName(str) {
    let name = '';
    const array = str.split(' ');
    if (array[0][0] != '(') {
        let firstIndex = str.indexOf(' ') + 1;
        const regexp = /[\(=]/;
        let lastIndex = str.match(regexp)['index'];
        name = str.slice(+firstIndex, +lastIndex);
        name = name.trim();
    }
    return name;
}

function getArgs(str) {
    let firstIndex;
    let lastIndex;
    [firstIndex, lastIndex] = getArgsIndex(str);
    myArgs = str.slice(+firstIndex, +lastIndex + 1);
    return myArgs;
}
function getBody(str) {
    let myBody;
    let firstIndex = 0;
    let lastIndex = 0;
    [firstIndex, lastIndex] = getBodyIndex(str);
    myBody = str.slice(+firstIndex, +lastIndex + 1);
    return myBody;
}
function isRegFunc(str) {
    arr = str.split(' ');
    if (arr[0] == 'function') {
        return true;
    }
    return false;
}
function isArrowFunc(str) {
    const argsEnd = getArgsIndex(str)[1];
    const bodyStart = getBodyIndex(str)[0];
    const subStr = str.slice(+argsEnd + 1, +bodyStart);
    if (subStr.includes('=>')) {
        return true;
    }
    return false;
}
function convertFunction(str) {
    if (isRegFunc(str)) {
        let myName = getName(str);
        if (myName) {
            myName = 'const ' + myName + ' = ';
        }
        const myArgs = getArgs(str);
        const myBody = getBody(str);
        const oString = `${myName}${myArgs} => ${myBody}`;
        return oString;
    } else if (isArrowFunc(str)) {
        let myName = 'function ' + getName(str);
        const myArgs = getArgs(str);
        const myBody = getBody(str);
        const oString = `${myName}${myArgs} ${myBody}`;
        return oString;
    } else {
        return 'Wrong input';
    }
}

function dayOfYear(str) {
    const arr = str.split('/');
    let myDate = new Date(arr[2], arr[0] - 1, arr[1]);
    let calcPoint = new Date(arr[2], 0, 1);
    const msInDay = 86400000;
    const ms = myDate.getTime() - calcPoint.getTime();
    console.log(myDate.value, calcPoint.value);
    const days = Math.floor(ms / msInDay) + 1;
    return days;
}

function getDay(str) {
    const arr = str.split('/');
    const myDate = new Date(arr[2], arr[0] - 1, arr[1]);
    const day = myDate.getDay();
    const dayOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    return dayOfWeek[day];
}

function sum(x) {
    return (y) => x + y;
}

function redundant(x) {
    return () => x;
}

function add_suffix(x) {
    return (y) => y + x;
}

function printAfter(func) {
    console.log('Hello, World');
    func();
}

function makeCircle(radius) {
    return {
        getArea() {
            return Math.PI * radius * radius;
        },
        getPerimetr() {
            return Math.PI * radius * 2;
        },
    };
}

function mapping(arr) {
    let obj = {};
    for (let i of arr) {
        obj[i] = i.toUpperCase();
    }
    return obj;
}

function getFrequencies(arr) {
    let obj = {};
    for (let i of arr) {
        if (obj.hasOwnProperty(i)) {
            obj[i] += 1;
        } else {
            obj[i] = 1;
        }
    }
    return obj;
}

function findAndRemove(obj) {
    let finObj = {};
    for (key in obj) {
        let newObj = {};
        for (let sKey in obj[key]) {
            let value = +obj[key][sKey];
            if (!Number.isNaN(value)) {
                newObj[sKey] = value;
            }
        }
        finObj[key] = newObj;
    }
    return finObj;
}

function prefix(str) {
    const arr = str.split(' ');
    let stack = [];
    let res = null;
    for (let i of arr) {
        if ('+*/-%'.includes(i)) {
            stack.push(i);
        } else {
            if (res != null) {
                console.log(res, i);
                switch (stack[stack.length - 1]) {
                    case '+':
                        res += +i;
                        break;
                    case '*':
                        res *= +i;
                        break;
                    case '/':
                        res /= +i;
                        break;
                    case '-':
                        res -= +i;
                        break;
                    case '%':
                        res %= +i;
                        break;
                }
            } else {
                res = +i;
            }
        }
    }
    return res;
}

const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Condoms' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
];

function vendingMachine(products, money, number) {
    number--;
    const coins = [500, 200, 100, 50, 20, 10];
    let newObj = {};
    let price;
    if (products[number]) {
        newObj.product = products[number].name;
        price = products[number].price;
    } else {
        return 'Enter a valid product number';
    }
    if (money >= price) {
        newObj.change = [];
        while (money - price >= 10) {
            for (let i of coins) {
                if (money - i >= price) {
                    newObj.change.push(i);
                    money -= i;
                    break;
                }
            }
        }
    } else {
        return 'Not enougth money for this product';
    }
    return newObj;
}

function _findIndex(arr, fun, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
        switch (typeof fun) {
            case 'function':
                if (fun(arr[i])) {
                    return i;
                }
                break;
            case 'object':
                if (Array.isArray(fun)) {
                    if (arr[i][fun[0]] == fun[1]) {
                        return i;
                    }
                } else {
                    let bool = true;
                    for (let key in fun) {
                        if (arr[i][key] != fun[key]) {
                            bool = false;
                            break;
                        }
                    }
                    if (bool) {
                        return i;
                    }
                }
                break;
            default:
                if (arr[i][fun] == true) {
                    return i;
                }
                break;
        }
    }
}

function _flatten(arr) {
    let newArr = [];
    for (let f of arr) {
        if (typeof f == 'object') {
            for (let j of f) {
                newArr.push(j);
            }
        } else {
            newArr.push(f);
        }
    }
    return newArr;
}

function _flattenDeep(arr) {
    let newArr = [];
    for (let item of arr) {
        if (typeof item == 'object') {
            item = _flattenDeep(item);
            for (let i of item) {
                newArr.push(i);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

function _join(array, seperator = ',') {
    let str = '';
    for (let i in array) {
        if (i != array.length - 1) {
            str += String(array[i]) + seperator;
        } else {
            str += String(array[i]);
        }
    }
    return str;
}

function _indexOf(arr, item, fromInex = 0) {
    for (let i = fromInex; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
}

function _pull(array, ...values) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let item = array[0];
        array.shift();
        console.log(i, item);
        let uniq = true;
        for (let value of values) {
            if (item == value) {
                uniq = false;
                break;
            }
        }
        if (uniq) {
            array.push(item);
        }
    }
}

function _remove(array, values) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let item = array[0];
        array.shift();
        let uniq = true;
        for (let value of values) {
            if (item == value) {
                uniq = false;
                break;
            }
        }
        if (uniq) {
            array.push(item);
        }
    }
}

function _reverse(array) {
    const len = array.length - 1;
    for (let i = 0; i <= len / 2; i++) {
        [array[i], array[len - i]] = [array[len - i], array[i]];
    }
}

function _tail(array, n = 1) {
    return array.slice(n);
}

function _castArray(value) {
    let newArr = [];
    if (arguments.length == 0) {
        return newArr;
    }
    newArr.push(value);
    return newArr;
}

function _every(set, fun = _identity) {
    let every = true;
    for (let i of set) {
        if (!(fun(i) == true)) {
            every = false;
            break;
        }
    }
    return every;
}

function _filter(arr, fun = _identity) {
    let newSet = [];
    for (let i in arr) {
        switch (typeof fun) {
            case 'function':
                if (fun(arr[i])) {
                    newSet.push(arr[i]);
                }
                break;
            case 'object':
                if (Array.isArray(fun)) {
                    if (arr[i][fun[0]] == fun[1]) {
                        newSet.push(arr[i]);
                    }
                } else {
                    let bool = true;
                    for (let key in fun) {
                        if (arr[i][key] != fun[key]) {
                            bool = false;
                            break;
                        }
                    }
                    if (bool) {
                        newSet.push(arr[i]);
                    }
                }
                break;
            default:
                if (arr[i][fun] == true) {
                    newSet.push(arr[i]);
                }
                break;
        }
    }
    return newSet;
}

function depth(arr) {
    let sum = [];
    if (typeof arr != 'object') {
        return 0;
    }
    for (let item of arr) {
        sum.push(depth(item));
    }
    const max = Math.max(...sum);
    return max + 1;
}

function allPairs(array, number) {
    let newArr = [];
    array = _sortBy(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == number) {
                newArr.push([array[i], array[j]]);
            }
        }
    }
    return newArr;
}

function palindromeSieve(array) {
    let newArr = [];
    for (let item of array) {
        console.log(1);
        let resItem = item;
        let cObj = {};
        let count = 0;
        for (let i = 0; i < 10; i++) {
            cObj[i] = -1;
        }
        while (resItem >= 1) {
            let key = resItem % 10;
            resItem = Math.floor(resItem / 10);
            cObj[key] *= -1;
        }
        for (let key in cObj) {
            if (cObj[key] == 1) {
                count++;
            }
        }
        if (count < 2) {
            newArr.push(item);
        }
    }
    return newArr;
}

function champions(array) {
    let chemName;
    let maxScore = 0;
    let maxGoal = 0;
    for (let team of array) {
        let score = 3 * team.wins + team.draws;
        let goaldef = team.scored - team.conceded;
        if (score > maxScore) {
            chemName = team.name;
            maxScore = score;
            maxGoal = goaldef;
        } else if (score == maxScore && goaldef > maxGoal) {
            chemName = team.name;
            maxGoal = goaldef;
        } else if (score == maxScore && goaldef == maxGoal) {
            chemName += team.name;
        }
    }
    return chemName;
}

function slice(arr, start = 0, end = arr.length) {
    let newArr = [];
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function splice(array, index, count = array.length - index, ...add) {
    let newArr = [];
    const length = array.length;
    for (let i = 0; i < length; i++) {
        const res = array.shift();
        if (i < index || i >= index + count) {
            array.push(res);
        } else {
            newArr.push(res);
        }
    }
    return newArr;
}

function find(array, callBack, thisArg) {
    for (let i in array) {
        if (callBack.call(thisArg, array[i]) == true) {
            return +i;
        }
    }
}

function map(array, callBack, thisArg) {
    let newArr = [];
    for (let item of array) {
        const newItem = callBack.call(thisArg, item);
        newArr.push(newItem);
    }
    return newArr;
}

function filter(array, callBack, thisArg) {
    let newArr = [];
    for (let item of array) {
        const willAdd = callBack.call(thisArg, item);
        if (willAdd) {
            newArr.push(item);
        }
    }
    return newArr;
}

function every(array, callBack, thisArg) {
    let isTrue = true;
    for (let item of array) {
        const passed = callBack.call(thisArg, item);
        if (!passed) {
            isTrue = false;
            break;
        }
    }
    return isTrue;
}

function some(array, callBack, thisArg) {
    let isTrue = false;
    for (let item of array) {
        const passed = callBack.call(thisArg, item);
        if (passed) {
            isTrue = true;
            break;
        }
    }
    return isTrue;
}

function reduce(array, callBack, initialValue) {
    let res;
    let firstIndex = 0;
    if (arguments.length == 3) {
        res = initialValue;
    } else {
        res = array[0];
        firstIndex++;
    }
    for (let i = firstIndex; i < array.length; i++) {
        res = callBack(res, array[i], i, array);
    }
    return res;
}

function toAcronym(str) {
    const array = str.split(' ');
    let newStr = '';
    for (let item of array) {
        newStr += item[0].toUpperCase();
    }
    return newStr;
}

function filterByField(array, field) {
    for (let i in array) {
        if (array[i][field] != true) {
            array.splice(i, 1);
            console.log(array);
        }
    }
}

function sum(array) {
    const callBack = (acc, item) => {
        if (item > 18) {
            acc += item;
        }
        console.log(item, acc);
        return acc;
    };
    const result = array.reduce(callBack, 0);
    return result;
}

function getAverageAge(array) {
    const callBack = (acc, user) => {
        return acc + user.age;
    };
    const sumOfAges = array.reduce(callBack, 0);
    const averageAge = sumOfAges / array.length;
    return averageAge;
}

function calcWordScore(word) {
    let score = 0;
    const letterPoints = {
        1: 'aeioulnrst',
        2: 'dg',
        3: 'bcmp',
        4: 'fhvwy',
        5: 'k',
        6: 'jx',
        7: 'qz',
    };
    for (let letter of word) {
        for (let key in letterPoints) {
            const str = letterPoints[key];
            if (str.includes(letter)) {
                score += +key;
                break;
            }
        }
    }
    return score;
}

function swapAdjacentBits(n) {
    console.log(n.toString(4).split(''));
    console.log(
        n
            .toString(4)
            .split('')
            .map((x) => (x * (3 - x) ? 3 - x : x))
    );
    console.log(
        n
            .toString(4)
            .split('')
            .map((x) => (x * (3 - x) ? 3 - x : x))
            .join()
    );
    return parseInt(
        n
            .toString(4)
            .split('')
            .map((x) => (x * (3 - x) ? 3 - x : x))
            .join(),
        4
    );
}

const compose =
    (...args) =>
    (data) =>
        args.reduceRight((value, fun) => fun(value), data);
function letterCount(str) {
    let newObj = {};
    for (let letter of str) {
        if (newObj.hasOwnProperty(letter)) {
            newObj[letter] += 1;
        } else {
            newObj[letter] = 1;
        }
    }
    return newObj;
}
function getMaxValueKey(obj) {
    const a = Object.keys(obj).reduce((max, current) => {
        if (obj[current] > obj[max]) {
            return current;
        }
        return max;
    });
    return a;
}

const findMostCommonChar = compose(getMaxValueKey, letterCount);

function funcDeep(fun, counter = 0) {
    if (typeof fun == 'function') {
        return funcDeep(fun(), ++counter);
    } else {
        return counter;
    }
}

function sortFunctions(array) {
    let arr = [...array];
    for (let i in arr) {
        let changed = false;
        for (let j = 0; j < array.length - i - 2; j++) {
            if (funcDeep(arr[j]) > funcDeep(arr[j + 1])) {
                changed = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!changed) {
            break;
        }
    }
    return arr;
}
function sumArray(array) {
    return array.reduce((sum, value) => sum + value);
}
function filterSum(array) {
    return array.filter((x) => x % 2 == 0);
}
function printSum(sum) {
    console.log(`the result is ${sum}`);
}
const evenSum = compose(printSum, filterSum, sumArray);

function group(array, size) {
    let newArray = [];
    let count = Math.ceil(array.length / size);
    let elemsToPrint = array.length;
    for (let toPrint = count; toPrint > 0; toPrint--) {
        let subArray = [];
        let index = array.length - elemsToPrint;
        let subArrayLength = Math.round(elemsToPrint / toPrint);
        elemsToPrint -= subArrayLength;
        for (let i = 0; i < subArrayLength; i++) {
            subArray.push(array[i + index]);
        }
        newArray.push(subArray);
    }
    return newArray;
}

const Pagination = {
    init(string, length) {
        this.string = string;
        this.pageSize = length;
        this.page = 0;
        this.lastPage = Math.ceil(this.string.length / this.pageSize);
    },
    nextPage() {
        if (this.page < this.lastPage) {
            this.page++;
        }
        return this;
    },
    prevPage() {
        if (this.page > 0) {
            this.page--;
        }
        return this;
    },
    lastPage() {
        this.page = this.lastPage;
    },
    goToPage(page) {
        if (page >= 0 && page <= this.lastPage) {
            this.page = page;
        }
        return this;
    },
    getPageItems() {
        let newArr = [];
        for (let i = 0; i < this.pageSize; i++) {
            newArr.push(this.string[this.page * this.pageSize + i]);
        }
        return newArr;
    },
};

const Airplane = {
    init(name) {
        this.name = name;
        this.isFlying = false;
    },
    takeOff() {
        this.isFlying = true;
    },
    land() {
        this.isFlying = false;
    },
};

function Circle(r) {
    this.getArea = function () {
        return r * r * Math.PI;
    };
    this.getPerimeter = function () {
        return 2 * r * Math.PI;
    };
}

function gather(letter) {
    let string = [];
    function concat(l) {
        concat.order = function (index) {
            let newString = '';
            function addByIndex(i) {
                addByIndex.get = function () {
                    return newString;
                };
                newString += string[i];
                return addByIndex;
            }
            return addByIndex(index);
        };
        string.push(l);
        return concat;
    }
    return concat(letter);
}

function gather2(letter) {
    gather2.string.push(letter);
    return gather2;
}
gather2.order = function (i) {
    gather2.retArr.push(gather2.string[i]);
    return gather2.order;
};
gather2.order.get = function () {
    const result = gather2.retArr;
    gather2.string = [];
    gather2.retArr = [];
    return result;
};
gather2.string = [];
gather2.retArr = [];

function completeBracelet(arr) {
    for (let i = 2; i <= arr.length / 2; i++) {
        if (arr.length % i == 0) {
            let retVal = true;
            for (let j = 0; j < i; j++) {
                let isTrue = true;
                for (let k = j + i; k < arr.length; k += i) {
                    if (arr[j] != arr[k]) {
                        isTrue = false;
                        break;
                    }
                }
                if (isTrue == false) {
                    retVal = false;
                    break;
                }
            }
            if (retVal) {
                return true;
            }
        }
    }
    return false;
}

function getNotesDistribution(arr) {
    const validNotes = [1, 2, 3, 4, 5];
    return arr.reduce((grades, student) => {
        for (let grade of student.notes) {
            if (validNotes.includes(grade)) {
                if (grades.hasOwnProperty(grade)) {
                    grades[grade]++;
                } else {
                    grades[grade] = 1;
                }
            }
        }
        return grades;
    }, {});
}

function count(number) {
    let count = +(typeof number == 'number');
    function iter(number) {
        number = Math.floor(number / 10);
        if (number > 1) {
            count++;
            iter(number);
        }
    }
    iter(Math.abs(number));
    return count;
}

function inclusiveArray(start, end) {
    let array = [];
    function iter(number) {
        if (number <= end) {
            array.push(number);
            iter(++number);
        }
    }
    iter(start);
    return array;
}

function product(...list) {
    let sum1 = 1;
    let sum2 = 1;
    let callCount = 0;
    function addPrice(...ls) {
        sum1 *= ls[0];
        sum2 *= ls[1];
        callCount++;
        if (callCount == 3) {
            return sum1 + sum2;
        }
        return addPrice;
    }
    return addPrice(...list);
}

function magic() {}

magic.replace = function (str, let1, let2) {
    return str.replace(let1, let2);
};
magic.length = function (str) {
    return str.length;
};
magic.trim = function (str) {
    return str.trim();
};
magic.slice = function (arr, start, end) {
    return arr.slice(start, end);
};

function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
    this.fill = function (gallons) {
        this.tank += gallons;
        return `filled by ${gallons} gallons`;
    };
    this.drive = function (distance) {
        if (distance >= this.milesPerGallon * this.tank) {
            this.odometer += this.milesPerGallon * this.tank;
            this.tank = 0;
            return `driven ${this.milesPerGallon * this.tank} meters, im empty`;
        }
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
        return `I ran out of fuel at ${
            this.odometer + this.tank * this.milesPerGallon
        } miles`;
    };
}

function maxPossible(firstNumber, secNumber) {
    let firstArr = firstNumber.toString().split('');
    let secArr = secNumber
        .toString()
        .split('')
        .sort((a, b) => b - a);
    for (let i = 0, j = 0; i < firstArr.length; i++) {
        if (firstArr[i] < secArr[j]) {
            firstArr[i] = secArr[j];
            j++;
        }
    }
    const number = parseInt(firstArr.join(''));
    return number;
}

function newEq(Constr, ...args) {
    let a = {};
    a.__proto__ = Constr.prototype;
    Constr.call(a, ...args);
    return a;
}

function _apply(func, thisArg, args) {
    thisArg.func = func;
    const res = thisArg.func(...args);
    delete thisArg.func;
    return res;
}

function _call(func, thisArg, ...args) {
    thisArg.func = func;
    const res = thisArg.func(...args);
    delete thisArg.func;
    return res;
}

function _bind(func, thisArg) {
    function binded(...args) {
        thisArg.func = func;
        const res = thisArg.func(...args);
        delete thisArg.func;
        return res;
    }
    return binded;
}

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    set length(length) {
        this._length = length;
    }
    get length() {
        return this._length;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
    toString() {
        return `Rectangle with sides ${this.length} ${this.width}`;
    }
}

class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
    get lastName() {
        return this._lastName;
    }

    set position(position) {
        this._position = position;
    }
    get position() {
        return this._position;
    }

    set salary(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }

    set workingHours(workingHours) {
        this._workingHours = workingHours;
    }
    get workingHours() {
        return this._workingHours;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAnnularSalary() {
        return this.salary * 12;
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100;
        return this.salary;
    }
}

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get gender() {
        return this._gender;
    }
    toString() {
        return `Author ${this.name}, email:${this.email}, gender ${this.gender}`;
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set author(author) {
        this._author = author;
    }
    get author() {
        return this._author;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set quantity(quantity) {
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    getProfit() {
        return this.price * this.quantity;
    }
    toString() {
        return `Book ${this.title}, author ${this.author}, price is ${this.price}, quantity ${this.quantity}`;
    }
}

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance;
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set balance(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    credit(amount) {
        this.balance += amount;
        return this.balance;
    }
    debit(amount) {
        if (amount > this.balance) {
            return 'Amount exceeded balance';
        }
        this.balance -= amount;
        return 'Success';
    }
    transferTo(anotherAccount, amount) {
        const subtracted = this.debit(amount);
        if (subtracted === 'Success') {
            anotherAccount.balance += amount;
            return this.balance;
        }
        return subtracted;
    }
    toString() {
        return `Account id ${this.id}, user name ${this.name}, balance:${this.balance}$`;
    }
    static identifyAccounts(acc1, acc2) {
        return acc1.toString() === acc2.toString();
    }
}

class Person {
    constructor(fName, lName, gender, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.gender = gender;
        this.age = age;
    }
    get firstName() {
        return this._fName;
    }
    set firstName(f) {
        this._fName = f;
    }
    get lastName() {
        return this._lName;
    }
    set lastName(l) {
        this._lName = l;
    }
    get gender() {
        return this._gender;
    }
    set gender(g) {
        this._gender = g;
    }
    get age() {
        return this._age;
    }
    set age(a) {
        this._age = a;
    }
    toString() {
        return `Name: ${this.firstName} ${this.lastName}, gender: ${this.gender}, age: ${this.age}`;
    }
}
function createProgObj(array) {
    const obj = {};
    for (let value of array) {
        obj[value] = {
            grade: 0,
            passed: false,
        };
    }
    return obj;
}
class Student extends Person {
    constructor(fName, lName, gender, age, program, year, fee) {
        super(fName, lName, gender, age);
        this.program = [...program];
        this._progObject = createProgObj(this.program);
        this.year = year;
        this.fee = fee;
    }
    get program() {
        return this._program;
    }
    set program(p) {
        this._program = p;
    }
    get year() {
        return this._year;
    }
    set year(y) {
        this._year = y;
    }
    get fee() {
        return this._fee;
    }
    set fee(f) {
        this._fee = f;
    }
    passExam(program, grade) {
        this._progObject[program].grade = grade;
        if (grade >= 50) {
            this._progObject[program].passed = true;
        }
    }
    isAllPassed() {
        return Object.values(this._progObject).every(
            (item) => item.passed === true
        );
    }
    toString() {
        const baseToString = this.__proto__.__proto__.toString.bind(this);
        return `Sudent ${baseToString()}, program: ${this.program}, year: ${
            this.year
        }, fee: ${this.fee}`;
    }
}

class Teacher extends Person {
    constructor(fName, lName, gender, age, program, pay) {
        super(fName, lName, gender, age);
        this.program = program;
        this.pay = pay;
    }
    get program() {
        return this._program;
    }
    set program(p) {
        this._program = p;
    }
    get pay() {
        return this._pay;
    }
    set pay(p) {
        this._pay = p;
    }
    toString() {
        const baseToString = this.__proto__.__proto__.toString.bind(this);
        return `Teacher ${baseToString()}, program: ${this.program}, pay: ${
            this.pay
        }`;
    }
}

class CustomConsole {
    constructor(type) {
        this.type = type;
        this._history = [];
    }
    log(...args) {
        let str = this.type + ' : ';
        for (let item of args) {
            str += item;
        }
        this._history.push(str);
        console.log(str);
    }
    history(range = 0) {
        const length = this._history.length;
        this._history = this._history.slice(length - range, length);
    }
    clearHistory() {
        return (this.history = []);
    }
}

function createMenu(menu) {
    const retArray = [];
    for (let value of menu) {
        retArray.push({ ...value });
    }
    return retArray;
}

class CoffeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = createMenu(menu);
        this.order = [];
    }
    addOrder(item) {
        if (this.menu.some((dish) => dish.name == item)) {
            this.order.push(item);
        } else {
            return 'This item is currently unavailable!';
        }
    }
    fulfillOrder() {
        if (this.order.length != 0) {
            return `The ${this.order.shift()} is ready!`;
        } else {
            return 'All orders have been fulfilled!';
        }
    }
    listOrders() {
        return this.order;
    }
    dueAmount() {
        return this.order.reduce((sum, item) => {
            console.log(sum);
            for (let i of this.menu) {
                if (i.name == item) {
                    return sum + i.price;
                }
            }
        }, 0);
    }
    cheapestItem() {
        return this.menu.reduce((cheapest, current) => {
            if (cheapest.price > current.price) {
                return current;
            }
            return cheapest;
        }).name;
    }
    drinksOnly() {
        return this.menu
            .filter((item) => item.type === 'drink')
            .map((item) => item.name);
    }
    foodOnly() {
        return this.menu
            .filter((item) => item.type === 'food')
            .map((item) => item.name);
    }
}

function isOver(...words) {
    for (let i = 0; i < words.length - 1; i++) {
        if (words.slice(i + 1).some((x) => x == words[i])) {
            return true;
        }
        let lastIndex = words[i].length - 1;
        if (words[i][lastIndex] != words[i + 1][0]) {
            return true;
        }
    }
    return false;
}
class Shiritori {
    constructor(words = []) {
        this.words = words;
        this.gameOver = isOver(...words);
    }
    play(word) {
        if (isOver(...this.words, word)) {
            this.gameOver = true;
            return 'game over';
        }
        this.words.push(word);
        console.log(this.words);
    }
    restart() {
        this.gameOver = false;
        this.words = [];
    }
}

class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }
    get title() {
        return this._title;
    }
    set title(t) {
        this._title = t;
    }
    get author() {
        return this._author;
    }
    set author(a) {
        this._author = a;
    }
    toString() {
        return `Book ${this._title}, author is ${this._author}`;
    }
    isTheSameBook(other) {
        return Boolean(
            this.title === other.title && this.author === other.author
        );
    }
}

class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
        super(title, author);
        this._bookId = bookId;
    }
    get bookId() {
        return this._bookId;
    }
    toString() {
        const baseToString = this.__proto__.__proto__.toString.bind(this);
        return `Library ${baseToString()}, ID: ${this._bookId}`;
    }
}

class LibraryBook extends LibraryBookBase {
    constructor(title, author, bookId, quantity) {
        super(title, author, bookId);
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    toString() {
        const baseToString = this.__proto__.__proto__.toString.bind(this);
        return `${baseToString()}, quantity: ${this._quantity}`;
    }
    increaseQuantityBy(amount) {
        this._quantity += amount;
    }
    decraseQuantityBy(amount) {
        if (amount <= this._quantity) {
            this._quantity -= amount;
        } else {
            this._quantity = 0;
        }
    }
}

class ReaderBook extends LibraryBookBase {
    constructor(title, author, bookId, exparitionDate, isReturned) {
        super(title, author, bookId);
        this._expDate = exparitionDate;
        this._isReturned = isReturned;
    }
    get exparitionDate() {
        return this._expDate;
    }
    get isReturned() {
        return this._isReturned;
    }
    set isReturned(r) {
        this._isReturned = r;
    }
    toString() {
        const baseToString = this.__proto__.__proto__.toString.bind(this);
        return `${baseToString()}, exparition date: ${
            this._expDate
        }, returned: ${_isReturned}`;
    }
}
class Reader {
    constructor(fName, lName, id, books = []) {
        this._firstName = fName;
        this._lName = lName;
        this._id = id;
        this._books = [...books];
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get id() {
        return this._id;
    }
    get books() {
        return [...this._books];
    }
    set books(b) {
        this._books = [...b];
    }
    toString() {
        return `Reader name: ${firstName} ${lastName}, id: ${id}, books: ${books.join(
            ' '
        )}`;
    }
}

class Library {
    constructor(books, readers) {
        this._books = [...books];
        this._readers = [...readers];
    }
    get books() {
        return [...this._books];
    }
    get readers() {
        return [...this._readers];
    }
    doHaveBook(book) {
        return this._books.some((item) => book.isTheSameBook(item));
    }
    addBook(book) {
        for (let item of this._books) {
            if (book.isTheSameBook(item)) {
                item.increaseQuantityBy(1);
                return;
            }
        }
        this._books.push(book);
    }
    addBooks(books) {
        for (let book of books) {
            this.addBook(book);
        }
        return this._books;
    }
    checkReaderId(id) {
        return this._readers.some;
    }
}
