module.exports = (req, res) => {
    console.log(`${req.ip} ${req.protocal} ${req.method} ${req.get} ${req.url}`)
}