## **Estrutura Backend**

## ***1.** Criar Servidor*
- Criar arquivo `server.js`

---

## ***2.** Inicializar Node*
`npm init` - Necessário configurar projeto

`npm init -y` - Inicializar rapidamente com configurações padrão

---

## ***3.** Instalar Dependências*
`npm install express` - Necessário para construir o servidor

`npm install nunjucks` - Necessário para deixar o conteúdo dinâmico *(Template Engine)*

`npm install -D nodemon` - Necessário para automatizar a atualização do servidor. O *-D* para dependência de desenvolvedor.

---

## ***4.** Configurar `package.json`*

Configurar debug do servidor no arquivo `package.json`
```json
{
"scripts": {
        "start": "nodemon server.js"
    }
}
```

---

## ***5.** Configurar Servidor*

> :heavy_exclamation_mark: Inserir no server.js

* **5.1** - Importar express
```javascript
const express = require("express")
const server = express()
```

* **5.2** - Configurar porta para debug
> :heavy_exclamation_mark: Deixar link para acesso rápido via terminal
```javascript
const port = 5000

server.listen(port, function() {
    console.log(
        `Server is running in: http://localhost:${port}`
    )
})
```

* **5.3** - Criar rotas
> :heavy_exclamation_mark: Necessário criar o `index.html` e/ou frontend pronto
```javascript
server.get("/", function(req, res) {
    return res.render("index")
})
```
* **5.4** - Configurar possíveis erros
```javascript
server.use(function(req, res) {
    res.status(404).render("not-found")
})
```

* **5.5** - Configurar arquivos estáticos
> :heavy_exclamation_mark: Por padrão, na pasta `public`
```javascript
server.use(express.static("public"))
```

---

## ***6.** Configurar Template Engine*

> :heavy_exclamation_mark: Inserir no server.js

* **6.1** - Importar nunjucks
```javascript
const nunjucks = require("nunjucks")
```

* **6.2** - Informar engine e o tipo de arquivo do template
> O tipo do arquivo do template depende da extensão utilizada, inicialmente usamos html e depois substituimos para njk
```javascript
server.set("view engine", "njk")
```

* **6.3** - Configurar views
```javascript
nunjucks.configure("views", {
    express: server
})
```


