var server = require('../app.js');
var request = require('supertest');

describe('GET /users', function () {
    it('respond with json containing a list of all users', function (done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
});