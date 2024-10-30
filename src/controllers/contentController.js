const model = require('../config/geminiai');
const { handleError, handleSuccess } = require('../helpers/response');

const generateContent = async (req, res) => {
    try {
        const { prompt } = req.body;

        const result = await model.generateContent(prompt);
        const generatedText = result.response.text(); 

        const lines = generatedText.split('\n');
        const title = lines[0] || ''; 
        const description = lines.slice(1).join('\n') || ''; 

        handleSuccess(res, { title, description }, 'Generate Content Successfully');
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { generateContent };
