import React from "react"
import styled from "styled-components"


/* interface IContainerProp{
    isBlue:boolean
}
const Container = styled.span<IContainerProp> 
이것은 아래의 <{isBlue:boolean}과 같은 의미로 쓰임, 
STYLED-CONPONENT는 INTERFACE로 사용 X(권장)>
*/

const Container = styled.span<{isBlue:boolean}>`
color:${props=>(props.isBlue?"blue":"black")}
`

interface IProp{
    count: number
}

const Number:React.FunctionComponent<IProp> = ({count}) =>
(<Container isBlue={count>10}>{count}</Container>)

export default Number