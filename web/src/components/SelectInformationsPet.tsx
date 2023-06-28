'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const PetSchema = z.object({
  age: z.string().min(1, 'Informe a idade'),
  energy_level: z.string().min(3, 'Informe o nível de energia desejado'),
  size: z.string().min(3, 'Informe o tamanho'),
  dependency_level: z.string().min(3, 'Informe o nível de independência'),
})

type PetSearch = z.infer<typeof PetSchema>
export function SelectInformationPets(){
  const { register } = useForm<PetSearch>({
    resolver: zodResolver(PetSchema),
  });

  return(
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
      <div className="flex flex-col gap-1">
          <span className="text-sm text-blue">Idade</span>
          <select {...register('age')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-gray text-center text-blue placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
            <option value="Filhote">Filhote</option>
            <option value="Adulto">Adulto</option>
            <option value="Idoso">Idoso</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-blue">Nível de energia</span>
          <select {...register('energy_level')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-gray text-center text-blue placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
            <option value="Calmo">Calmo</option>
            <option value="Moderado">Moderado</option>
            <option value="Agitado">Agitado</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-blue">Porte do animal</span>
          <select {...register('size')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-gray text-center text-blue placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
            <option value="Pequeno">Pequeno</option>
            <option value="Medio">Medio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-blue">Nível de independência</span>
          <select {...register('dependency_level')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-gray text-center text-blue placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
            <option value="Baixo">Baixo</option>
            <option value="Medio">Medio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
    </div>
  )
}