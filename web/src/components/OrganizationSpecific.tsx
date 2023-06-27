import Link from "next/link";
import Image from "next/image";
import whatsapp from "../assets/whats.png"
import { PetsView } from "./Pets/PetsView";
export function OrganizationSpecific(){
  return(
    <div className="w-full ml-auto relative h-screen overflow-y-scroll flex">
       <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto">
          <Image className="w-full h-[500px] rounded-2xl" src="https://uploads.metropoles.com/wp-content/uploads/2020/08/17151314/adoravel-cachorro-olhando-para-o-fotografo_23-2148366928.jpg" width={1900} height={500} alt="" />
          <div className="w-[85%] mx-auto flex flex-col gap-8">
            <h1 className="text-5xl text-blue font-bold">Java Script Academy</h1>
            <span className="text-xl text-blue">Academia de Pets</span>
            <div className="w-full flex flex-wrap gap-x-8 gap-y-0">
              <div className="w-fit flex items-center gap-2">
                <strong className="text-xl text-blue font-bold">Email:</strong>
                <span className="text-lg text-blue">abner.kif1@gmail.com</span>
              </div>
              <div className="w-fit flex items-center gap-2">
                <strong className="text-xl text-blue font-bold">Telefone:</strong>
                <span className="text-lg text-blue">(81) 984421742</span>
              </div>
              <div className="w-fit flex items-center gap-2">
                <strong className="text-xl text-blue font-bold">Cep:</strong>
                <span className="text-lg text-blue">53250-519</span>
              </div>
              <div className="w-fit flex items-center gap-2">
                <strong className="text-xl text-blue font-bold">Endereço:</strong>
                <span className="text-lg text-blue">Rua do meio, 123 , Boa viagem, Recife - PE </span>
              </div>
            </div>
            <h1 className="text-5xl text-blue font-bold">Veja os pets desta organização</h1>
            <PetsView />
            <Link href="" className="w-full bg-green p-4 text-2xl text-white font-bold rounded-2xl flex justify-center items-center gap-4">
              <Image className="w-[30px] h-fit object-contain" src={whatsapp} width={30} height={30} alt="whats" />
              Entre em contato
            </Link>
          </div>
       </div>
      </div>
  )
}