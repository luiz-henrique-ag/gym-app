import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import type { PersonalResponse } from ".";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
) {
  switch (req.method) {
    case "GET":
      return handleGET(req, res);

    case "PUT":
      return handlePUT(req, res);

    case "DELETE":
      return handleDELETE(req, res);

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}

const handleGET = async (
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
) => {
  const id = req.query.id;
  try {
    const personal = await prisma.personal.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (personal === null) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.json(personal);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePUT = async (
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
) => {
  const id = req.query.id;
  const { name, email, document, cellphone, birthDate } = req.body;
  try {
    const updatedPersonal = await prisma.personal.update({
      where: { id: Number(id) },
      data: {
        name: name,
        email: email,
        document: document,
        cellphone: cellphone,
        birthDate: birthDate,
      },
    });
    return res.json(updatedPersonal);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};

const handleDELETE = async (
  req: NextApiRequest,
  res: NextApiResponse<PersonalResponse>
) => {
  const id = req.query.id;
  try {
    const deletedPersonal = await prisma.personal.delete({
      where: { id: Number(id) },
    });
    return res.json(deletedPersonal);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};
