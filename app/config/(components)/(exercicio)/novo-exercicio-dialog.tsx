import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExercicioCard } from "./exercicio-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const NovoExercicioDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <ExercicioCard />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] min-w-[450px]">
        <DialogHeader>
          <DialogTitle>Exercícios</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="novo" className="w-full">
          <TabsList className="mb-3">
            <TabsTrigger value="novo" className="px-6">Novo</TabsTrigger>
            <TabsTrigger value="lista" className="px-6">Lista</TabsTrigger>
          </TabsList>
          <TabsContent value="novo">
            <h3 className="font-bold mb-5">Novo Exercício</h3>
            <div className="grid grid-cols-4 gap-3 place-items-center justify-items-start mb-5">
              <label className="col-span-1 font-semibold">Nome</label>
              <Input placeholder="Ex: Deadlift" className="col-span-3" />
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="success" className="w-1/4">
                Salvar
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="lista">Change your lista here.</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
