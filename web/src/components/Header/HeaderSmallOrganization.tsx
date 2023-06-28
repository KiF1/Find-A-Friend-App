import Link from "next/link"
import logo from "../../assets/logo.png"
import { CornerDownLeft } from "lucide-react";
import Image from "next/image";

export function HeaderSmallOrganization(){
  return(
    <div className="w-full h-screen flex flex-col justify-between p-6 align-center bg-red-100">
        <Link href="/organizations/edit">
          <Image className="w-fit h-fit object-contain" src={logo} width={30} height={30} alt="logo" />
        </Link>
        <Link className="w-[30px] h-[30px] p-1 bg-yellow rounded-lg" href="/pets/nearby">
          <CornerDownLeft width={25} />
        </Link>
      </div>
  )
}