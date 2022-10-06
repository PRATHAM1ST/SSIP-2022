const qr = require("qrcode");

let data = "https://www.google.com/";

qr.toString(data, { type: "terminal" }, function (err, code) {
    if (err) { throw err;}
    console.log(code);
});
