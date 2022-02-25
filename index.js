const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/img", express.static("img"))
app.use("/static", express.static("static"))

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

console.log(__dirname, "index.html")
app.listen(5000, () => console.log(`Live At http://facedev.xyz`));