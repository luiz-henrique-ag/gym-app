import AlunoForm from "@/components/aluno/aluno-form";

export default function Novo(){
  return(
    <div className="container h-full">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mb-4">Novo</h1>
      <AlunoForm />
    </div>
  )
}