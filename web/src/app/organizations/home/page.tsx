import { BoxInformations } from "@/components/BoxInformations";
import { HeaderSmall } from "@/components/Header/HeaderSmall";
import { ImageView } from "@/components/ImageView";
import { PetsView } from "@/components/Pets/PetsView";
import { TitleComponent } from "@/components/TitleComponent";
import { WhatssapLink } from "@/components/WhatssapLink";

export default function Home(){
  return(
    <div className="w-full grid grid-cols-[20%_80%] sm:grid-cols-[5%_95%] h-screen bg-pink">
      <HeaderSmall />
      <div className="w-full ml-auto relative h-screen overflow-y-scroll flex">
        <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto">
          <div className="flex flex-col gap-8 p-8">
            <h1 className="text-xl text-blue font-bold">Pets da organização</h1>
            <PetsView />
          </div>
        </div>
      </div>
    </div>
  )
}