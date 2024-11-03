const express = require("express");
const cors = require("cors");
const JWT = require('../middleware/jwt-token')
const { swaggerUi, specifications } = require('../configuration/swagger-config')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
        this.setupSwagger();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

        this.app.use((req, res, next) => {
            req.setTimeout(15 * 60 * 1000);
            res.setTimeout(15 * 60 * 1000);
            next();
        });
    }

    routes() {
        this.app.use('/api/v1/animal', JWT.validateToken, require('../routes/animal-routes'));
        this.app.use('/api/v1/user', require('../routes/user-routes'))
    }

    setupSwagger(){
        this.app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(specifications))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}`);
        })
    }
}

module.exports = Server;