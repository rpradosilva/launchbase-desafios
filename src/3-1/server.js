const express = require("express")
const nunjucks = require("nunjucks")
const port = 5000
const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about")
})

server.get("/courses", function(req, res) {
    return res.render("courses")
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(port, function() {
    console.log(`Server is running in: http://localhost:${port}`)
})