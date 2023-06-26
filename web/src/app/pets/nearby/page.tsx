import { HeaderNearby } from "@/components/Header/HeaderNearby";
import { PetsView } from "@/components/Pets/PetsView";


export default function NearbyPets(){
  return (
    <main className="w-full min-h-screen grid grid-cols-[30%_70%] bg-pink">
      <HeaderNearby />
      <PetsView />
    </main>
  )
}