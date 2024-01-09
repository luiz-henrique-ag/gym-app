"use client"

import AlunoCard from "@/components/aluno-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Aluno } from "@/models/aluno.model"
import { useState } from "react"
import AlunoModal from "@/components/aluno-modal"

const dadosMocados: Aluno[] = [
  {
    matricula: 1,
    nome: "Fulano Silva",
    telefone: "123456789",
    email: "aluno1@example.com",
    dataNascimento: new Date("1990-01-01"),
    altura: 170,
    peso: 70,
    objetivo: "Perda de peso",
    plano: 1,
    vencimento: new Date("2023-12-31"),
    planoPago: true
  },
  {
    matricula: 2,
    nome: "Ciclano Souza",
    telefone: "987654321",
    email: "aluno2@example.com",
    dataNascimento: new Date("1995-05-15"),
    altura: 160,
    peso: 55,
    objetivo: "Ganho de massa muscular",
    plano: 2,
    vencimento: new Date("2023-12-31"),
    planoPago: true
  },
  {
    matricula: 3,
    nome: "Beltrano Oliveira",
    telefone: "555123456",
    email: "aluno3@example.com",
    dataNascimento: new Date("1985-07-20"),
    altura: 175,
    peso: 80,
    objetivo: "Manutenção",
    plano: 3,
    vencimento: new Date("2023-12-31"),
    planoPago: false
  },
  {
    matricula: 4,
    nome: "Sicrano Santos",
    telefone: "999987654",
    email: "aluno4@example.com",
    dataNascimento: new Date("1992-03-10"),
    altura: 180,
    peso: 85,
    objetivo: "Perda de peso",
    plano: 1,
    vencimento: new Date("2023-12-31"),
    planoPago: true
  },
  {
    matricula: 5,
    nome: "Maria Oliveira",
    telefone: "777654321",
    email: "aluno5@example.com",
    dataNascimento: new Date("1988-12-05"),
    altura: 160,
    peso: 60,
    objetivo: "Ganho de massa muscular",
    plano: 2,
    vencimento: new Date("2023-12-31"),
    planoPago: true
  },
  {
    matricula: 6,
    nome: "João Pereira",
    telefone: "333999888",
    email: "aluno6@example.com",
    dataNascimento: new Date("1997-09-15"),
    altura: 165,
    peso: 75,
    objetivo: "Definição muscular",
    plano: 3,
    vencimento: new Date("2023-12-31"),
    planoPago: true
  },
  {
    matricula: 7,
    nome: "Ana Silva",
    telefone: "222555444",
    email: "aluno7@example.com",
    dataNascimento: new Date("1993-02-28"),
    altura: 170,
    peso: 68,
    objetivo: "Ganho de força",
    plano: 2,
    vencimento: new Date("2023-12-31"),
    planoPago: false
  },
];


export default function Alunos() {
  const [selectedAluno, setSelectedAluno] = useState<Aluno | undefined>(undefined);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-4">Alunos</h1>
      <div className='w-full'>
        <div className="flex justify-end gap-3">
          <Input placeholder="Pesquisar..." />
          <Link href="/alunos/novo">
            <Button className="mb-3">
              <Plus className="w-5 h-5 mr-2"/>
              Novo
            </Button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          {
            dadosMocados.map((aluno, index) => <AlunoCard aluno={aluno} key={index} onClick={() => setSelectedAluno(aluno)}/>)
          }
        </div>
        { selectedAluno && <AlunoModal aluno={selectedAluno} closeAction={() => setSelectedAluno(undefined)}/> }
      </div>
    </div>
  )
}
