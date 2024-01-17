"use client"

import { Aluno } from '@/models/aluno.model'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '../ui/select'
import { cn } from '@/lib/utils'
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'
import { Calendar } from "@/components/ui/calendar"
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

interface IFormProps {
  aluno?: Aluno
}

const AlunoForm = ({ aluno }: IFormProps) => {
  const [newAluno, setNewAluno] = useState<Aluno | undefined>(undefined);
  const [dateNasc, setDateNasc] = useState<Date>()
  const [dateVencimento, setDateVencimento] = useState<Date>();
  if (aluno) {
    setNewAluno(aluno)
  }
  return (
    <form method='post' onSubmit={(e) => e.preventDefault()}>
      <div className='flex flex-col gap-3'>
        <h2 className='font-bold'>Dados Pessoais</h2>
        {
          aluno
          &&
          <div>
            <label>Matrícula</label>
            <Input disabled value={aluno.matricula} />
          </div>
        }

        <div>
          <label>Nome</label>
          <Input />
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div>
            <label>CPF</label>
            <Input placeholder='Ex: 123.456.789-10' />
          </div>
          <div>
            <label>Telefone</label>
            <Input placeholder='Ex: (38) 9 9332-3283' />
          </div>
          <div>
            <label>Data Nasc.</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateNasc && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateNasc ? format(dateNasc, "dd/MM/yyyy") : <span>Escolha uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateNasc}
                  onSelect={setDateNasc}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className='mb-4'>
          <label>E-Mail</label>
          <Input placeholder='exemplo@email.com' />
        </div>
        <h2 className='font-bold'>Características</h2>
        <div className='grid grid-cols-3 gap-2 mb-4'>
          <div>
            <label>Altura</label>
            <Input placeholder='cm' type='number' />
          </div>
          <div>
            <label>Peso</label>
            <Input placeholder='kg' type='number' />
          </div>
          <div>
            <label>Objetivo</label>
            <Input placeholder='Emagrecimento, hipertrofia, etc.' />
          </div>
        </div>
        <h2 className='font-bold'>Informações do Plano</h2>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <h2>Plano</h2>
            <Select defaultValue='mensal'>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="mensal">Mensal</SelectItem>
                  <SelectItem value="anual">Anual</SelectItem>
                  <SelectItem value="3x-semana">3x Semana</SelectItem>
                  <SelectItem value="4x-semana">4x Semana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label>Vencimento</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateVencimento && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateVencimento ? format(dateVencimento, "dd/MM/yyyy") : <span>Escolha uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateVencimento}
                  onSelect={setDateVencimento}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <label>Observações</label>
          <Textarea placeholder='Dor no joelho, Hérnia de disco, etc.' />
        </div>
        <div className='flex items-center justify-end'>
          <Button variant="success" size="lg" onClick={(e) => e.preventDefault()}>Salvar</Button>
        </div>
      </div>
    </form>
  )
}

export default AlunoForm