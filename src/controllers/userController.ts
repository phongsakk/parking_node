// import { Request, Response } from "express";
// // import { Database } from "sqlite3";
// // const db = new Database("db.sqlite");

// export default {
//   info: (req: Request, res: Response) => {
//     res.send("gg");
//   },
// };
import { Request, Response } from "express";

export default {
  info: (_req: Request, res: Response) => {
    res.send("Hello World!");
  },
};
