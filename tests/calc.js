const add = require('../utils/calc')
var expect = require('chai').expect;

describe('Test calc file ' , function () {
    describe('Test function add', function(){
        it('compute an addition', function() {
            const result = add(3,4)
            expect(result).to.be.equal(8)
        });
    });
});