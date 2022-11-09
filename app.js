const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    let data = "";
    https.get("https://api.publicapis.org/entries", function (response) {
        response.on("data", function (chunk) {
            data += chunk;
            console.log(data);
        });
    });

    res.send("Server is up and runnig");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
