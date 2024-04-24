import type { Exercise } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { PlanResponse } from "../plan";

export type ResponseError = {
  message: string;
};

export type ExerciseResponse = ResponseError | Exercise | Exercise[];

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
 * An endpoint that returns the exercises that starts with the NAME parameter given in the request URL.
 * Besides, the endpoint needs to receive the PAGE parameter to make the pagination.
 *
 * Example: /api/exercise/search?name={name}&page={page}
 * @param req Request
 * @param res Response
 * @returns A list of exercises.
 */
const handleGET = async (
  req: NextApiRequest,
  res: NextApiResponse<ExerciseResponse>
) => {
  const { name, page } = req.query;
  try {
    const exercises = await prisma.exercise.findMany({
      skip: Number(page) * 30,
      take: 30,
      where: {
        name: { startsWith: String(name) },
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.json(exercises);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePOST = async (
  req: NextApiRequest,
  res: NextApiResponse<ExerciseResponse>
) => {
  const { name } = req.body;
  const result = await prisma.exercise.create({
    data: {
      name: name,
    },
  });
  return res.status(201).json(result);
};
