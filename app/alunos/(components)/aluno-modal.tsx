import { Button } from "../../../components/ui/button";
import React, { useState } from "react";
import { Aluno } from "@/models/client.model";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CircleUserRound, CreditCard, PenSquare, Trash2 } from "lucide-react";
import Link from "next/link";
import ConfirmDialog from "../../../components/ui/confirm-dialog";
import { AlunoDetails } from "./aluno-details";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { FichaCard } from "@/app/fichas/(components)/ficha-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IModalProps {
  aluno: Aluno;
  closeAction: React.MouseEventHandler<HTMLButtonElement>;
}

const AlunoModal = ({ aluno, closeAction }: IModalProps) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"></div>
      <div
        className="flex flex-col
        fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white
        min-w-[500px] p-7 min-h-[500px] max-h-[550px]
        z-10 shadow-md
        rounded-md mx-auto"
      >
        <div className="flex justify-end mb-2 items-center">
          <button onClick={closeAction} className="m-0">
            <Cross2Icon />
          </button>
        </div>
        <Tabs defaultValue="dados" className="w-full">
          <TabsList className="mb-3">
            <TabsTrigger value="dados" className="px-6">
              Dados
            </TabsTrigger>
            <TabsTrigger value="treinos" className="px-6">
              Treinos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dados">
            <AlunoDetails aluno={aluno} />
          </TabsContent>
          <TabsContent value="treinos" className="grid place-content-center">
            <ScrollArea className="border rounded-lg p-2 h-[350px]">
              <FichaCard />
              <FichaCard />
              <FichaCard />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AlunoModal;
