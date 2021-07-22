import express from "express";
const app = express();
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
        schemes: ['http' ],
        securityDefinitions: {

        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/*.js']
};
expressSwagger(options)
import indexRoutes from "./routes/index";

// middleware
app.use(express.json())

app.use(indexRoutes);
app.use(express.urlencoded({extended: false}))

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
