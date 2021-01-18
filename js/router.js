module.exports = {
    home(req, res) {
        // 暂时吧obj当成从数据库mysql中读取的数据：model
        let  obj={
            name:"严鹿",
            age:18,
            sex:"男",
        }
        res.end(JSON.stringify(obj))
    },
    login(req, res) {
        res.end("login")
    }
}