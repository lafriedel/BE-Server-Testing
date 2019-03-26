const db = require('../data/dbConfig');
const Albums = require('./albumsModel');

afterEach(async () => {
    await db("albums").truncate()
})

describe('insertAlbum()', () => {
    it('inserts the provided album into the db', async () => {
        let album = await Albums.insertAlbum({name: "Volta", release_year: 2007});

        expect(album.name).toBe("Volta");
        expect(album.release_year).toEqual(2007);
    })
})

describe('removeAlbum()', () => {
    it('deletes appropriate album from the db', async () => {
        let album = await Albums.insertAlbum({name: "Utopia", release_year: 2017})
        let deleted = await Albums.removeAlbum(album.id);

        expect(deleted).toBe(1);
    })
})