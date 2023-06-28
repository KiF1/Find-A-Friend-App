import Link from "next/link";
import Image from "next/image";
import whats from "../../assets/Whatsapp.png"

export function OrganizationLink(){
  return(
    <Link href="/organizations/1" className="w-full flex flex-col lg:flex-row gap-4 my-8 py-8 border-y-[3px] border-y-gray">
      <Image className="rounded-2xl h-fit w-full object-cover lg:w-fit" width={100} height={100} alt="" src="https://www.planetanimal.com.br/app/fotos/blog/1072-131923149_3608658479217534_6914673330563732022_o.jpg" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl lg:text-2xl text-blue font-bold">JavaScript Academy</h1>
        <span className="text-lg lg:text-xl text-blue">Rua do meio, 123 , Boa viagem, Recife - PE </span>
        <div className="w-fit bg-gray p-4 rounded-2xl flex items-center gap-4">
          <Image className="w-[30px] h-fit object-contain" src={whats} width={30} height={30} alt="whats" />
          <span className="text-sm lg:text-xl text-blue font-bold">(81) 1234.4567</span>
        </div>
      </div>
    </Link>
  )
}