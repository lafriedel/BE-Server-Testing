const db = require('../data/dbConfig');
const Albums = require('./albumsModel');

afterEach(async () => {
    await db("albums").truncate()
})

describe('insertAlbum()', () => {
    it('inserts the provided album into the db', async () => {
        let album = await Albums.insertAlbum({name: "Vulnicura", release_year: 2015});

        expect(album.name).toBe("Vulnicura");
        expect(album.release_year).toEqual(2015);
    })
})

describe('removeAlbum()', () => {
    it('deletes appropriate album from the db', async () => {
        let album = await Albums.removeAlbum(1);

        expect(album).toBe(0);
    })
})