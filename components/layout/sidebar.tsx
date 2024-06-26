"use client"
import { PersonIcon, HomeIcon, BackpackIcon, ClipboardIcon, GearIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import AppIcon from './app-icon'

interface INavItem {
  name: string,
  href: string,
  icon: React.ElementType
}

const navItems: INavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon
  },
  {
    name: "Alunos",
    href: "/alunos",
    icon: PersonIcon
  },
  {
    name: "Funcionários",
    href: "/funcionarios",
    icon: BackpackIcon
  },
]

const NavLink = ({ href, icon : Icon, name }: INavItem) => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        size="lg"
        className="w-[200px] text-[16px] flex gap-3 items-center"
      >
        <div className='w-1/5'>
          <Icon />
        </div>
        <div className='w-4/5 flex justify-start'>
          {name}
        </div>
      </Button>
    </Link >
  )
}

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-between min-h-full min-w-[220px] py-4 border border-l-0 shadow-md">
      <Link href="/" className='flex items-center justify-center gap-4'>
        <AppIcon height={30} width={30}/>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Gym App</h1>
      </Link >
      <div className='flex flex-col gap-4 items-center justify-center'>
        {
          navItems.map((item, index) =>
            <NavLink
              key={index} 
              href={item.href} 
              icon={item.icon} 
              name={item.name}
            />
          )
        }
      </div>
      <div>
        <Link href='/config'>
          <Button variant="link" size="lg" className='text-black w-full'>
            <GearIcon width="16" height="16" className='mr-2' />
            Configurações
          </Button>
        </Link>
      </div>
    </aside>
  )
}