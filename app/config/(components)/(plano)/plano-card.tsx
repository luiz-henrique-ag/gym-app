import {
  Card,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import List from '@/public/list.gif'

export const PlanoCard = () => {
  return (
    <Card className="flex flex-col gap-4 justify-between items-center cursor-pointer hover:scale-105 transition-all hover:shadow-md p-5">
      <Image 
        src={List} 
        alt="exercise gif" 
        width="80"
        height="80"
      />
      <h3 className='m-0 font-bold text-2xl'>Planos</h3>
    </Card>
  );
};
