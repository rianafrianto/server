const Card = require('../models/cardModel');
const { handleError, handleSuccess } = require('../helpers/response');

// GET all cards
exports.getAllCards = async (req, res) => {
    try {
        const results = await Card.getAllCards();
        handleSuccess(res, results, 'Get All Card Successfully');
    } catch (error) {
        handleError(res, error);
    }
};

// Add a new card
exports.addCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const result = await Card.addCard(title, description);
        handleSuccess(
            res,
            { id: result.insertId, title, description },
            'Create Card Successfully',
            201
        );
    } catch (error) {
        handleError(res, error);
    }
};

// Update a card
exports.updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        if (!title || !description) {
            throw { message: 'Title and description are required', status: 400 };
        }

        const updatedCard = await Card.updateCard(id, title, description);
        handleSuccess(res, updatedCard, 'Updated Card Successfully');
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a card
exports.deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCard = await Card.deleteCard(id);

        if (!deletedCard) {
            throw { message: 'Card not found', status: 404 };
        }

        handleSuccess(res, deletedCard, 'Deleted Card Successfully');
    } catch (error) {
        handleError(res, error);
    }
};
