const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/db.config");

//Set CORS for all headers
app.use(cors());

//sync db
db.sequelize.sync({force: false}).then(() => {});

require("./routes/user.route")(app);
require("./routes/userCat.route")(app);
require("./routes/userOganization.route")(app);
require("./routes/privilege.route")(app);
require("./routes/funds.route")(app);
require("./routes/fundCategory.route")(app);
require("./routes/fundApplication.route")(app);
require("./routes/fundDisbursment.route")(app);
require("./routes/project.route")(app);
require("./routes/projectCategory.route")(app);
require("./routes/projectProposal.route")(app);
require("./routes/states.route")(app);
require("./routes/lga.route")(app);

if (process.env.NODE_ENV !== "test"){
  app.listen(PORT, () => {
    PORT;
  });
}


module.exports = { app };
