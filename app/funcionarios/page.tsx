"use client"
import FuncionariosTable from "@/components/funcionarios/funcionarios-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Plus, ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Funcionarios() {
  const [searchString, setSearchString] = useState<string>("");
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
      <FuncionariosTable searchString={searchString} />
    </div>
  )
}