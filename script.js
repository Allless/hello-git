function isAllOdd(n) {
    if (n % 2 === 0) {
        return false;
    } else if (n % 10 === n) {
        return true;
    }
    return isAllOdd(Math.floor(n / 10));
}

function findMinPos(arr) {
    for (let i in arr) {
        if (arr[i] > 0) {
            let leftMin = findMinPos(arr.slice(i + 1));
            if (leftMin != -1 && leftMin < arr[i]) {
                return leftMin;
            }
            return arr[i];
        }
    }
    return -1;
}

function findWrongIndex(arr) {
    if (arr.length === 0) {
        return -1;
    }
    const len = arr.length - 1;
    if (arr[len] < arr[len - 1]) {
        return len;
    }
    return findWrongIndex(arr.slice(0, len));
}

function removeFirstElement(arr) {
    if (arr.length < 2) {
        if (arr.length) {
            arr.pop();
        }
        return arr;
    }
    const lastItem = arr.pop();
    removeFirstElement(arr);
    arr.push(lastItem);
    return arr;
}

function flatArray(array) {
    if (array.length === 0) {
        return [];
    }
    if (!Array.isArray(array[0])) {
        array = [array[0], ...flatArray(array.slice(1))];
    } else {
        array.splice(0, 1, ...flatArray(array[0]));
    }
    return array;
}

function rotateArray(array, step) {
    if (step === 0) {
        return array;
    }
    let newArray = rotateArray(array, step - 1);
    newArray.push(newArray.shift());
    return newArray;
}

function findDigitsSum(num) {
    if (num % 10 === num) {
        return num;
    }
    const sum = (num % 10) + findDigitsSum(Math.floor(num / 10));
    return findDigitsSum(sum);
}

function mergeSort(arr) {
    const middle = Math.ceil(arr.length / 2);
    if (arr.length === 1) {
        return arr;
    }
    const arr1 = mergeSort(arr.slice(0, middle));
    const arr2 = mergeSort(arr.slice(middle));
    let result = [];
    while (arr1.length || arr2.length) {
        if (arr1.length === 0) {
            return [...result, ...arr2];
        } else if (arr2.length === 0) {
            return [...result, ...arr1];
        }

        if (arr1[0] < arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
}

class Node {
    constructor(value, next = this, prev = this) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    size() {
        return this.size;
    }
    clear() {
        this.head = null;
        this.size = 0;
    }
    getLast() {
        return this.head.prev;
    }
    getFirst() {
        return this.head;
    }
    push(value) {
        let node;
        if (this.size) {
            node = new Node(value, this.getFirst(), this.getLast());
            this.getLast().next = node;
            this.getFirst().prev = node;
        } else {
            node = new Node(value);
            this.head = node;
        }
        this.size++;
    }
}

class Stack {
    constructor() {
        this._data = [];
    }
    length() {
        return this._data.length;
    }
    push(value) {
        this._data.push(value);
    }
    pop() {
        return this._data.pop();
    }
    peek() {
        return this._data[this._data.length - 1];
    }
    search(value) {
        return this._data.indexOf(value);
    }
    isEmpty() {
        return !Boolean(this._data.length);
    }
    print() {
        console.log(this._data);
    }
}

function abacabaPattern(number) {
    if (number <= 0) {
        return '';
    }
    return (
        abacabaPattern(number - 1) +
        String.fromCharCode(64 + number) +
        abacabaPattern(number - 1)
    );
}

function getValues(tree) {
    return Object.values(tree).reduce((array, element) => {
        if (typeof element === 'object') {
            if (element !== null) {
                array.push(...getValues(element));
            }
        } else {
            array.push(element);
        }
        return array;
    }, []);
}

function selectionSort(arr) {
    const array = [...arr];
    for (let i = 0; i < array.length / 2; i++) {
        let minIndex = i;
        let maxIndex = i;
        for (let j = i; j < array.length - i; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const last = array.length - i - 1;
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
        if (maxIndex === i) {
            maxIndex = minIndex;
        }
        [array[maxIndex], array[last]] = [array[last], array[maxIndex]];
    }
    return array;
}

class Dictionary {
    constructor(object) {
        this._data = {};
        for (let key in object) {
            this._data[key] = [object[key]];
        }
    }

    set(key, value) {
        if (key in this._data) {
            if (!this._data[key].includes(value)) {
                this._data[key].push(value);
            }
        } else {
            this._data[key] = [value];
        }
    }

    get(key) {
        if (key in this._data) {
            return this._data[key];
        }
    }

    getCountByKey(key) {
        if (key in this._data) {
            return this._data[key].length;
        }
        return 0;
    }

    remove(key) {
        delete this._data[key];
    }

    keys() {
        return Object.keys(this._data);
    }

    values() {
        return Object.values(this._data);
    }

    entries() {
        return Object.keys(this._data).map((key) => [key, this._data[key]]);
    }
}

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    const lastIndex = array.length - 1;
    const lowerArray = [];
    const higherArray = [];
    const pivot = (array[0] + array[lastIndex]) / 2;
    for (let value of array) {
        if (value <= pivot) {
            lowerArray.push(value);
        } else {
            higherArray.push(value);
        }
    }
    return [...quickSort(lowerArray), ...quickSort(higherArray)];
}

function numToGoogle(array) {
    const obj = {
        0: (str, count) => {
            const lastValue = str;
            while (--count) {
                str += lastValue;
            }
            return str;
        },
        1: (str) => str + 'g',
        2: (str) => str + 'o',
        3: (str) => str + 'l',
        4: (str) => str + 'e',
        5: (str) => {
            const lastIndex = str.length - 1;
            return str.slice(0, lastIndex) + str[lastIndex].toUpperCase();
        },
        6: (str) => str + '.',
        7: (str) => str[0].toUpperCase() + str.slice(1),
        8: (str) => str.split('').reverse().join(''),
        9: (str) => '',
    };
    let res = '';
    for (let str of array) {
        str = str.toString();
        let iterRes = '';
        for (let i in str) {
            if (str[i] === '0') {
                iterRes = obj[0](iterRes, +str.slice(+i + 1));
                break;
            }

            iterRes = obj[str[i]](iterRes);
        }
        res += iterRes;
    }
    return res;
}

function histogram(array, char) {
    let res = [];
    for (let num of array) {
        let iterRes = '';
        while (num--) {
            iterRes += char;
        }
        res.push(iterRes);
    }
    return res.join('\n');
}

function binarySearch(array, value) {
    let first = 0;
    let last = array.length - 1;
    while (last - first > 0) {
        console.log(first, last);
        const middle = Math.floor((first + last) / 2);
        if (array[middle] < value) {
            first = middle + 1;
        } else {
            last = middle;
        }
    }
    if (array[first] === value) {
        return first;
    }
    return -1;
}

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0, array[j] < array[j - 1]; j--) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
    }
    return array;
}

