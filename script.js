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
