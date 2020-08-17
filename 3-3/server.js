const express = require("express")
const nunjucks = require("nunjucks")
const port = 5000
const server = express()
const dados = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("about")
})

server.get("/courses", function(req, res) {
    return res.render("courses", { items: dados })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id
    const curso = dados.find(
        function(curso) {
            return curso.id == id
        }
    )

    if (!curso) {
        return res.render("not-found")
    }

    return res.render("course", { item: curso })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(port, function() {
    console.log(`Server is running in: http://localhost:${port}`)
})