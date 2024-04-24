import { NextApiRequest, NextApiResponse } from "next";
import { PlanResponse } from ".";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlanResponse>
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
  res: NextApiResponse<PlanResponse>
) => {
  const id = req.query.id;
  try {
    const plan = await prisma.plan.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (plan === null) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.json(plan);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePUT = async (
  req: NextApiRequest,
  res: NextApiResponse<PlanResponse>
) => {
  const id = req.query.id;
  const { name, description, value } = req.body;
  try {
    const updatedPlan = await prisma.plan.update({
      where: { id: Number(id) },
      data: {
        name: name,
        description: description,
        value: value,
      },
    });
    return res.json(updatedPlan);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};

const handleDELETE = async (
  req: NextApiRequest,
  res: NextApiResponse<PlanResponse>
) => {
  const id = req.query.id;
  try {
    const deletedPlan = await prisma.plan.delete({
      where: { id: Number(id) },
    });
    return res.json(deletedPlan);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};
