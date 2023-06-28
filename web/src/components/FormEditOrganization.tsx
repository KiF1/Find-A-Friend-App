import Link from "next/link";
import { TitleComponent } from "./TitleComponent";
import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";

export function FormEditOrganization(){
  return(
    <form className="w-full flex flex-col gap-8">
      <fieldset className="w-full flex flex-col gap-4">
        <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg">
          <Camera className="h-4 w-4" />
          Alterar Logo
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
      </fieldset>
      <button type="submit" className="w-full rounded-2xl border-transparent bg-blue px-2 py-4 text-white text-xl font-bold">Atualizar</button>
    </form>
  )
}