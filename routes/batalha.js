const express = require("express");

const router = express.Router();

const buscaInfoPokemon = require("../services/busca-pokemon");

router.get("/", (_req, res) => {
    const randomPokeId = Math.round(Math.random() * 1024 + 1);
    buscaInfoPokemon(randomPokeId).then((pokemon) => {
        res.render("paginas/batalha/index", {
            pokemon,
        });
    });
});

module.exports = router;
