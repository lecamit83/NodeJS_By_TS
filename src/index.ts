import * as dotenv from "dotenv";
import app from './App'

const PORT = process.env.PORT || 3000;

dotenv.config();

app.listen(PORT, () : void => {  
  console.log(`server is listening on ${PORT}`)
});