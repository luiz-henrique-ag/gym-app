import AlunoForm from "@/components/aluno/aluno-form";

export default function Edit({ params }: { params: { id: string } }) {
  return (
    <div className="container h-full">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-4">Novo</h1>
      <AlunoForm aluno={
        {
          matricula: 1,
          nome: "Fulano Silva",
          cpf: "09212312312",
          telefone: "38998989056",
          email: "aluno1@example.com",
          dataNascimento: "1990-01-01",
          altura: 170,
          peso: 70,
          objetivo: "Perda de peso",
          plano: 1,
          vencimento: "18/02",
          ultimoPagamento: true,
          observacoes: "Joelho esquerdo com dores"
        }
      } />
    </div>
  )
}