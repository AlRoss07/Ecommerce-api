const express = require("express");
require('./db/mongoose');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3600;

app.listen(port,()=> console.log(`Server Listening on port ${port}...`));