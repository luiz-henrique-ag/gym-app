import { Aluno } from '@/models/aluno.model'
import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Badge } from "@/components/ui/badge"

interface ICardProps {
  aluno: Aluno,
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const AlunoCard = ({ aluno, onClick }: ICardProps) => {
  return (
    <div 
      className="flex gap-6 items-center
        h-[100px] max-h-[100px]
        px-8 py-2 
        border border-gray-300 
        rounded-lg 
        hover:scale-[1.015] cursor-pointer 
        transition-all"
      onClick={onClick}
    >
      <div className='flex gap-2 w-1/4 items-center'>
        <CircleUserRound className='w-14 h-14' strokeWidth="0.8" />
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold'>{aluno.nome}</h2>
          <p className="text-sm text-gray-500">{aluno.telefone}</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-3/4">
        <h2>{aluno.cpf}</h2>
          {aluno.ultimoPagamento ?
            <Badge variant="success" className='py-2 px-4 text-green-800 bg-green-100'>Quitado</Badge> :
            <Badge variant="destructive" className='py-2 px-4 text-red-800 bg-red-100'>Vencido</Badge>
          }
      </div>
    </div>
  )
}

export default AlunoCard