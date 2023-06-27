import { PetRequirements } from "@/components/Pets/PetRequeriments";
import { OrganizationLink } from "@/components/Pets/OrganizationLink";
import { WhatssapLink } from "@/components/WhatssapLink";
import { HeaderSmall } from "@/components/Header/HeaderSmall";
import { BoxInformations } from "@/components/BoxInformations";
import { TitleComponent } from "@/components/TitleComponent";
import { ImageView } from "@/components/ImageView";

export default function Pet(){
  return(
    <div className="w-full grid grid-cols-[20%_80%] sm:grid-cols-[10%_90%] lg:grid-cols-[5%_95%] h-screen">
      <HeaderSmall />
      <div className="w-full ml-auto relative h-screen overflow-y-scroll flex">
       <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto">
          <ImageView />
          <div className="w-[85%] mx-auto flex flex-col gap-8">
            <TitleComponent />
            <span className="text-lg lg:text-xl text-blue">Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer companhia, uma bagunça mas também ama uma soneca.</span>
            <div className="w-full flex flex-wrap gap-8">
              <BoxInformations />
            </div>
            <OrganizationLink />
            <TitleComponent />
            <div className="w-full flex flex-wrap gap-2">
              <PetRequirements />
            </div>
            <WhatssapLink />
          </div>
       </div>
      </div>
    </div>
  )
}