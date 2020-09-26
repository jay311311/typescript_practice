import React from "react"
import styled from "styled-components"

const Container = styled.span``

interface IProp{
    count: number
}

const Number:React.FunctionComponent<IProp> = ({count}) =>
<Container>{count}</Container>

export default Number