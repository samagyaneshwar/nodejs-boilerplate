const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");

const response = require("./middlewares/response");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const env = require("./env");
const routes = require("./routes");

const nunjucks = require("nunjucks");
const nunjucksEnv = nunjucks.configure(__dirname, {
    autoescape: true,
    express: app,
    watch: true,
});

// views
app.use(express.static(__dirname + "/public"));

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));
app.use(cors());
app.use(
    cookieSession({
        secret: env.secret,
        keys: ["key1", "key2"],
    })
);
app.use(response());

// routes
app.use("/", routes);

app.listen(env.port, () => {
    console.log("Start server on port %s", env.port)
});