const {getAllDiseasesService, getDiseaseByIdService} = require('../services/diseaseService.js');

module.exports.getAllDiseases = async (req, res) => {
    try {
        const diseases = await getAllDiseasesService();
        res.json(diseases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

    

module.exports.getDiseaseById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const disease = await getDiseaseByIdService(id);
        if (disease) {
            res.json(disease);
        } else {
            res.status(404).json({ message: 'Disease not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }