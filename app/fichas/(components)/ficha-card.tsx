import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Menu, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const ExercicioDesc = () => (
  <div className="flex justify-between">
    <p className="text-muted-foreground">4x Supino Reto</p>
    <div className="flex justify-between gap-5">
      <p className="text-muted-foreground">12 reps.</p>
      <p className="text-muted-foreground">20 kg</p>
    </div>
  </div>
);

interface FichaProps{
  ficha: Object
}

export const FichaCard = () => {
  return (
    <Card className="w-[700px] mb-2">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Peito e Costas</CardTitle>
          <div>
            <Button variant="ghost" size="icon">
              <Download size="18"/>
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button variant="ghost" size="icon">
                  <Menu size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <Button variant="destructive" className="w-full">
                  <Trash size="18" className="mr-2" />
                  Excluir
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <CardDescription>
          Treino focado em hipertrofia para costas e peito.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Exercícios</AccordionTrigger>
            <AccordionContent className="space-y-1">
              <ExercicioDesc />
              <ExercicioDesc />
              <ExercicioDesc />
              <ExercicioDesc />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
