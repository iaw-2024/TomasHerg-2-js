const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

const datos = [
    { "nombre": "Luke Skywalker" },
    { "nombre": "Darth Vader" },
    { "nombre": "Princess Leia Organa" },
    { "nombre": "Han Solo" },
    { "nombre": "Obi-Wan Kenobi" },
    { "nombre": "Yoda" },
    { "nombre": "Anakin Skywalker" }
];

app.get("/express", (req, res) => {
    // Construimos el HTML con la lista expandida con los personajes del JSON 'datos'
    const html = `
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bootstrap demo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <link rel="stylesheet" href="public/dom/styles.css">
            </head>
            <body>
                <div class="container">
                    <h1>Star Wars Nombres</h1>
                    <ul class="list-group list-group-flush list-group-vertical-sm" id="lista">
                        <li class="list-group-item list-group-item-primary">Darth Vader</li>
                        ${datos.map(personaje => `<li class="list-group-item list-group-item-primary">${personaje.nombre}</li>`).join('')}
                    </ul>
                </div>
            </body>
        </html>
    `;

    // Enviamos la respuesta HTML al cliente
    res.send(html);
});

app.get("/cliente_servidor", (req, res) => {res.send("cliente_servidor on Vercel!");})

app.get("/cliente_servidor/json_datos", (req, res) => {res.send(datos);})


module.exports = app;