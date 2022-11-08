import styled from "styled-components"
import HolePrefab from "./holePrefab";

export default function Platform() {
    const plant_num = 9;

    const Container = styled.div`
        display: flex;
        align-items: center;
    `

    return (
        <Container>
            <HolePrefab props=""></HolePrefab>
        </Container>
    )
}