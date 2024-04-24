import { Personal } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import type { ResponseError } from "../exercise";

export type PersonalResponse = Personal | Personal[] | ResponseError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
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
 * An endpoint that returns the personals that starts with the NAME parameter given in the request URL.
 * Besides, the endpoint needs to receive the PAGE parameter to make the pagination.
 *
 * Example: /api/personal/search?name={name}&page={page}
 * @param req Request
 * @param res Response
 * @returns A list of personals.
 */
const handleGET = async (
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
) => {
  const { name, page } = req.query;
  try {
    const personals = await prisma.personal.findMany({
      skip: Number(page) * 30,
      take: 30,
      where: {
        name: { startsWith: String(name) },
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.json(personals);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePOST = async (
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
) => {
  const { name, email, document, cellphone, birthDate } = req.body;
  const result = await prisma.personal.create({
    data: {
      name: name,
      email: email,
      document: document,
      cellphone: cellphone,
      birthDate: birthDate,
    },
  });
  return res.status(201).json(result);
};
