import { HeaderSmallOrganization } from "@/components/Header/HeaderSmallOrganization";
import PetInOrg from "@/components/Pets/PetInOrg";
import Link from "next/link";

export default function Home(){
  return(
    <div className="w-full grid grid-cols-[20%_80%] sm:grid-cols-[5%_95%] h-screen bg-pink">
      <HeaderSmallOrganization />
      <div className="w-full ml-auto relative h-screen overflow-y-scroll flex">
        <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto">
          <div className="flex flex-col gap-8 p-8">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
              <h1 className="text-lg lg:text-xl text-blue font-bold">Pets da organização</h1>
              <Link href="/organizations/newPet" className="w-fit rounded-2xl border-transparent bg-red-50 px-4 py-2 text-white text-lg lg:text-xl font-bold">Adicionar um Pet</Link>
            </div>
            <PetInOrg />
          </div>
        </div>
      </div>
    </div>
  )
}