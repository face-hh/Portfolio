const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/assets", express.static("assets"))
app.use("/static", express.static("static"))

app.get("/", (_req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`))
})

app.listen(process.env.PORT, () => console.log(`Live at https://facedev.xyz on port ${process.env.PORT}`));