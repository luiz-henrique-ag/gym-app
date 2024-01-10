import { Aluno } from '@/models/aluno.model'
import { CircleUserRound } from 'lucide-react'
import React from 'react'

interface ICardProps {
  aluno: Aluno,
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const AlunoCard = ({ aluno, onClick } : ICardProps) => {
  return (
    <div className="flex gap-6 items-center
      w-full h-[100px] max-h-[100px]
      px-8 py-2 
      border border-gray-300 
      shadow-md rounded-lg 
      hover:scale-[1.02] hover:cursor-pointer 
      transition-all"
      onClick={onClick}
    >
      <div className='flex gap-2 w-1/4 items-center'>
        <CircleUserRound className='w-14 h-14' strokeWidth="0.8"/>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold'>{aluno.nome}</h2>
          <p className="text-sm text-gray-500">{aluno.telefone}</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-3/4">
        <h2>{aluno.email}</h2>
        <h2 className={`py-2 px-4 rounded-md ${aluno.planoPago ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
          {aluno.planoPago ? "Quitado" : "Vencido"}
        </h2>
      </div>
    </div>
  )
}

export default AlunoCard