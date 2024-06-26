const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const { connect } = require("./models");

const pokemmonsRouter = require("./routes/pokemons");
const batalhaRouter = require("./routes/batalha");

const app = express();
const porta = 3000;

// configurando ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

//configurando arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// declarando rotas
app.use("/pokemons", pokemmonsRouter);
app.use("/batalha", batalhaRouter);

app.listen(porta, () => {
    connect();

    console.log(`Servidor ouvindo na porta ${porta}`);
});
