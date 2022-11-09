// const express = require("express");
// const https = require("https");
const axios = require("axios");

axios
    .get("https://api.publicapis.org/entries")
    .then((response) => {
        let fetchedData = [];
        response.data.entries.map((item) => {
            fetchedData.push(item);
        });
        fetchedData.sort((a, b) => {
            const api1 = a.API.toUpperCase();
            const api2 = b.API.toUpperCase();
            if (api1 < api2) {
                return -1;
            }
            if (api1 > api2) {
                return 1;
            }
            return 0;
        });
        console.log(fetchedData);
    })
    .catch((err) => console.log(err));

// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function (req, res) {
//     axios
//         .get("https://api.publicapis.org/entries")
//         .then((response) => {
//             let fetchedData = [];
//             response.data.entries.map((item) => {
//                 fetchedData.push(item);
//             });
//             res.write("<h1>" + fetchedData + "</h1>");
//         })
//         .catch((err) => console.log(err));
// });

// app.get("/", function (req, res) {
//     axios
//         .get("https://api.publicapis.org/entries")
//         .then((response) => {
//             let fetchedData = [];
//             response.data.entries.map((item) => {
//                 fetchedData.push(item);
//             });
//             res.write("<h1>" + fetchedData + "</h1>");
//         })
//         .catch((err) => console.log(err));
// });

// app.listen(3000, function () {
//     console.log("Server is running on port 3000");
// });
