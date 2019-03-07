const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const Albums = require('../albums/albumsModel');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: "Welcome to the Bjork Album Database!"})
});

server.get("/api/albums", async (req, res) => {
    try {
        let albums = await Albums.getAlbums();
        res.status(200).json(albums);
    } catch(error) {
        res.status(500).json({error: "There was an error"})
    }
})

server.post('/api/albums', async (req, res) => {
    try {
        const album = await Albums.insertAlbum(req.body);
        res.status(201).json(album);
    } catch(error) {
        res.status(500).json({error: "There was an error"});
    }
})

server.delete("/api/albums/:id", async (req, res) => {
    try {
        await Albums.removeAlbum(req.params.id)
        res.status(204).end();

    } catch(error) {
        res.status(500).json({error: "There was an error"})
    }
})
module.exports = server;
