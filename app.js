const express = require("express");
const { connect } = require("./models");

const pokemmonsRouter = require("./routes/pokemons");

const app = express();

// declarando rotas
app.use("/pokemons", pokemmonsRouter);

app.listen(3000, () => {
    connect();

    console.log("Servidor ouvindo na porta ${porta}");
});
