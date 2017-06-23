const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Autor';
        var text = 'Text';

        var res = generateMessage(from, text);

        expect(res).toInclude({
            from,
            text
        });
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var lat = 1;
        var long = 7;
        var from = 'Jen';
        var url = `https://www.google.com/maps?q=1,7`

        var res = generateLocationMessage(from, lat, long);

        expect(res).toInclude({
            from,
            url
        })
        expect(res.createdAt).toBeA('number');
    })
});
