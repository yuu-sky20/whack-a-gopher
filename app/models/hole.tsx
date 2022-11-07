import Image from "next/image"
import IHole from "./interfaces/IHole"

export default function Hole(props: IHole) {
    return (
        <div>
            <Image src="/hole" alt="hole"></Image>            
            <Image src="/hole_cover" alt="hole-cover"></Image>
        </div>
    )
}