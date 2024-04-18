import { Personal } from "@/models/personal.model";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../../../components/ui/button";
import { CreditCard, PenSquare, Trash2 } from "lucide-react";
import Link from "next/link";

interface IModalProps {
  personal: Personal;
  closeAction: React.MouseEventHandler<HTMLButtonElement>;
}

export const PersonalModal = ({ personal, closeAction }: IModalProps) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"></div>
      <div
        className="flex flex-col
          fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white
          min-w-[450px] p-7 border
          z-10 shadow-md
          rounded-md mx-auto"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Dados</h2>
          <button onClick={closeAction} className="m-0">
            <Cross2Icon />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="flex justify-between items-center col-span-2">
            <h2 className="font-semibold">ID</h2>
            <p className="text-sm text-muted-foreground">{personal.id}</p>
          </div>
          <div className="flex justify-between items-center col-span-2">
            <h2 className="font-semibold">Nome</h2>
            <p className="text-sm text-muted-foreground">{personal.nome}</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">CPF</h2>
            <p className="text-sm text-muted-foreground">{personal.cpf}</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Telefone</h2>
            <p className="text-sm text-muted-foreground">
              {personal.telefone}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Data Nasc.</h2>
            <p className="text-sm text-muted-foreground">
              {personal.dataNascimento}
            </p>
          </div>
          <div className="flex justify-between items-center col-span-2">
            <h2 className="font-semibold">E-Mail</h2>
            <p className="text-sm text-muted-foreground">{personal.email}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-end items-end gap-4">
            <Link href={""}>
              <Button variant="outline">
                <PenSquare className="h-4 w-4 mr-2" />
                Editar
              </Button>
            </Link>
            <Button variant="destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
