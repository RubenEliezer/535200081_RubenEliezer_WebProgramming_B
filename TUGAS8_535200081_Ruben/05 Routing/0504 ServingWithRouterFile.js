const port = 3000,
  http = require("http"),
  httpStatusCodes = require("http-status-codes"),
  router = require("./router"),
  fs = require("fs"),
  plainTestContentType = {
    "Content-Type": "text/html",
  },
  htmlContentType = {
    "Content-Type": "text/html",
  },
  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
      if (errors) {
        console.log("Error reading the file...");
      }
      res.end(data);
    });
  };

router.get("/", (red, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  res.end("INDEX");
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTestContentType);
  res.end("POSTED");
});

http.createServer(router.handle).listen(3000);

console.log(`The server has started and is listening on port number: ${port}`);