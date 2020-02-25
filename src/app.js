const express = require('express');
const routes = require('./routes');

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Receber requisições em formato json
        this.server.use(express.json());
    }

    routes() {
        // Arquivo de rotas
        this.server.use(routes);
    }
}

// Exporta o server Express do App inicializado
module.exports = new App().server;
