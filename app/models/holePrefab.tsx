import Image from "next/image"
import styled from "styled-components"

export default function HolePrefab(props: any) {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `
    const HoleCover = styled.div`
        z-index: 3;
    `
    const Character = styled.div`
        z-index: 2;
    `
    const Hole = styled.div`
        z-index: 1;
    `

    return (
        <Container>
            <Hole>
                <Image src="/hole" alt="hole"></Image>            
            </Hole>
            <HoleCover>
                <Image src="/hole-cover" alt="hole-cover"></Image>
            </HoleCover>
            <Character>
                <Image src={props.image_src} alt={props.name} sizes="full"></Image>
            </Character>
        </Container>
    )
}