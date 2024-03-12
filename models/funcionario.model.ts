export interface Funcionario {
  id: number
  nome: string
  cpf: string
  telefone: string
  dataNascimento: string
  salario: number
  email: string
  cargo: "Personal" | "Faxineiro" | "Secretário(a)"
}