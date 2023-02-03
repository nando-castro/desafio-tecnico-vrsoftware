import { Request, Response } from "express";
import * as testService from "../services/testService";

export async function test(req: Request, res: Response) {
  const data = await testService.test();

  res.status(200).send(data);
}