// Handle error responses
const handleError = (res, error) => {
    res.status(500).json({
        success: false,
        error: error.message
    });
};

// Handle success responses
const handleSuccess = (res, data = null, message = 'Request successful', status = 200) => {
    res.status(status).json({
        success: true,
        message,
        data,
    });
};

module.exports = {
    handleError,
    handleSuccess,
};