function getPair(nums, sum) {
    nums.sort();
    for (let i = 0, j = nums.length - 1; i < j; ) {
        if (nums[i] + nums[j] > sum) {
            j--;
        } else if (nums[i] + nums[j] < sum) {
            i++;
        } else {
            return [nums[i], nums[j]];
        }
    }
    return -1;
}

function getKnightMinSteps(n, s, d) {
    if (s[0] === d[0] && s[1] === d[1]) {
        return 0;
    }

    const matrix = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));
    matrix[s[0]][s[1]] = 1;

    function isLastIter(currentPositions) {
        const newPositions = [];
        for (let pos of currentPositions) {
            for (let i of [-1, 1, -2, 2]) {
                for (let j of [3 - Math.abs(i), Math.abs(i) - 3]) {
                    const newX = pos[0] + i;
                    const newY = pos[1] + j;
                    if (
                        newX < 0 ||
                        newX >= n ||
                        newY < 0 ||
                        newY >= n ||
                        matrix[newX][newY]
                    ) {
                        continue;
                    }
                    if (newX === d[0] && newY === d[1]) {
                        return true;
                    }
                    newPositions.push([newX, newY]);
                    matrix[newX][newY] = 1;
                }
            }
        }
        currentPositions.splice(0, currentPositions.length, ...newPositions);
        return false;
    }

    const currentPositions = [s];
    for (let i = 1; currentPositions.length > 0; i++) {
        if (isLastIter(currentPositions)) {
            return i;
        }
    }
    return -1;
}

function findTreeHeight(array) {
    if (array.length === 0) {
        return 0;
    }
    let child = [0];
    let i;
    let j = 1;
    for (i = 0; child.length; i++) {
        let newChild = [];
        for (let c of child) {
            for (; array[j] === c && j < array.length; j++) {
                newChild.push(j);
            }
        }
        child = newChild;
        newChild = [];
    }
    return i;
}
function findTreeHeight2(array) {
    if (array.length === 0) {
        return 0;
    }
    let child = [0];
    let newChild = [];
    let i = 0;
    let height = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[j] === child[i]) {
            newChild.push(j);
        } else {
            if (i < child.length - 1) {
                i++;
            } else {
                child = newChild;
                newChild = [];
                i = 0;
                height++;
            }
        }
    }
    return height;
}

function getRoot(n) {
    let start = 0;
    let end = n;
    let sqrt;
    do {
        sqrt = (start + end) / 2;
        if (sqrt * sqrt > n) {
            end = sqrt;
        } else if (sqrt * sqrt < n) {
            start = sqrt;
        }
    } while (Math.abs(n - sqrt * sqrt) >= 1);
    return Math.floor(sqrt);
}

function getSquare(n) {
    n = Math.abs(n);
    let res = 0;
    let count = n;
    let counter = 0;
    while (count > 0) {
        let toAdd = n;
        let i;
        for (i = 1; i + i < count; i += i) {
            toAdd += toAdd;
            console.log(res + toAdd, counter);
            counter++;
        }
        res += toAdd;
        count -= i;
    }
    return res;
}

function signSort(array) {
    if (array.length == 1) {
        return array;
    }
    const negArray = [];
    const mid = Math.floor(array.length / 2);
    const first = signSort(array.slice(0, mid));
    const second = signSort(array.slice(mid));
    while (first.length > 0 && first[0] < 0) {
        negArray.push(first.shift());
    }
    while (second.length > 0 && second[0] < 0) {
        negArray.push(second.shift());
    }
    return [...negArray, ...first, ...second];
}

function getEffMoves(x, y) {
    if (x == 1 || y == 1) {
        return 1;
    }
    return getEffMoves(x - 1, y) + getEffMoves(x, y - 1);
}
