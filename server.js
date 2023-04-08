//======== DEPENDENCIES=============
require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const routes = require('./routes/index')
const cors = require('cors')


//======== ROUTES ==============
app.use("/", routes);

app.use((req,res) => {
    res.status(404).json({message: "NOT A PROPER ROUTE"})
})

//======== LISTENER =============
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

console.log('Mateos merge successful')
