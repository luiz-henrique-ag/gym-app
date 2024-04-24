import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import type { ExerciseResponse } from ".";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExerciseResponse>
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
  res: NextApiResponse<ExerciseResponse>
) => {
  const id = req.query.id;
  try {
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (exercise === null) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.json(exercise);
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

const handlePUT = async (
  req: NextApiRequest,
  res: NextApiResponse<ExerciseResponse>
) => {
  const id = req.query.id;
  const { name } = req.body;
  try {
    const updatedExercise = await prisma.exercise.update({
      where: { id: Number(id) },
      data: { name: name },
    });
    return res.json(updatedExercise);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};

const handleDELETE = async (
  req: NextApiRequest,
  res: NextApiResponse<ExerciseResponse>
) => {
  const id = req.query.id;
  try {
    const deletedExercise = await prisma.exercise.delete({
      where: { id: Number(id) },
    });
    return res.json(deletedExercise);
  } catch (error) {
    return res.status(404).json({ message: "Not Found" });
  }
};
