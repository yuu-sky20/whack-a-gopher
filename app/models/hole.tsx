import Image from "next/image"
import styled from "styled-components"
import IHole from "./interfaces/IHole"

export default function Hole(props: IHole) {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `

    return (
        <Container>
            <Image src="/hole" alt="hole"></Image>            
            <Image src="/hole_cover" alt="hole-cover"></Image>
            {/* TODO : 
                    patch styles
                    patch image
                    
                    layout
                        hole: back
                        image: middle
                        hole-cover: front
                    
            */}
        </Container>
    )
}