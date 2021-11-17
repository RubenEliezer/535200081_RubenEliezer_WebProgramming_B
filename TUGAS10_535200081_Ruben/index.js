const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const layouts = require("express-ejs-layouts");

const app = express();

// use layouts
app.use(layouts);
app.set("layout", "layouts/main.ejs");

// place all styles block in the layout at the head
app.set("layout extractStyles", true);

// place all scripts block in the layout at the end
app.set("layout extractScripts", true);

// set the view engine to ejs
app.set("view engine", "ejs");

// body-parser to parse request body
app.use(bodyParser.urlencoded());

// static files
app.use(express.static("public"));

// enabling session
app.use(
  session({
    secret: "stringacak",
    cookie: {},
  })
);

const index = require("./routes/index");
const auth = require("./routes/auth");
const todo = require("./routes/todo");

app.use("/", index);
app.use("/auth", auth);
app.use("/todo", todo);

app.listen(3000);
console.log("Server runs at port 3000...");