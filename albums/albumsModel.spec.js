const db = require('../data/dbConfig');
const Albums = require('./albumsModel');

describe('insertAlbum()', () => {

    afterEach(async () => {
        await db("albums").truncate();
    })

    it('inserts the provided album into the db', async () => {
        let album = await Albums.insertAlbum({name: "Volta", release_year: 2001});

        expect(album.name).toBe("Volta");
        expect(album.release_year).toEqual(2001);
    })
})

describe('removeAlbum()', () => {

    afterEach(async () => {
        await db("albums").truncate();
    })

    it.skip('deletes appropriate album from the db', () => {

    })
})