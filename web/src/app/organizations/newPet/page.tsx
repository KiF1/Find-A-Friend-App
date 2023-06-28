import { FormNewPet } from "@/components/FormNewPet";
import { HeaderSmall } from "@/components/Header/HeaderSmall";
import { TitleComponent } from "@/components/TitleComponent";

export default function NewPet(){
  return (
    <div className="w-full grid grid-cols-[20%_80%] sm:grid-cols-[5%_95%] h-screen bg-pink">
      <HeaderSmall />
      <div className="w-full ml-auto my-auto relative h-[85%] overflow-y-scroll flex bg-pink">
        <div className="w-[85%] py-12 flex flex-col gap-6 absolute left-0 right-0 m-auto bg-white rounded-2xl">
          <div className="w-full m-auto lg:w-[70%] flex flex-col gap-8 p-8">
            <TitleComponent />
            <FormNewPet />
          </div>
        </div>
      </div>
    </div>
  )
}