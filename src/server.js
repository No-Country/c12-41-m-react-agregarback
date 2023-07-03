import db from "./db/connection.js"
import app from "./index.js";

db.authenticate()
.then( () => console.log('database authenticate'))
.catch( (err) => console.log(err))


db.sync()
.then( () => console.log('database synced'))
.catch( (err) => console.log(err))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server online on port ${PORT} 😛`);
});
