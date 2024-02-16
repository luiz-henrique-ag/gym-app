import { PersonIcon, HomeIcon, BackpackIcon, ClipboardIcon, GearIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import '@/public/icon.svg'
import Image from 'next/image'

interface INavItem {
  name: string,
  href: string,
  icon: React.ReactNode
}

const navItems: INavItem[] = [
  {
    name: "Menu",
    href: "/",
    icon: <HomeIcon />
  },
  {
    name: "Alunos",
    href: "/alunos",
    icon: <PersonIcon />
  },
  {
    name: "Funcionários",
    href: "/funcionarios",
    icon: <BackpackIcon />
  },
  {
    name: "Fichas",
    href: "/fichas",
    icon: <ClipboardIcon />
  },
]

const Nav = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between min-h-full min-w-[220px] py-4 border border-l-0">
      <Link href="/" className='flex items-center justify-center gap-4'>
        <Image src="../../icon.svg" alt="icon" height="30" width="30"/>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Gym App</h1>
      </Link >
      <div className='flex flex-col gap-4'>
        {
          navItems.map((item, index) =>
            <Link href={item.href} key={index}>
              <Button 
                variant="link" 
                size="lg" 
                className='w-full text-[16px] flex gap-3 justify-center items-center'
              >
                {item.icon}
                {item.name}
              </Button>
            </Link >
          )
        }
      </div>
      <div className="flex gap-1 flex-col">
        <Button variant="link" size="lg">
          <GearIcon width="16" height="16" className='mr-2' />
          Configurações
        </Button>
      </div>
    </div>
  )
}

export default Nav