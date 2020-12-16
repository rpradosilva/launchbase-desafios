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

  // organizando dados
  let { avatar_url, name, born, graduate, lession, matter } = req.body;

  // add data do registro
  born = Date.parse(born);
  const created_at = Date.now();
  const id = Number(data.teachers.length + 1);

  // import fake db
  data.teachers.push({
    id,
    created_at,
    avatar_url,
    name,
    born,
    graduate,
    lession,
    matter,
  });

  // insert data into fake db
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Deu erro para salvar.");
    return res.redirect("/teachers");
  });
};

// update

// delete
