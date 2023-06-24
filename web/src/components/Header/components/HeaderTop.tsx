'use client'

import Image from "next/image";
import logo from "../../../assets/logo.png"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Search } from "lucide-react";

const citySchema = z.object({
  state: z.string(),
  city: z.string().min(3, 'Informe uma Cidade'),
})

type citySearch = z.infer<typeof citySchema>

export function HeaderTop(){
  const { register } = useForm<citySearch>({
    resolver: zodResolver(citySchema),
  });

  return (
    <div className="flex p-12 flex-col gap-8 bg-red-100">
        <Image width={50} height={50} alt="logo" src={logo} />
        <div className="flex items-center justify-between gap-2">
          <select {...register('state')} className="w-20 h-12 border-[0.5px] rounded-2xl appearance-none border-white bg-red-100 text-center text-white placeholder-white focus:border-white focus:ring-0" id="estado" name="estado">
            <option value="Acre">AC</option>
            <option value="Alagoas">AL</option>
            <option value="Amapá">AP</option>
            <option value="Amazonas">AM</option>
            <option value="Bahia">BA</option>
            <option value="Ceará">CE</option>
            <option value="Distrito Federal">DF</option>
            <option value="Espírito Santo">ES</option>
            <option value="Goiás">GO</option>
            <option value="Maranhão">MA</option>
            <option value="Mato Grosso">MT</option>
            <option value="Mato Grosso do Sul">MS</option>
            <option value="Minas Gerais">MG</option>
            <option value="Pará">PA</option>
            <option value="Paraíba">PB</option>
            <option value="Paraná">PR</option>
            <option value="Pernambuco">PE</option>
            <option value="Piauí">PI</option>
            <option value="Rio de Janeiro">RJ</option>
            <option value="Rio Grande do Norte">RN</option>
            <option value="Rio Grande do Sul">RS</option>
            <option value="Rondônia">RO</option>
            <option value="Roraima">RR</option>
            <option value="Santa Catarina">SC</option>
            <option value="São Paulo">SP</option>
            <option value="Sergipe">SE</option>
            <option value="Tocantins">TO</option>
          </select>
          <input {...register('city')}
            className="h-12 rounded-2xl border-white bg-red-100 p-4 text-center text-white placeholder-white focus:border-white focus:ring-0"
            type="text"
            placeholder="Insira o nome da cidade"
          />
          <button className="flex h-12 items-center rounded-xl border-0 bg-yellow px-4">
            <Search color="#0D3B66" width={20} />
          </button>
        </div>
      </div>
  )
}