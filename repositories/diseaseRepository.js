const DiseaseManagement = require ('../Data/diseaseManagement.json');

module.exports.getAllDiseasesRepository = async () => {
    try {
        return DiseaseManagement.diseases;
    } catch (error) {
        throw error;
    }
}

module.exports.getDiseaseByIdRepository = async (id) => {
    try {
        const disease = DiseaseManagement.diseases.find((disease) => disease.id === id);
        return disease;
    } catch (error) {
        throw error;
    }
}
// app.get('/disease', (req, res) => {
//     res.json(DiseaseManagement.diseases)
// }
// )

// app.get('/disease/:id', (req, res) => {
// const id = parseInt(req.params.id);
// const disease = DiseaseManagement.diseases.find((disease) => disease.id === id);
// if (disease) {
// res.json(disease);
// } else {
// res.status(404).json({ message: 'Disease not found' });
// }
// })
