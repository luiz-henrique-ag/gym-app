export interface Aluno {
  matricula: number,
  cpf?: string,
  nome: string,
  telefone: string,
  email: string,
  dataNascimento: Date,
  altura: number,
  peso: number,
  objetivo: string,
  plano: number,
  vencimento: Date
  planoPago: boolean
  observacoes?: string
}