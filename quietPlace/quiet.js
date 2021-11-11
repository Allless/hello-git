function rangeBitCount(a, b) {
    function cou(x) {
        if (x == 0) {
            return 0;
        }
        return 2 * cou((x - 1) / 2) + (x + 1) / 2;
    }
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    let firstPow = a;
    let secPow = b;
    let fBool = (a - 2) & (a - 1);
    let sBool = (b - 2) & (b - 1);
    if (!fBool && !sBool) return cou(secPow) - cou(firstPow);
    while (fBool || sBool) {
        if (fBool) {
            firstPow++;
            fBool = (firstPow - 2) & (firstPow - 1);
        }
        if (sBool) {
            secPow--;
            fBool = (secPow - 2) & (secPow - 1);
        }
    }
    let firstRange = (firstPow + 1) / 2;
    let secRange = (secPow + 1) / 2;
    count1 =
        rangeBitCount(a - firstRange, firstPow - firstRange) + firsPow - a + 1;
    count2 = rangeBitCount(0, b - secPow) + b - secPow + 1;

    console.log(count1, count2);
    count = cou(secPow) - cou(firstPow);
    return count + count1 + count2;
}
