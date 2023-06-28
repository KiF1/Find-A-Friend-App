import { CardPet } from "@/components/CardPet";
import { FormLogin } from "@/components/FormLogin";

export default function Login(){
  return(
    <div className="w-[85%] min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-20 my-8 sm:my-auto">
      <CardPet />
      <FormLogin />
    </div>
  )
}