import Link from "next/link";
import Image from "next/image";
import whatsapp from "../assets/whats.png"
import { PetsView } from "./Pets/PetsView";
import { BoxInformations } from "./BoxInformations";
import { ImageView } from "./ImageView";
import { TitleComponent } from "./TitleComponent";
import { WhatssapLink } from "./WhatssapLink";
export function OrganizationSpecific(){
  return(
    <div className="w-full ml-auto relative h-screen overflow-y-scroll flex">
       <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto">
          <ImageView />
          <div className="w-[85%] mx-auto flex flex-col gap-8">
            <TitleComponent />
            <span className="text-lg lg:text-xl text-blue">Academia de Pets</span>
            <div className="w-full flex flex-wrap gap-x-8 gap-y-0">
              <BoxInformations />
            </div>
            <TitleComponent />
            <PetsView />
            <WhatssapLink />
          </div>
       </div>
      </div>
  )
}