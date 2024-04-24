import { Client } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import type { ResponseError } from "../exercise";

export type ClientResponse = Client | Client[] | ResponseError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ClientResponse>
) {
  switch (req.method) {
    case "GET":
      return handleGET(req, res);

    case "POST":
      return handlePOST(req, res);

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
/**
 * An endpoint that returns the clients that starts with the NAME parameter given in the request URL.
 * Besides, the endpoint needs to receive the PAGE parameter to make the pagination.
 *
 * Example: /api/client/search?name={name}&page={page}
 * @param req Request
 * @param res Response
 * @returns A list of clients.
 */
const handleGET = async (
  req: NextApiRequest,
  res: NextApiResponse<ClientResponse>
) => {
  const { name, page } = req.query;
  try {
    const clients = await prisma.client.findMany({
      skip: Number(page) * 30,
      take: 30,
      where: {
        name: { startsWith: String(name) },
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.json(clients);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePOST = async (
  req: NextApiRequest,
  res: NextApiResponse<ClientResponse>
) => {
  const {
    name,
    email,
    document,
    cellphone,
    birthDate,
    dueDate,
    height,
    weight,
    objective,
    obs,
    planId,
  } = req.body;
  const result = await prisma.client.create({
    data: {
      name: name,
      email: email,
      document: document,
      cellphone: cellphone,
      birthDate: birthDate,
      dueDate: dueDate,
      height: height,
      weight: weight,
      obs: obs,
      objective: objective,
      ClientPlan: {
        create: {
          planId: planId,
        },
      },
    },
    include: {
      ClientPlan: true,
    },
  });
  return res.status(201).json(result);
};
