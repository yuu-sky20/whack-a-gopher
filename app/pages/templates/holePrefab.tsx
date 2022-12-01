import Image from "next/image"
import styled from "styled-components"

const Prefab = styled.div`
    width: 140px;
    height: 200px;
`
const Container = styled.div`
    position: relative;
    flex-direction: column;
`
const Character = styled.div`
    position: absolute;
    z-index: 2;
`
const Hole = styled.div`
    position: absolute;
    z-index: 1;
    top: 70px;
`

export default function HolePrefab(props: any) {

    const Gopher = () => {
        return (
            <Image priority={true} src="/gopher.png" alt="gopher" width={70} height={110}></Image>
        )
    }
    const LispAlien = () => {
        return (
            <Image priority={true} src="/lisp-alien.png" alt="lisp-alien" width={70} height={110}></Image>
        )
    }

    return (
        <Prefab>
            <Container>
                <Character>
                    {props.selected_character == "gopher" && <Gopher></Gopher>}
                    {props.selected_character == "lisp-alien" && <LispAlien></LispAlien>}
                </Character>
                <Hole>
                    <Image src="/hole.png" alt="hole" width={80} height={80}></Image>            
                </Hole>
            </Container>
        </Prefab>
    )
}