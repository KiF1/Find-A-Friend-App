import { HeaderSmall } from "@/components/HeaderSmall";
import { OrganizationSpecific } from "@/components/OrganizationSpecific";

export default function Organization(){
  return(
    <div className="w-full grid grid-cols-[5%_95%] h-screen">
      <HeaderSmall />
      <OrganizationSpecific />
    </div>
  )
}