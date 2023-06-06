'use client'

import { Search } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const citySchema = z.object({
  city: z.string().min(3, 'Informe uma Cidade'),
})

type citySearch = z.infer<typeof citySchema>

export function SearchPet() {
  const { register, watch } = useForm<citySearch>({
    resolver: zodResolver(citySchema),
  });
  const city = watch('city');
  
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
      <span className="text-sm text-white">Busque por Cidade:</span>
      <input {...register('city')}
        className="h-12 rounded-2xl border-transparent bg-red-100 p-4 text-center text-white placeholder-white focus:border-transparent focus:ring-0"
        type="text"
        placeholder="Insira o nome da cidade"
      />
      <Link href={`/pets/nearby?city=${city}`} className="flex h-12 items-center rounded-xl border-0 bg-yellow px-4">
        <Search color="#0D3B66" width={20} />
      </Link>
    </div>
  );
}
