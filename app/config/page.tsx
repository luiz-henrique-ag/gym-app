"use client"
import React from "react";
import { ExercicioCard } from "./(components)/(exercicio)/exercicio-card";
import { PlanoCard } from "./(components)/(plano)/plano-card";
import { NovoExercicioDialog } from "./(components)/(exercicio)/novo-exercicio-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Config() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-6">
        Configurações
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 w-3/5">
        <NovoExercicioDialog />
        <PlanoCard />
      </div>
    </div>
  );
}
