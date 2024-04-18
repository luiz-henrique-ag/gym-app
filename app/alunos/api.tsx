"use server"

import { AlunoService } from "@/service/aluno-service"

export async function getData(searchString : string, pageNumber : number){
  const service = new AlunoService();
  return service.get(searchString, pageNumber)
}