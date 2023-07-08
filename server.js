import { createServer } from "http";
import { Database } from "./database.js";

const port = process.env.PORT || 8000;
const DB = new Database("database.json");

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/streams") {
    const data = DB.select();
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    res.end(JSON.stringify(data));
  }

  if (req.method === "POST" && req.url === "/api/streams") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      DB.insert(data);
      res.writeHead(201, { "Access-Control-Allow-Origin": "*" });
      res.end(JSON.stringify(data));
    });
  }

  if (res.headersSent === false) {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
