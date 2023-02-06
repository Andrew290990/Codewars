
//n(0), true, "testEven for 0");
//assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
//assert.strictEqual(testEven(1), false, "testEven for 1");
//assert.strictEqual(testEven(2), true, "testEven for 2");
//assert.strictEqual(testEven(-4), true, "testEven for 2");






function testEven(n) {
    if(n % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(testEven());