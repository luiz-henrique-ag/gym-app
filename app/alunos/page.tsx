"use client"

import AlunoCard from "@/app/alunos/(components)/aluno-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Aluno } from "@/models/aluno.model"
import { useEffect, useState } from "react"
import AlunoModal from "@/app/alunos/(components)/aluno-modal"
import { ScrollArea } from "@/components/ui/scroll-area"
import { alunos } from "@/models/mockedData/data"
import { getData } from "./api"

export default function Alunos() {
  const [searchString, setSearchString] = useState<string>("");
  const [selectedAluno, setSelectedAluno] = useState<Aluno | undefined>(undefined);
  const [alunosData, setAlunosData] = useState<Promise<Aluno[]>>();

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-4">Alunos</h1>
      <div className='w-full'>
        <div className="flex justify-end gap-3">
          <Input
            placeholder="Pesquisar..."
            name="searchString"
            value={searchString}
            onChange={(e) => setSearchString(e.currentTarget.value)}
          />
          <Link href="/alunos/novo">
            <Button className="mb-3">
              <Plus className="w-5 h-5 mr-2" />
              Novo
            </Button>
          </Link>
        </div>
        <ScrollArea className="p-4 h-[700px] border rounded-lg">
          <div className="flex flex-col items-stretch gap-3 py-1 px-3">
            {
              alunos.map((aluno, index) => 
                <AlunoCard 
                  aluno={aluno} 
                  key={index} 
                  onClick={() => setSelectedAluno(aluno)} 
                />
              )
            }
          </div>
        </ScrollArea>
        { selectedAluno && <AlunoModal aluno={selectedAluno} closeAction={() => setSelectedAluno(undefined)} /> }
      </div>
    </div>
  )
}
