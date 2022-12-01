import styled from "styled-components"
import HolePrefab from "./holePrefab";
import PlatformInterface from "../../interfaces/PlatformInterface";


const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const TopPlatform = styled.div`
    display: flex;
    justify-content: space-around;
`
const BottomPlatform = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function Platform(props: PlatformInterface) {

    

    return (
        <Container>
            <TopPlatform>
                <HolePrefab selected_character=""></HolePrefab>
                <HolePrefab selected_character="lisp-alien"></HolePrefab>
            </TopPlatform>
            <BottomPlatform>
                <HolePrefab selected_character="gopher"></HolePrefab>
                <HolePrefab selected_character="lisp-alien"></HolePrefab>
                <HolePrefab selected_character="gopher"></HolePrefab>
            </BottomPlatform>
        </Container>
    )
}