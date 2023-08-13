import { Request, Response } from "express";
import db from "../database/connection";

export default {
  // GET /parking/slot
  slot: (_req: Request, res: Response) => {
    res.json(1);
  },

  // GET /parking/request
  request: (_req: Request, res: Response) => {
    db.all("SELECT * FROM Users", (_, result) => res.json(result));
  },
};
