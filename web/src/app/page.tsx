import Image from "next/image";
import logo from "../assets/logo.png";
import pets from "../assets/pets.png";
import { SearchPet } from "@/components/SearchPet";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-purple">
      <div className="m-auto flex w-80 flex-col gap-16 rounded-2xl bg-red-50 p-4 sm:p-16 sm:w-2/3">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Image width={40} height={40} alt="logo" src={logo} />
            <span className="text-lg font-bold text-white">FindAFriendApp</span>
          </div>
          <Link href="/organizations/login" className="rounded-2xl border-transparent bg-red-100 py-4 px-6 text-center text-white font-bold text-lg">Login</Link>
        </div>
        <div className="grid w-full items-center gap-8 sm:grid-cols-2">
          <strong className="sm:text-5xl text-3xl font-bold text-white"> Leve a felicidade para o seu lar</strong>
          <Image src={pets} alt="" />
        </div>
        <div className="grid w-full items-center gap-8 sm:grid-cols-2">
          <strong className="text-sm font-bold text-white">Encontre o animal de estimação ideal para seu estilo de vida!</strong>
          <SearchPet />
        </div>
      </div>
    </main>
  );
}
