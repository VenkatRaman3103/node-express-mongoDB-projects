const fs = require("fs");
const http = require("http");
const url = require("url");

// data
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

// templates
const tempCards = fs.readFileSync(
    `${__dirname}/templates/template-cards.html`,
    "utf-8"
);
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    "utf-8"
);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,
    "utf-8"
);

/// replacing the templates placeholder with the data
const replacePlaceHolder = function (tempCards, element) {
    let output = tempCards.replace(/{%PRODUCTNAME%}/g, element.productName);

    output = output.replace(/{%COUNTRY%}/g, element.from);
    output = output.replace(/{%IMAGE%}/g, element.image);
    output = output.replace(/{%VITAMINS%}/g, element.nutrients);
    output = output.replace(/{%QUANTITY%}/g, element.quantity);
    output = output.replace(/{%PRICE%}/g, element.price);
    output = output.replace(/{%DESCRIPTION%}/g, element.description);
    output = output.replace(/{%ID%}/g, element.id);

    if (!element.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    }

    return output;
};

// server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // overview
    if (pathname === "/overview") {
        res.writeHead(200, { "Content-Type": "text/html" });

        const cardHtml = dataObj
            .map((element) => replacePlaceHolder(tempCards, element))
            .join("");
        const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardHtml);

        res.end(output);
    }

    // product
    else if (pathname === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const product = dataObj[query.id];
        const output = replacePlaceHolder(tempProduct, product);
        res.end(output);
    } else {
        res.end("sorry page not found");
    }
});

// listening
server.listen(8000, "127.0.0.1", () => console.log("server is running"));
