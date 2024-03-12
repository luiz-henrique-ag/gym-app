import { Aluno } from "../aluno.model";
import { Funcionario } from "../funcionario.model";

const funcionarios: Funcionario[] = [
  {
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      telefone: "(11) 98765-4321",
      dataNascimento: "1990-05-15",
      salario: 5000,
      email: "joao.silva@example.com",
      cargo: "Personal"
  },
  {
      id: 2,
      nome: "Maria Oliveira",
      cpf: "987.654.321-00",
      telefone: "(21) 12345-6789",
      dataNascimento: "1985-10-20",
      salario: 6000,
      email: "maria.oliveira@example.com",
      cargo: "Faxineiro"
  },
  {
      id: 3,
      nome: "Pedro Santos",
      cpf: "456.789.123-00",
      telefone: "(31) 55555-5555",
      dataNascimento: "1982-03-08",
      salario: 5500,
      email: "pedro.santos@example.com",
      cargo: "Secretário(a)"
  },
  {
      id: 4,
      nome: "Ana Costa",
      cpf: "789.123.456-00",
      telefone: "(41) 44444-4444",
      dataNascimento: "1995-12-25",
      salario: 4800,
      email: "ana.costa@example.com",
      cargo: "Personal"
  },
  {
      id: 5,
      nome: "Carlos Pereira",
      cpf: "321.654.987-00",
      telefone: "(51) 98765-4321",
      dataNascimento: "1988-08-18",
      salario: 5200,
      email: "carlos.pereira@example.com",
      cargo: "Faxineiro"
  },
  {
      id: 6,
      nome: "Fernanda Martins",
      cpf: "654.987.321-00",
      telefone: "(61) 12345-6789",
      dataNascimento: "1980-11-30",
      salario: 5800,
      email: "fernanda.martins@example.com",
      cargo: "Secretário(a)"
  },
  {
      id: 7,
      nome: "Rafaela Lima",
      cpf: "987.321.654-00",
      telefone: "(71) 55555-5555",
      dataNascimento: "1977-07-07",
      salario: 6200,
      email: "rafaela.lima@example.com",
      cargo: "Personal"
  },
  {
      id: 8,
      nome: "Diego Almeida",
      cpf: "147.258.369-00",
      telefone: "(81) 44444-4444",
      dataNascimento: "1993-04-12",
      salario: 5300,
      email: "diego.almeida@example.com",
      cargo: "Faxineiro"
  },
  {
      id: 9,
      nome: "Juliana Ferreira",
      cpf: "258.369.147-00",
      telefone: "(91) 98765-4321",
      dataNascimento: "1984-09-22",
      salario: 5700,
      email: "juliana.ferreira@example.com",
      cargo: "Secretário(a)"
  },
  {
      id: 10,
      nome: "Lucas Oliveira",
      cpf: "369.147.258-00",
      telefone: "(01) 12345-6789",
      dataNascimento: "1991-06-14",
      salario: 5900,
      email: "lucas.oliveira@example.com",
      cargo: "Personal"
  }
];
const alunos: Aluno[] = [
  {
    matricula: 1,
    nome: "Fulano Silva",
    cpf: "092.123.123-12",
    telefone: "123456789",
    email: "aluno1@example.com",
    dataNascimento: "1990-01-01",
    altura: 170,
    peso: 70,
    objetivo: "Perda de peso",
    plano: 1,
    vencimento: "2023-12-31",
    ultimoPagamento: true,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 2,
    nome: "Ciclano Souza",
    cpf: "125.643.125-65",
    telefone: "987654321",
    email: "aluno2@example.com",
    dataNascimento: "1995-05-15",
    altura: 160,
    peso: 55,
    objetivo: "Ganho de massa muscular",
    plano: 2,
    vencimento: "2023-12-31",
    ultimoPagamento: true,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 3,
    nome: "Beltrano Oliveira",
    cpf: "098.124.243-52",
    telefone: "555123456",
    email: "aluno3@example.com",
    dataNascimento: "1985-07-20",
    altura: 175,
    peso: 80,
    objetivo: "Manutenção",
    plano: 3,
    vencimento: "2023-12-31",
    ultimoPagamento: false,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 4,
    nome: "Sicrano Santos",
    cpf: "092.123.123-12",
    telefone: "999987654",
    email: "aluno4@example.com",
    dataNascimento: "1992-03-10",
    altura: 180,
    peso: 85,
    objetivo: "Perda de peso",
    plano: 1,
    vencimento: "2023-12-31",
    ultimoPagamento: true,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 5,
    nome: "Maria Oliveira",
    cpf: "092.123.123-12",
    telefone: "777654321",
    email: "aluno5@example.com",
    dataNascimento: "1988-12-05",
    altura: 160,
    peso: 60,
    objetivo: "Ganho de massa muscular",
    plano: 2,
    vencimento: "2023-12-31",
    ultimoPagamento: true,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 6,
    nome: "João Pereira",
    cpf: "092.123.123-12",
    telefone: "333999888",
    email: "aluno6@example.com",
    dataNascimento: "1997-09-15",
    altura: 165,
    peso: 75,
    objetivo: "Definição muscular",
    plano: 3,
    vencimento: "2023-12-31",
    ultimoPagamento: true,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 7,
    nome: "Ana Silva",
    cpf: "092.123.123-12",
    telefone: "222555444",
    email: "aluno7@example.com",
    dataNascimento: "1993-02-28",
    altura: 170,
    peso: 68,
    objetivo: "Ganho de força",
    plano: 2,
    vencimento: "2023-12-31",
    ultimoPagamento: false,
    observacoes: "Joelho esquerdo com dores"
  },
  {
    matricula: 8,
    nome: "Jose Preto",
    cpf: "092.123.123-12",
    telefone: "222555444",
    email: "aluno7@example.com",
    dataNascimento: "1993-02-28",
    altura: 170,
    peso: 68,
    objetivo: "Ganho de força",
    plano: 2,
    vencimento: "2023-12-31",
    ultimoPagamento: false,
    observacoes: "Joelho esquerdo com dores"
  },
];


export { funcionarios, alunos }