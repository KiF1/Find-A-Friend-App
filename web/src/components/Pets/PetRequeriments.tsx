import { AlertCircle } from "lucide-react";

export function PetRequirements(){
  return(
    <div className="w-fit flex flex-col lg:flex-row items-center gap-2 border-red-50 border-2 rounded-xl p-4">
      <AlertCircle className="lg:ml-12" color="#F15156" />
      <span className="text-lg lg:text-xl text-red-50 font-bold">Local grande para o animal correr e brincar.</span>
    </div>
  )
}