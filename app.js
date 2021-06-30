const express = require("express");
const app = express();
app.use(express.json());
require('./models/index')

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.use('/api', require('./routes/user.router'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port port ${port}`));