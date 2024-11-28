var express = require("express"),
bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

app.use("/alumnos", require("./routes/alumnos"));
app.use("/profesores", require("./routes/profesores"));
app.use("/asignatura", require("./routes/asignatura"));
app.use("/cursos", require("./routes/cursos"));
app.use("/grado", require("./routes/grado"));
app.use("/departamento", require("./routes/departamento"));
app.use("/gestion", require("./routes/gestion"));
app.use("/matriculado", require("./routes/matriculado"));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT); 