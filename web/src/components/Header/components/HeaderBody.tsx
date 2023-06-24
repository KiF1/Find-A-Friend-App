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

export function HeaderBody(){
  const { register } = useForm<PetSearch>({
    resolver: zodResolver(PetSchema),
  });

  return (
    <div className="flex px-12 py-8 flex-col gap-6 bg-red-50 h-full">
      <h1 className="text-2xl text-white font-sans font-bold">Filtros</h1>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-white">Idade</span>
        <select {...register('age')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-red-200 text-center text-white placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
          <option value="Filhote">Filhote</option>
          <option value="Adulto">Adulto</option>
          <option value="Idoso">Idoso</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-white">Nível de energia</span>
        <select {...register('energy_level')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-red-200 text-center text-white placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
          <option value="Calmo">Calmo</option>
          <option value="Moderado">Moderado</option>
          <option value="Agitado">Agitado</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-white">Porte do animal</span>
        <select {...register('size')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-red-200 text-center text-white placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
          <option value="Pequeno">Pequeno</option>
          <option value="Medio">Medio</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-white">Nível de independência</span>
        <select {...register('dependency_level')} className="w-full h-12 border-[0.5px] rounded-2xl border-transparent text-lg  bg-red-200 text-center text-white placeholder-white focus:border-transparent focus:ring-0" id="estado" name="estado">
          <option value="Baixo">Baixo</option>
          <option value="Medio">Medio</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
    </div>
  )
}