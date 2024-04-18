"use client";

import { Button } from "@/components/ui/button";
import { InputMask } from "../../../components/inputs/input-mask";
import { Input } from "@/components/ui/input";
import { Personal } from "@/models/personal.model";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

interface IFormProps {
  personal?: Personal;
}

export const PersonalForm = ({ personal }: IFormProps) => {
  const [isNew, setIsNew] = React.useState<boolean>(true);
  const { register, handleSubmit, setValue } = useForm<Personal>({});

  if (personal && isNew) {
    setIsNew(false);
    setValue("id", personal.id);
    setValue("nome", personal.nome);
    setValue("cpf", personal.cpf);
    setValue("dataNascimento", personal.dataNascimento);
    setValue("email", personal.email);
    setValue("telefone", personal.telefone);
  }

  const handleSend = (data: Personal) => {
    console.log(data);
  };

  return (
    <form method="post" onSubmit={handleSubmit(handleSend)}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <Input
            {...register("nome")}
            placeholder="Ex: Pedro Silva Nunes"
            id="nome"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cpf">CPF</label>
          <InputMask
            {...register("cpf")}
            placeholder="Ex: 123.456.789-10"
            mask="cpf"
            id="cpf"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">E-Mail</label>
          <Input
            {...register("email")}
            type="email"
            placeholder="exemplo@email.com"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefone">Telefone</label>
          <InputMask
            {...register("telefone")}
            placeholder="Ex: (38) 99332-3283"
            id="telefone"
            mask="phone"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <InputMask
            {...register("dataNascimento")}
            placeholder="Ex: 24/03/2002"
            id="dataNascimento"
            mask="date"
          />
        </div>
        <div className="flex justify-end items-center">
          <Button variant="success" size="lg" type="submit">
            Salvar
          </Button>
        </div>
      </div>
    </form>
  );
};
