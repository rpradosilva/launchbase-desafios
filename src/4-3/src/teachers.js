// create
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (const key of keys) {
    if (req.body[key] == "") {
      return res.send("Preencha todos os campos!");
    }
  }

  return res.send(req.body);
};

// update

// delete
