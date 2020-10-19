//importar dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages");

// iniciando express
const app = express();
app
  //utilizar body do req
  .use(express.urlencoded({ extended: true }))
  //utilizando arquivos static
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//ligar servidor
app.listen(5500);
