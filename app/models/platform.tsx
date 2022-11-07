import Hole from "./hole"
import Gopher from "./gopher"
import LispAlien from "./lisp-alien"
import styled from "styled-components"

export default function Platform() {
    const plant_num = 9;

    const Container = styled.div`
        display: flex;
        align-items: center;
    `

    return (
        <Container>
            <Hole></Hole>
        </Container>
    )
}