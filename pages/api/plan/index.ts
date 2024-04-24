import { Plan } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import type { ExerciseResponse, ResponseError } from "../exercise";

export type PlanResponse = Plan | Plan[] | ResponseError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExerciseResponse>
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
 * An endpoint that returns the plans that starts with the NAME parameter given in the request URL.
 * Besides, the endpoint needs to receive the PAGE parameter to make the pagination.
 *
 * Example: /api/plan/search?name={name}&page={page}
 * @param req Request
 * @param res Response
 * @returns A list of plans.
 */
const handleGET = async (
  req: NextApiRequest,
  res: NextApiResponse<PlanResponse>
) => {
  const { name, page } = req.query;
  try {
    const plans = await prisma.plan.findMany({
      skip: Number(page) * 30,
      take: 30,
      where: {
        name: { startsWith: String(name) },
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.json(plans);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePOST = async (
  req: NextApiRequest,
  res: NextApiResponse<PlanResponse>
) => {
  const { name, description, value } = req.body;
  const result = await prisma.plan.create({
    data: {
      name: name,
      description: description,
      value: value,
    },
  });
  return res.status(201).json(result);
};
