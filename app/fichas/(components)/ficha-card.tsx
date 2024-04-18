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
import { Menu, Trash } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const FichaCard = () => {
  return (
    <Card className="w-[500px] mb-2">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Peito e Costas</CardTitle>
          <Popover>
            <PopoverTrigger>
              <Button variant="ghost" size="icon">
                <Menu size="20"/>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <Button variant='destructive' className="w-full">
                <Trash size='18' className="mr-2"/>
                Excluir
              </Button>
            </PopoverContent>
          </Popover>
        </div>
        <CardDescription>
          Treino focado em hipertrofia para costas e peito.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Exercícios</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
