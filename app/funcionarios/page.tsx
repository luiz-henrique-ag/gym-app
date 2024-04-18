"use client"
import { PersonalModal } from "@/app/funcionarios/(components)/personal-modal";
import { PersonalTable } from "@/app/funcionarios/(components)/personal-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Personal } from "@/models/personal.model";
import { funcionarios } from "@/models/mockedData/data";
import { Plus, ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Personais() {
  const [searchString, setSearchString] = useState<string>("");
  const [selectedPersonal, setSelectedPersonal] = useState<Personal>();
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-4">Funcionários</h1>
      <div className='w-full'>
        <div className="flex gap-3 mb-3">
          <Input
            placeholder="Pesquisar..."
            name="searchString"
            value={searchString}
            onChange={(e) => setSearchString(e.currentTarget.value)}
          />
          <Link href="/funcionarios/novo">
            <Button>
              <Plus className="w-5 h-5 mr-2" />
              Novo
            </Button>
          </Link>
        </div>
      </div>
      <ScrollArea className="h-[700px] w-full border rounded-lg">
        <PersonalTable searchString={searchString} setSelectedFuncionario={setSelectedPersonal}/>
      </ScrollArea>
      { selectedPersonal && <PersonalModal closeAction={() => setSelectedPersonal(undefined)} personal={selectedPersonal}/>}
    </div>
  )
}