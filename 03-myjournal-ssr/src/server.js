import "dotenv/config";
import http from "http";
import { createTerminus } from "@godaddy/terminus";
import app from "./app.js";

const server = http.createServer(app);

createTerminus(server);

const port = process.env.PORT ?? 4000;
server.listen(port);

console.info(`Server running on port ${port}`);
