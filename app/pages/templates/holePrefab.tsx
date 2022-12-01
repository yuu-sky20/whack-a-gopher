import Image from "next/image"
import styled from "styled-components"

export default function HolePrefab(props: any) {

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
        top: 80px;
    `
    const Gopher = () => {
        return (
            <Image src="/gopher.png" alt="gopher" width={80} height={120}></Image>
        )
    }
    const LispAlien = () => {
        return (
            <Image src="/lisp-alien.png" alt="lisp-alien" width={80} height={120}></Image>
        )
    }

    return (
        <Container>
            <Character>
                {props.selected_character == "gopher" && <Gopher></Gopher>}
                {props.selected_character == "lisp-alien" && <LispAlien></LispAlien>}
            </Character>
            <Hole>
                <Image src="/hole.png" alt="hole" width={80} height={80}></Image>            
            </Hole>
        </Container>
    )
}