import { TitleComponent } from "./TitleComponent";
import { Camera, Minus, Plus } from "lucide-react";
import { MediaPicker } from "./MediaPicker";
import { SelectInformationPets } from "./SelectInformationsPet";
export function FormNewPet(){
  return(
    <form className="w-full flex flex-col gap-8">
      <fieldset className="w-full flex flex-col gap-4">
        <label htmlFor="media" className="flex flex-col lg:flex-row cursor-pointer items-center gap-1.5 rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg">
          <Camera className="h-4 w-4" />
          Anexar Foto do Pet
        </label>
        <MediaPicker />
        <input type="text" placeholder="Nome" 
        className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
        <input type="text" placeholder="Descrição" 
        className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
       <div className="w-full flex flex-col mt-8 gap-4">
          <TitleComponent />
          <SelectInformationPets />
       </div>
       <div className="w-full flex flex-col mt-8 gap-4">
          <TitleComponent />
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <button type="button" className="w-fit rounded-2xl border-transparent bg-gray px-2 py-4 text-blue text-xl font-bold">
              <Minus />
            </button>
            <span className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue text-lg">Texto Adicionado</span>
          </div>
          <input type="text" placeholder="Insira um Requisito" 
           className="w-full rounded-2xl border-transparent bg-gray px-4 py-2 text-blue placeholder-blue text-lg focus:border-transparent focus:ring-0" />
          <button type="button" className="w-full rounded-2xl border-transparent bg-red-50 px-2 py-4 text-white text-xl font-bold">
            <Plus className="m-auto" />
          </button>
       </div>
      </fieldset>
      <button type="submit" className="w-full rounded-2xl border-transparent bg-blue px-2 py-4 text-white text-xl font-bold">Enviar</button>
    </form>
  )
}