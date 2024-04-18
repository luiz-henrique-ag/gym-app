import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Exercise from "@/public/exercise.png";

export const ExercicioCard = () => {
  return (
    <Card className="flex flex-col gap-4 justify-between items-center cursor-pointer hover:scale-105 transition-all hover:shadow-md p-5">
      <Image src={Exercise} alt="exercise gif" width="80" height="80" />
      <h3 className="m-0 font-bold text-2xl">Exercícios</h3>
    </Card>
  );
};
