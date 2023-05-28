import { createServer } from "http";
import { Database } from "./database.js";

const port = process.env.PORT || 8000;
const DB = new Database("database.json");

const server = createServer((req, res) => {
  let data;

  if (req.method === "GET" && req.url === "/api/data") {
    data = DB.select({});
  }

  if (req.method === "POST" && req.url === "/api/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      DB.insert(data);
      res.writeHead(201, {
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify({ success: true }));
    });
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
