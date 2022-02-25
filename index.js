const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/img", express.static("img"))
app.use("/static", express.static("static"))

app.get("/", (_req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`))
})

app.get("/e", (_req, res) => {
    res.sendFile(path.join(`${__dirname} index.html`))
})

app.get("/ee", (_req, res) => {
    res.sendFile(path.join(__dirname, `index.html`))
})

app.listen(process.env.PORT, () => console.log(`Live at http://facedev.xyz on port ${process.env.PORT}`));