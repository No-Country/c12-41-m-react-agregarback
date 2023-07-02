import express from "express";
import db from "./db/connection.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use(userRoutes);

async function startServer() {
    try {
        // Conectar a la base de datos
        await db.authenticate();
        console.log('DB connection success');


        app.listen(PORT, () => {
            console.log(`Server online on port ${PORT}.`);
        });
    } catch (error) {
        console.error('Error while connecting to DB', error);
        throw new Error(error);
    }

}

startServer();

