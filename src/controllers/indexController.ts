import { Request, Response } from "express";

export default {
  index: (_req: Request, res: Response) => {
    res.send("Hello World!");
  },
};
