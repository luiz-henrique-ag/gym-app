import React, { SetStateAction } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "../../../components/ui/table";
import { funcionarios } from "@/models/mockedData/data";
import { Personal } from "@/models/personal.model";

interface ITableProps {
  searchString: string;
  setSelectedFuncionario: React.Dispatch<SetStateAction<Personal | undefined>>;
}

const DataRow = ({
  personal,
  onClick,
}: {
  personal: Personal;
  onClick: React.MouseEventHandler<HTMLTableRowElement>;
}) => {
  return (
    <TableRow
      className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
      onClick={onClick}
    >
      <TableCell className="font-medium">{personal.id}</TableCell>
      <TableCell>{personal.nome}</TableCell>
      <TableCell>{personal.telefone}</TableCell>
    </TableRow>
  );
};

export const PersonalTable = ({
  searchString,
  setSelectedFuncionario,
}: ITableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Código</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Telefone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {funcionarios.map((item, index) => (
          <DataRow
            personal={item}
            key={index}
            onClick={() => setSelectedFuncionario(item)}
          />
        ))}
      </TableBody>
    </Table>
  );
};
