import db from "./db/connection.js";
import app from "./index.js";
import initModel from "./models/init.model.js";

db.authenticate()
  .then(() => console.log("database authenticate"))
  .catch((err) => console.log(err));

initModel();

db.sync()
  .then(() => console.log("database synced"))
  .catch((err) => console.log(err));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server online on port ${PORT} 😛`);
});