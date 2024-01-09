import { Button } from './ui/button'
import React from 'react'
import { Aluno } from '@/models/aluno.model'
import { AvatarIcon, Cross2Icon, TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { Textarea } from './ui/textarea'
import { CircleUserRound, PenSquare, Trash2 } from 'lucide-react'

interface IModalProps {
  aluno: Aluno,
  closeAction: React.MouseEventHandler<HTMLButtonElement>
}

const AlunoModal = ({ aluno, closeAction }: IModalProps) => {
  return (
    <div>
      <div className='fixed top-0 left-0 w-screen h-screen bg-black opacity-40'></div>
      <div className="flex flex-col
        fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white
        min-w-[450px] p-7 border
        z-10 shadow-md
        rounded-md mx-auto"
      >
        <div className='flex justify-between mb-2 items-center'>
          <h2 className='text-xl font-semibold'>Dados</h2>
          <button onClick={closeAction} className='m-0'>
            <Cross2Icon />
          </button>
        </div>
        <CircleUserRound
          strokeWidth="0.8"
          className="w-24 h-24 mx-auto mb-3"
        />
        <div className='flex flex-col gap-3'>
          <div className='col-span-2 flex gap-2 items-center'>
            <h2 className='font-semibold'>Matrícula</h2>
            <p className=''>{aluno.matricula}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Nome</h2>
            <p className=''>{aluno.nome}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Altura</h2>
            <p className=''>{aluno.altura} cm</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Peso</h2>
            <p className=''>{aluno.peso} Kg</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Plano</h2>
            <p className=''>{aluno.plano}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Telefone</h2>
            <p className=''>{aluno.telefone}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>E-Mail</h2>
            <p className=''>{aluno.email}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Data de Nascimento</h2>
            <p className=''>{aluno.dataNascimento.toLocaleDateString("en-GB")}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>Vencimento</h2>
            <p className=''>{aluno.vencimento.toLocaleDateString("en-GB")}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold'>Observações</h2>
            <Textarea value={aluno?.observacoes}/>
          </div>
        </div>
        <div className='flex justify-end items-end gap-2 mt-3'>
          <Button variant="outline" className=''>
            <PenSquare className='h-4 w-4 mr-2'/>
            Editar
          </Button>
          <Button variant="destructive">
            <Trash2 className='h-4 w-4 mr-2' />
            Excluir
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AlunoModal