const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('GET /', () => {
        it('returns 200 OK', async () => {
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
        })

        it('returns JSON', async () => {
            const res = await request(server).get('/');

            expect(res.type).toBe('application/json')
        })

        it('returns a sanity check', async () => {
            const res = await request(server).get('/');

            expect(res.body).toEqual({message: "Welcome to the Bjork Album Database!"})
        })
    })

    describe('POST /api/albums', () => {
        it.skip('returns 201 Created', () => {

        })

        it.skip('returns JSON', () => {

        })

        it.skip('inserts the provided album into the db', () => {

        })
    })

    describe('DELETE /api/albums', () => {
        it.skip('returns 204 No Content', () => {

        })

        it.skip('deletes appropriate album from the db', () => {

        })
    })
})