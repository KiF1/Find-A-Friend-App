import Image from "next/image";
import whats from "../../../assets/Whatsapp.png"
import whatsapp from "../../../assets/whats.png"
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { HeaderSmall } from "@/components/HeaderSmall";

export default function Pet(){
  return(
    <div className="w-full grid grid-cols-[5%_95%] h-screen">
      <HeaderSmall />
      <div className="w-full ml-auto relative h-screen overflow-y-scroll flex">
       <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto">
          <Image className="w-full h-[500px] rounded-2xl" src="https://uploads.metropoles.com/wp-content/uploads/2020/08/17151314/adoravel-cachorro-olhando-para-o-fotografo_23-2148366928.jpg" width={1900} height={500} alt="" />
          <div className="w-[85%] mx-auto flex flex-col gap-8">
            <h1 className="text-5xl text-blue font-bold">Alfredo</h1>
            <span className="text-xl text-blue">Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer companhia, uma bagunça mas também ama uma soneca.</span>
            <div className="w-full flex flex-wrap gap-8">
              <div className="w-fit bg-gray flex p-4 gap-2 border border-gray rounded-md">
                <span className="text-xl text-blue font-bold">Nivel de Energia:</span>
                <span className="text-xl text-blue font-bold">Baixa</span>
              </div>
              <div className="w-fit bg-gray flex p-4 gap-2 border border-gray rounded-md">
                <span className="text-xl text-blue font-bold">Tamanho:</span>
                <span className="text-xl text-blue font-bold">Médio</span>
              </div>
              <div className="w-fit bg-gray flex p-4 gap-2 border border-gray rounded-md">
                <span className="text-xl text-blue font-bold">Idade:</span>
                <span className="text-xl text-blue font-bold">Filhote</span>
              </div>
              <div className="w-fit bg-gray flex p-4 gap-2 border border-gray rounded-md">
                <span className="text-xl text-blue font-bold">Precisa de um ambiente:</span>
                <span className="text-xl text-blue font-bold">Amplo</span>
              </div>
            </div>
            <Link href="/organizations/1" className="w-full flex gap-4 my-8 py-8 border-y-[3px] border-y-gray">
              <Image className="rounded-2xl h-fit" width={100} height={100} alt="" src="https://www.planetanimal.com.br/app/fotos/blog/1072-131923149_3608658479217534_6914673330563732022_o.jpg" />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-blue font-bold">JavaScript Academy</h1>
                <span className="text-xl text-blue">Rua do meio, 123 , Boa viagem, Recife - PE </span>
                <Link href="/organizations/1" className="w-fit bg-gray p-4 text-xl text-blue font-bold rounded-2xl flex items-center gap-4">
                  <Image className="w-[30px] h-fit object-contain" src={whats} width={30} height={30} alt="whats" />
                  (81) 1234.4567
                </Link>
              </div>
            </Link>
            <h1 className="text-5xl text-blue font-bold">Requesitos para adoção</h1>
            <div className="w-full flex flex-wrap gap-2">
              <div className="w-fit flex items-center gap-2 border-red-50 border-2 rounded-xl p-4">
                <AlertCircle className="ml-12" color="#F15156" />
                <span className="text-xl text-red-50 font-bold">Local grande para o animal correr e brincar.</span>
              </div>
            </div>
            <Link href="" className="w-full bg-green p-4 text-2xl text-white font-bold rounded-2xl flex justify-center items-center gap-4">
              <Image className="w-[30px] h-fit object-contain" src={whatsapp} width={30} height={30} alt="whats" />
              Entre em contato
            </Link>
          </div>
       </div>
      </div>
    </div>
  )
}