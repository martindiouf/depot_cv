const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API !");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});