// In src/v1/swagger.js
import swaggerJSDoc from "swagger-jsdoc"

// Basic Meta Informations about our API
const options = {
    definition: {
        openapi: "3.1.0",
        info: { title: "AccessBank API", version: "1.0.0" },
    },
    apis: ["./src/routes/userRoutes.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;