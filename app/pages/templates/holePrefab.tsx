import Image from "next/image"
import styled from "styled-components"

export default function HolePrefab(props: any) {

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
    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `
    const Hole = styled.div`
        display: absolute;
        z-index: 1;
    `
    const Character = styled.div`
        display: absolute;
        z-index: 2;
    `

    return (
        <Container>
            <Hole>
                <Image src="/hole.png" alt="hole" width={80} height={80}></Image>            
            </Hole>
            <Character>
                <Gopher></Gopher>
            </Character>
            <Character>
                <LispAlien></LispAlien>
            </Character>
        </Container>
    )
}