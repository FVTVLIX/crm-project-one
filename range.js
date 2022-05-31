module.exports = (req, res, next) => {
    res.header('Content-Range', 'customers 0-20/20')
    next()
}