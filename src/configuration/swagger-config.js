const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'EjercicioBD',
          version: '1.1.0',
          description: 'API para el ejercicio de animales de BD',
        },
        components: {
          securitySchemes: {
            BearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              in: 'header',
              name: 'access_token'  // Cambia a 'access_token' aquí
            },
          },
        },        
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
      apis: [
        'src/routes/user-routes.js',
        'src/routes/animal-routes.js'
      ],
}

const specifications = swaggerJSDoc(options)

module.exports = {
    swaggerUi,
    specifications
}