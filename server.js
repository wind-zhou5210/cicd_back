let http = require("http");
let users = [
  { id: 1, name: "周正2113" },
  { id: 2, name: "周正 2213" },
  { id: 3, name: "周正2313" },
];
let server = http.createServer(function (req, res) {
  console.log(req.method, req.url);
  if (req.url == "/api/users") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8"); // 设置Content-Type
    res.end(JSON.stringify(users));
  } else {
    res.setHeader("Content-Type", "text/plain; charset=utf-8"); // 设置Content-Type
    res.end("Now Found!");
  }
});
server.listen(3000, () => {
  console.log("服务正在3000端口上启动!");
});
