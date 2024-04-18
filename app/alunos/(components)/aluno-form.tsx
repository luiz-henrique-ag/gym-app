"use client"

import { Aluno } from '@/models/aluno.model'
import React, { useState } from 'react'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '../../../components/ui/select'
import {InputMask} from '../../../components/inputs/input-mask'

interface IFormProps {
  aluno?: Aluno
}

const AlunoForm = ({ aluno }: IFormProps) => {
  const [currentAluno, setCurrentAluno] = useState<Aluno>({} as Aluno);
  const [isNew, setIsNew] = useState<boolean>(true);
  if (aluno && isNew) {
    setCurrentAluno(aluno);
    setIsNew(false);
  }
  /* Trata dos eventos de mudança dos campos do formulário */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentAluno({
      ...currentAluno,
      [name]: value
    })
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(currentAluno);
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
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
          <label htmlFor='nome'>Nome</label>
          <Input 
            placeholder='Ex: Pedro Silva Nunes'
            id='nome' 
            name='nome' 
            value={currentAluno.nome} 
            onChange={handleChange}
          />
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div>
            <label htmlFor='cpf'>CPF</label>
            <InputMask 
              placeholder='Ex: 123.456.789-10'
              id='cpf'
              name='cpf'
              mask='cpf'
              value={currentAluno.cpf} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor='telefone'>Telefone</label>
            <InputMask 
              placeholder='Ex: (38) 99332-3283' 
              id="telefone" 
              name="telefone"
              mask='phone'
              value={currentAluno.telefone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Data Nasc.</label>
            <InputMask 
              placeholder='Ex: 24/03/2002' 
              id="dataNascimento" 
              name="dataNascimento"
              mask='date'
              value={currentAluno.dataNascimento}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='email'>E-Mail</label>
          <Input
            placeholder='exemplo@email.com'
            type='email'
            id='email'
            name='email'
            value={currentAluno.email}
            onChange={handleChange}
          />
        </div>
        <h2 className='font-bold'>Características</h2>
        <div className='grid grid-cols-3 gap-2 mb-4'>
          <div>
            <label htmlFor='altura'>Altura</label>
            <Input
              placeholder='cm'
              type='number'
              id='altura'
              name='altura'
              value={currentAluno.altura}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='peso'>Peso</label>
            <Input
              placeholder='kg'
              type='number'
              id='peso'
              name='peso'
              value={currentAluno.peso}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='objetivo'>Objetivo</label>
            <Input
              placeholder='Emagrecimento, hipertrofia, etc.'
              id='objetivo'
              name='objetivo'
              value={currentAluno.objetivo}
              onChange={handleChange}
            />
          </div>
        </div>
        <h2 className='font-bold'>Informações do Plano</h2>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <label>Plano</label>
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
            <label htmlFor='vencimento'>Vencimento</label>
            <InputMask
              placeholder='Ex: 15/02'
              id='vencimento'
              name='vencimento'
              mask='halfDate'
              onChange={handleChange}
              value={currentAluno.vencimento}
            />
          </div>
        </div>
        <div>
          <label htmlFor='obs'>Observações</label>
          <Textarea
            placeholder='Dor no joelho, Hérnia de disco, etc.'
            id='obs'
            name='observacoes'
            value={currentAluno.observacoes}
            onChange={handleChange}
          />
        </div>
        <div className='flex items-center justify-end'>
          <Button
            variant="success"
            size="lg"
            type='submit'
          >
            Salvar
          </Button>
        </div>
      </div>
    </form>
  )
}

export default AlunoForm