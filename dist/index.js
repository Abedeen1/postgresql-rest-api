"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const expressSwagger = require('express-swagger-generator')(app);
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http'],
        securityDefinitions: {}
    },
    basedir: __dirname,
    files: ['./routes/*.js']
};
expressSwagger(options);
const index_1 = __importDefault(require("./routes/index"));
// middleware
app.use(express_1.default.json());
app.use(index_1.default);
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
