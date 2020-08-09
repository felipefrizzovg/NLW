//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    loginDone
} = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
const format = require('./utils/format')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor 
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/login-done", loginDone)
.post("/save-classes", saveClasses)
//start do servidor 
.listen(5500)