import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table'
import { funcionarios } from '@/models/mockedData/data'
import { Funcionario } from '@/models/funcionario.model'
import { Pen, BookMarked, Trash } from 'lucide-react'

interface ITableProps {
  searchString: string
}

const DataRow = ({ funcionario }: { funcionario: Funcionario }) => {
  return (
    <TableRow className='hover:bg-accent hover:text-accent-foreground'>
      <TableCell className="font-medium">{funcionario.id}</TableCell>
      <TableCell>{funcionario.nome}</TableCell>
      <TableCell>{funcionario.telefone}</TableCell>
      <TableCell>{funcionario.cargo}</TableCell>
      <TableCell className='flex gap-2 justify-end'>
        <Pen className='w-5 stroke-emerald-600 cursor-pointer'/>
        <BookMarked className='w-5 stroke-blue-950 cursor-pointer'/>
        <Trash className='w-5 stroke-red-600 cursor-pointer'/>
      </TableCell>
    </TableRow>
  )
}

const FuncionariosTable = ({ searchString }: ITableProps) => {
  return (
    <Table className='max-h-fit'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Código</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {funcionarios.map((item, index) =>
          <DataRow funcionario={item} />
        )}
      </TableBody>
    </Table>

  )
}

export default FuncionariosTable