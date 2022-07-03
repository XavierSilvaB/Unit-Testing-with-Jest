const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', function () {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test(" result should be 1487.2093023255813 ", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(15)).toBe(1487.2093023255813);
})
test("one yen should be 0,0218921032056294", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(3.5)).toBe(0.0218921032056294);
})