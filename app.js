// import DiseaseManagement from "./Data/diseaseManagement.json" assert { type: "json" };
const Disease = require('./routes/diseaseRoute.js')
const express = require('express')
const cors  = require( "cors");
const bodyParser =require ("body-parser");

const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
        res.send('PotatoDoc : https://binurathiranjaya1.github.io/PotatoDoc-Reactjs/')
    }
)
app.use('/disease', Disease);




module.exports = app;
