// import DiseaseManagement from "./Data/diseaseManagement.json" assert { type: "json" };
const DiseaseManagement = require ('./Data/diseaseManagement.json');

const express = require('express')
const cors  = require( "cors");
const bodyParser =require ("body-parser");

//json
// import Treatments from "./Data/treatments.json" assert { type: "json" };

//Routes

//
const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/disease', (req, res) => {
        res.json(DiseaseManagement.diseases)
    }
)
// app.get('/Early_Blight', (req, res) => {
//     // res.send('Welcome to SMILE GAME')
//         res.json(Treatments.diseases[0].treatments)
//     }
// )
// app.get('/Late_Blight', (req, res) => {
//     // res.send('Welcome to SMILE GAME')
//     res.json(Treatments.diseases[1].treatments)
//     }
// )




module.exports = app;
