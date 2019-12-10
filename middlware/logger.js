module.exports = (req, res, next) => {
    console.log(`${req.ip} ${req.protocal} ${req.method} ${req.get('user-agent')} ${req.url}`)
    next()// this tells express to move on after code is complete
}