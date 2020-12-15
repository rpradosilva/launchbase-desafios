// fake db
const fs = require("fs");
const data = require("../data.json");

// create
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (const key of keys) {
    if (req.body[key] == "") {
      return res.send("Preencha todos os campos!");
    }
  }

  // import fake db
  data.teachers.push(req.body);

  // insert data into fake db
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Deu erro para salvar.");
    return res.redirect("/teachers");
  });
};

// update

// delete
