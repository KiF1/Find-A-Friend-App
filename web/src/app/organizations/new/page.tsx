import { CardPet } from "@/components/CardPet";
import { FormNewOrganization } from "@/components/FormNewOrganization";

export default function New(){
  return (
    <div className="w-[85%] min-h-screen m-auto flex">
      <div className="w-full h-[85%] m-auto my-8 lg:my-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-20">
        <CardPet />
        <FormNewOrganization />
      </div>
    </div>
  )
}