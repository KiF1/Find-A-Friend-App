import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo.png'
import { Pencil, Trash2 } from "lucide-react";

export default function PetInOrg(){
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <Link href={`/pets/1`} className="w-full flex flex-col bg-blue lg:bg-white pb-4 rounded-2xl text-white lg:text-blue hover:bg-blue hover:text-white">
        <div className="w-full relative flex justify-center items-center">
          <Image className="w-full h-32 object-cover rounded-xl" src="https://uploads.metropoles.com/wp-content/uploads/2020/08/17151314/adoravel-cachorro-olhando-para-o-fotografo_23-2148366928.jpg" width={200} height={200} alt="" />
          <div className="w-10 h-10 p-2 bg-yellow border-white rounded-md absolute bottom-[-1.35rem]">
            <Image className="m-auto" src={logo} width={20} height={20} alt="logo" />
          </div>
        </div>
        <strong className="text-center font-bold text-xl mt-8">Zeplhyr</strong>
        <div className="flex items-center px-4 py-4 gap-8">
          <Link className="w-1/2 text-center p-2 bg-white lg:bg-blue rounded-xl text-blue lg:text-white hover:text-blue hover:bg-white" href="/organizations/pets/edit/1">
            <Pencil className="m-auto" />
          </Link>
          <button type="button" className="bg-white lg:bg-blue w-1/2 text-center p-2 border-0 rounded-xl text-blue lg:text-white hover:text-blue hover:bg-white">
            <Trash2 className="m-auto" />
          </button>
        </div>
      </Link>
    </div>
  )
}