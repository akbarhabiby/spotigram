module.exports = (err, req, res, next) => {
    const status = err.response.status
    const message = err.response.data.error_description

    res.status(status).json({ message: message })
}