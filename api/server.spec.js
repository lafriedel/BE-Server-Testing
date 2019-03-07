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
        it('returns 201 Created', async () => {
            const res = await request(server).post('/api/albums').send({name: "Volta", release_year: 2007});
            
            expect(res.status).toBe(201);
        })

        it('returns JSON', async () => {
            const res = await request(server).post('/api/albums');

            expect(res.type).toBe('application/json');
        })
    })

    describe('DELETE /api/albums', () => {
        it.skip('returns 204 No Content', () => {

        })

    })
})