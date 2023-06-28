import Link from "next/link";
import { TitleComponent } from "./TitleComponent";

export function FormLogin(){
  return(
    <form className="w-full flex flex-col gap-8">
      <TitleComponent />
      <fieldset className="w-full flex flex-col gap-4">
        <input type="email" placeholder="Email" 
        className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
        <input type="password" placeholder="Senha" 
        className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
      </fieldset>
      <button type="submit" className="w-full rounded-2xl border-transparent bg-blue px-2 py-4 text-white text-xl font-bold">Enviar</button>
      <Link href="/organizations/new" className="w-full text-center rounded-2xl border-transparent bg-gray px-2 py-4 text-blue text-xl font-bold">Cadastrar minha organização</Link>
    </form>
  )
}