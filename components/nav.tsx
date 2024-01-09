"use client"
import { ExitIcon, PersonIcon, HomeIcon, BackpackIcon, ClipboardIcon, GearIcon } from '@radix-ui/react-icons'
import { Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useTheme } from "next-themes"
import { Dumbbell } from 'lucide-react'

const Nav = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const { setTheme } = useTheme();

  const handleChange = () => {
    setIsDarkTheme(!isDarkTheme)
    if (isDarkTheme) {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }

  return (
    <Flex className="h-full min-w-[220px] left-0 py-4 border border-l-0" direction="column" justify="between">
      <Link href="/" className='flex items-center justify-center gap-4'>
        <Dumbbell className='w-7 h-7'/>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Gym App</h1>
      </Link >
      <div className='flex flex-col gap-4'>
        <Link href="/">
          <Button variant="link" size="lg" className='w-full text-[16px]'>
            <HomeIcon className='mr-6'/>
            Menu
          </Button>
        </Link >
        <Link href="/alunos">
          <Button variant="link" size="lg" className='w-full text-[16px]'>
            <PersonIcon className='mr-6'/>
            Alunos
          </Button>
        </Link>
        <Link href="/funcionarios">
          <Button variant="link" size="lg" className='w-full text-[16px]'>
            <BackpackIcon className='mr-6'/>
            Funcionários
          </Button>
        </Link>
        <Link href="/fichas">
          <Button variant="link" size="lg" className='w-full text-[16px]'>
            <ClipboardIcon className='mr-6'/>
            Fichas
          </Button>
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <Button variant="link" size="lg">
          <GearIcon width="16" height="16" className='mr-2' />
          Configurações
        </Button>
        <Button variant="destructive" size="lg">
          <ExitIcon width="16" height="16" className='mr-2' />
          Sair
        </Button>
      </div>
    </Flex>
  )
}

export default Nav