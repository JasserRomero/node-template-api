import { join } from "node:path";
import express from "express";

interface Options {
  PORT: number;
  PUBLIC_PATH?: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly public_path: string;

  constructor(options: Options) {
    const { PORT, PUBLIC_PATH = "public" } = options;

    this.port = PORT;
    this.public_path = PUBLIC_PATH;
  }

  async start() {
    // Middleware

    // Routes

    //* Public Folder
    this.app.use(express.static(this.public_path));

    // SPA
    this.app.get("*", (req, res) => {
      const indexPath = join(
        __dirname + `../../../${this.public_path}/index.html`
      );
      res.sendFile(indexPath);
    });

    // Listen
    this.app.listen(this.port, () => {
      console.log("Sever running on port", this.port);
    });
  }
}
