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

/*app.use("/", require("./routes/alumnos"));*/
app.use("/profesores", require("./routes/profesores"));
/*app.use("/", require("./routes/cursos"));*/

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT); 