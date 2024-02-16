import { Aluno } from '@/models/aluno.model'
import { Funcionario } from '@/models/funcionario.model'
import { Cross2Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from './button'

interface DialogProps{
  person?: Aluno | Funcionario
  onCancel: React.MouseEventHandler<HTMLButtonElement>
}

const ConfirmDialog = ({ person, onCancel } : DialogProps) => {
  return (
    <div>
      <div className='fixed top-0 left-0 w-screen h-screen bg-black opacity-60 z-[19]'></div>
      <div className="flex flex-col
        fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white
        min-w-[450px] p-7 border
        z-20 shadow-md
        rounded-md mx-auto"
      >
        <div className='flex justify-between mb-2 items-center'>
          <h2 className='text-xl font-semibold'>Excluir</h2>
          <button onClick={onCancel} className='m-0'>
            <Cross2Icon />
          </button>
        </div>
        <div className='mb-2'>
          <p className="text-sm text-muted-foreground">
            Tem certeza que deseja excluir?
          </p>
        </div>
        <div className='flex justify-end items-end gap-2'>
          <Link href="">
            <Button variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
          </Link>
          <Button>
            Excluir
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog