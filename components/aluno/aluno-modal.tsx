import { Button } from '../ui/button'
import React, { useState } from 'react'
import { Aluno } from '@/models/aluno.model'
import { Cross2Icon } from '@radix-ui/react-icons'
import { CircleUserRound, CreditCard, PenSquare, Trash2 } from 'lucide-react'
import Link from 'next/link'
import ConfirmDialog from '../ui/confirm-dialog'

interface IModalProps {
  aluno: Aluno,
  closeAction: React.MouseEventHandler<HTMLButtonElement>
}

const AlunoModal = ({ aluno, closeAction }: IModalProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState<Aluno>();

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
        <div className='flex gap-8 mb-5'>
          <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-semibold mb-3'>Dados Pessoais</h2>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Matrícula</h2>
              <p className='text-sm text-muted-foreground'>{aluno.matricula}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Nome</h2>
              <p className='text-sm text-muted-foreground'>{aluno.nome}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>CPF</h2>
              <p className='text-sm text-muted-foreground'>{aluno?.cpf}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Telefone</h2>
              <p className='text-sm text-muted-foreground'>{aluno.telefone}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>E-Mail</h2>
              <p className='text-sm text-muted-foreground'>{aluno.email}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Data Nasc.</h2>
              <p className='text-sm text-muted-foreground'>{aluno.dataNascimento}</p>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-semibold mb-3'>Características</h2>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Altura</h2>
              <p className='text-sm text-muted-foreground'>{aluno.altura} cm</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Peso</h2>
              <p className='text-sm text-muted-foreground'>{aluno.peso} Kg</p>
            </div>
            <div className='flex gap-4 items-center justify-between flex-wrap'>
              <h2 className='font-semibold'>Objetivo</h2>
              <p className='text-sm text-muted-foreground'>{aluno.objetivo}</p>
            </div>
            <div className='flex flex-col'>
              <h2 className='font-semibold mb-1'>Observações</h2>
              {
                aluno.observacoes && <p className='text-sm text-muted-foreground'>{aluno.observacoes}</p>
              }
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-semibold mb-3'>Plano</h2>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Tipo</h2>
              <p className='text-sm text-muted-foreground'>{aluno.plano}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Situação</h2>
              <p className={`text-sm ${aluno.ultimoPagamento ? "text-green-600" : "text-red-600"}`}>{aluno.ultimoPagamento ? "Quitado" : "Em Débito"}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <h2 className='font-semibold'>Vencimento</h2>
              <p className='text-sm text-muted-foreground'>{aluno.vencimento}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <Button variant="success" disabled={aluno.ultimoPagamento}>
            <CreditCard className='h-4 w-4 mr-2' />
            Quitar
          </Button>
          <div className='flex justify-end items-end gap-4'>
            <Link href={`alunos/editar/${aluno.matricula}`}>
              <Button variant="outline">
                <PenSquare className='h-4 w-4 mr-2' />
                Editar
              </Button>
            </Link>
            <Button variant="destructive" onClick={() => setShowConfirmModal(aluno)}>
              <Trash2 className='h-4 w-4 mr-2' />
              Excluir
            </Button>
          </div>
        </div>
      </div>
      {showConfirmModal && <ConfirmDialog onCancel={() => setShowConfirmModal(undefined)}/>}
    </div>
  )
}

export default AlunoModal