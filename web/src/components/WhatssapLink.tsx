import Link from "next/link";
import Image from "next/image";
import whatsapp from "../assets/whats.png"

export function WhatssapLink(){
  return(
    <Link href="" className="w-full bg-green p-4 text-sm lg:text-2xl text-white font-bold rounded-2xl flex justify-center items-center gap-4">
      <Image className="w-[30px] h-fit object-contain" src={whatsapp} width={30} height={30} alt="whats" />
      Entre em contato
    </Link>
  )
}