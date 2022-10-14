const  express = require('express');
const dotenv = require('dotenv');
const signUpRouter = require('./routes/signUp.js');
const connectDB = require('./db.js');
const loginRouter = require('./routes/login.js');
const app = express();
const cors = require('cors');
const getDataRouter = require('./routes/getData.js');
const todoRouter = require('./routes/todo.js');
dotenv.config({ path: './.env' });
const port = process.env.PORT;//800

//BODY_PARSER
app.use(express.json());
connectDB();
app.use(cors())
app
  .use("/signUp", signUpRouter)
  .use("/login", loginRouter)
  .use("/myInfo", getDataRouter)
  .use('/todos',todoRouter)
  .listen(port, () => console.log(`listening ${port}`));

