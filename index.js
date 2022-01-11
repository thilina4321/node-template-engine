const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const sequelize = require("./db/sequelize");

const userCon = require('./controller/user')

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));


app.get('/', userCon.createUser)

// app.use("/", (req, res) => {
//   res.render("index", {
//     path: "hello node",
//     game: false,
//     products: [
//       { name: "thilina", age: 12 },
//       { name: "dilshan", age: 25 },
//     ],
//   });
// });

sequelize
  // .sync({alter:true})
  .sync()
  .then(() => {
    app.listen(5500, () => {
      console.log("App starts in port ", 5500);
    });
  })
  .catch((e) => console.log("Fail to connect to the db"));
