import Link from "next/link";
import { TitleComponent } from "./TitleComponent";
import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";

export function FormNewOrganization(){
  return(
    <form className="w-full lg:relative h-full lg:overflow-y-scroll">
      <div className="w-full lg:absolute flex flex-col gap-8">
        <TitleComponent />
        <fieldset className="w-full flex flex-col gap-4">
          <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg">
            <Camera className="h-4 w-4" />
            Anexar Logo
          </label>
          <MediaPicker />
          <input type="text" placeholder="Nome" 
          className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
          <input type="text" placeholder="Descrição" 
          className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
          <input type="email" placeholder="Email" 
          className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
          <input type="text" placeholder="Cep" 
          className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
          <input type="password" placeholder="Senha" 
          className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
          <input type="password" placeholder="Confirmar Senha" 
          className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
        </fieldset>
        <button type="submit" className="w-full rounded-2xl border-transparent bg-blue px-2 py-4 text-white text-xl font-bold">Enviar</button>
        <Link href="/organizations/login" className="w-full text-center rounded-2xl border-transparent bg-gray px-2 py-4 text-blue text-xl font-bold">Já possui uma conta?</Link>
      </div>
    </form>
  )
}