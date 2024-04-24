import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import type { ClientResponse } from ".";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ClientResponse>
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
  res: NextApiResponse<ClientResponse>
) => {
  const subscription = req.query.subscription;
  try {
    const client = await prisma.client.findFirst({
      where: {
        subscription: Number(subscription),
      },
    });
    if (client === null) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePUT = async (
  req: NextApiRequest,
  res: NextApiResponse<ClientResponse>
) => {
  const subscription = req.query.subscription;
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
  try {
    const updatedClient = await prisma.client.update({
      where: { subscription: Number(subscription) },
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
    });
    return res.json(updatedClient);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};

const handleDELETE = async (
  req: NextApiRequest,
  res: NextApiResponse<ClientResponse>
) => {
  const subscription = req.query.subscription;
  try {
    const deletedClient = await prisma.client.delete({
      where: { subscription: Number(subscription) },
    });
    return res.json(deletedClient);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};
