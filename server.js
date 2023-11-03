const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

/**
 * Express config
 */
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

/**
 * Error handling
 */
app.use((req, res, next) => {
  res.status(404).send(`<h1>Error 404 - Page Not Found</h1>`);
});

/**
 * Run the server
 */
app.listen(PORT, () => {
  console.log("Server listening at port %d", PORT);
});
