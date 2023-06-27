import Image from "next/image";

export function ImageView(){
  return(
    <Image className="w-full h-fit lg:h-[500px] rounded-2xl" src="https://uploads.metropoles.com/wp-content/uploads/2020/08/17151314/adoravel-cachorro-olhando-para-o-fotografo_23-2148366928.jpg" width={1900} height={500} alt="" />
  )
}