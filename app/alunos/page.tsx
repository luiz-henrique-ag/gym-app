"use client"

import AlunoCard from "@/components/aluno/aluno-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Aluno } from "@/models/aluno.model"
import { useState } from "react"
import AlunoModal from "@/components/aluno/aluno-modal"
import { ScrollArea } from "@/components/ui/scroll-area"
import { alunos } from "@/models/mockedData/data"

export default function Alunos() {
  const [searchParam, setSearchParam] = useState<string>("");
  const [selectedAluno, setSelectedAluno] = useState<Aluno | undefined>(undefined);
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-4">Alunos</h1>
      <div className='w-full'>
        <div className="flex justify-end gap-3">
          <Input
            placeholder="Pesquisar..."
            name="searchParam"
            value={searchParam}
            onChange={(e) => setSearchParam(e.currentTarget.value)}
          />
          <Link href="/alunos/novo">
            <Button className="mb-3">
              <Plus className="w-5 h-5 mr-2" />
              Novo
            </Button>
          </Link>
        </div>
        <ScrollArea className="max-h-[900px]">
          <div className="flex flex-col items-stretch gap-3 py-1 px-3">
            {
              alunos.map((aluno, index) => <AlunoCard aluno={aluno} key={index} onClick={() => setSelectedAluno(aluno)} />)
            }
          </div>
        </ScrollArea>
        {selectedAluno && <AlunoModal aluno={selectedAluno} closeAction={() => setSelectedAluno(undefined)} />}
      </div>
    </div>
  )
}
