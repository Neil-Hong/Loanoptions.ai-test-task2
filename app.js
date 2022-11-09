const axios = require("axios");

const myArgs = process.argv.slice(2);
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
                return 1;
            }
            if (api1 > api2) {
                return -1;
            }
            return 0;
        });

        let result = [];
        result = fetchedData.filter((item) => {
            return item.Category === myArgs[0];
        });
        console.log(result.length === 0 ? "No results" : result.slice(0, myArgs[1]));
    })
    .catch((err) => console.log(err));
