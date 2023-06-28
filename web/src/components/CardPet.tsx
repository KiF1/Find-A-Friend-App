import Image from "next/image";
import logo from "../assets/logo.png";
import pets from "../assets/pets.png";

export function CardPet(){
  return(
    <div className="w-full h-fit lg:h-[85vh] gap-10 bg-red-50 rounded-3xl p-8 flex flex-col justify-between items-center">
      <div className="flex items-center gap-4">
        <Image width={40} height={40} alt="logo" src={logo} />
        <span className="text-lg font-bold text-white">FindAFriendApp</span>
      </div>
      <Image src={pets} alt="" />
    </div>
  )
}