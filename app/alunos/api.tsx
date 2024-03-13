"use server"

import { Aluno } from "@/models/aluno.model";
import { AlunoService } from "@/service/aluno-service"

export async function getData(searchString : string, pageNumber : number){
  const service = new AlunoService();
  return await service.get(searchString, pageNumber)
}