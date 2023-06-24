import { HeaderBody } from "./components/HeaderBody";
import { HeaderTop } from "./components/HeaderTop";


export function HeaderNearby(){
  return(
    <div className="flex flex-col">
      <HeaderTop />
      <HeaderBody />
    </div>
  )
}