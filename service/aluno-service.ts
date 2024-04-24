import { Aluno } from "@/models/client.model";
import { IService } from "./iservice";

export class AlunoService implements IService<Aluno> {
  constructor() {}

  post(entity: Aluno): boolean {
    throw new Error("Method not implemented.");
  }

  getById(): Aluno | undefined {
    throw new Error("Method not implemented.");
  }

  update(entity: Aluno): boolean {
    throw new Error("Method not implemented.");
  }

  delete(entity: Aluno): boolean {
    throw new Error("Method not implemented.");
  }

  async get(
    searchString: string,
    pageNumber: number
  ): Promise<Aluno[] | undefined> {
    const alunos = await fetch(
      `localhost:5066/alunos?searchParam=${searchString}&pageNumber=${pageNumber}`
    )
      .then<Aluno[]>((res) => res.json())
      .then((data) => data);

    return alunos;
  }
}
