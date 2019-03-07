const db = require('../data/dbConfig');

module.exports = {
    insertAlbum,
    removeAlbum,
    getAlbums
}

async function insertAlbum(album) {
    const [id] = await db("albums").insert(album, "id");

    return db("albums").where({id}).first()
}

function removeAlbum(id) {
    return db("albums").where({id}).del();
}

function getAlbums() {
    return db("albums");
}