const express = require("express");
const userRoute = require("./routes/user-route");
const userLogger = require("./middlewares/user-logger");

const app = express();
app.use(userLogger);
app.use(express.json());
app.use("/api/users", userRoute);

const port = 2000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/users`);
});
