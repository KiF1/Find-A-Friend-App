import Image from "next/image";
import logo from "../../assets/logo.png"
import Link from "next/link";

export function PetsView(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <Link href={`/pets/1`} className="w-full flex flex-col gap-8 bg-white pb-4 rounded-2xl text-blue hover:bg-blue hover:text-white">
        <div className="w-full relative flex justify-center items-center">
          <Image className="w-full h-32 object-cover rounded-xl" src="https://uploads.metropoles.com/wp-content/uploads/2020/08/17151314/adoravel-cachorro-olhando-para-o-fotografo_23-2148366928.jpg" width={200} height={200} alt="" />
          <div className="w-10 h-10 p-2 bg-yellow border-white rounded-md absolute bottom-[-1.35rem]">
            <Image className="m-auto" src={logo} width={20} height={20} alt="logo" />
          </div>
        </div>
        <strong className="text-center font-bold text-xl">Zeplhyr</strong>
      </Link>
    </div>
  )
}