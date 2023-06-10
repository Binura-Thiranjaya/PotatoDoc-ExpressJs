const { getAllDiseasesRepository, getDiseaseByIdRepository } = require('../repositories/diseaseRepository.js');

module.exports.getAllDiseasesService = async () => {
    try {
        const diseases = await getAllDiseasesRepository();
        return diseases;
    } catch (error) {
        throw error;
    }
}

module.exports.getDiseaseByIdService = async (id) => {
    try {
        const disease = await getDiseaseByIdRepository(id);
        return disease;
    } catch (error) {
        throw error;
    }
}