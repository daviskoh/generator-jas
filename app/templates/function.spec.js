var <%= camelizedName %> = require('../lib/<%= underscoredName %>.js');

describe('<%= camelizedName %>', function() {
    it('is a function', function () {
        expect(typeof <%= camelizedName %>).toBe('function');
    });
});