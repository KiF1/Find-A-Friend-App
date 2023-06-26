import { HeaderNearby } from "@/components/Header/HeaderNearby";
import { PetsView } from "@/components/Pets/PetsView";


export default function NearbyPets(){
  return (
    <main className="w-full min-h-screen grid grid-cols-[30%_70%] bg-pink">
      <HeaderNearby />
      <div className="flex flex-col gap-8 p-8">
        <h1 className="text-xl text-blue">Encontre <span className="text-xl text-blue font-bold">324 amigos</span> na sua cidade</h1>
        <PetsView />
      </div>
    </main>
  )
}