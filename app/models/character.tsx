import Image from "next/image";
import styled from "styled-components";
import ICharacter from "./interfaces/ICharacter";

export default function Character(props: ICharacter) {
    return (
        <div>
            <Image src={props.image_src} alt={props.character_name}
                width={100} height={200} sizes="response"></Image>
        </div>
    )
}