// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  products: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (Array.isArray(req.query.products) && req.query.products[1]) {
    const products = await retrieveDataById("products", req.query.products[1]);
    res.status(200).json({ status: true, statusCode: 200, products });
  } else {
    const products = await retrieveData("products");
    res.status(200).json({ status: true, statusCode: 200, products });
  }
}
