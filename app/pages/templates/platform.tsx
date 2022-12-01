import styled from "styled-components"
import HolePrefab from "./holePrefab";

export default function Platform(props: any) {
    const plant_num = props.plant_num

    const Container = styled.div`
        display: flex;
        align-items: center;
    `

    return (
        <Container>
            <HolePrefab selected_character="gopher"></HolePrefab>
        </Container>
    )
}