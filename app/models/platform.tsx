import Image from "next/image";
import Gopher from "./gopher";
import LispAlien from "./lisp-alien";

export default function Platform() {
    const plant_num = 9;

    const Hole = (
        <div>
            <Image src="/hole" alt="hole"></Image>            
        </div>
    )
    const HoleCover = (
        <div>
            <Image src="/hole_cover" alt="hole-cover"></Image>
        </div>
    )

    return (
        <div>
            {Hole}
            {HoleCover}
            <Gopher />
        </div>
    )
}