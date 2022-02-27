const express = require("express");
const app = express();
const path = require("path");
const device = require('express-device');

app.use(device.capture());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/assets", express.static("assets"))
app.use("/data", express.static("data"))
app.use("/static", express.static("static"))

app.get("/", (req, res) => {
    const details = req.device.type.toUpperCase();

    if (details === 'PHONE') {
        res.sendFile(path.join(`${__dirname}/mobile.html`))
    } else {
        res.sendFile(path.join(`${__dirname}/index.html`))
    }
})

app.listen(5000, () => console.log(`Live at https://facedev.xyz on port ${process.env.PORT}`));