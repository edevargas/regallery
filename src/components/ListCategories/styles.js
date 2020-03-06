import styled from 'styled-components'

export const SList = styled.ul`
display: flex;
overflow: scroll;
width: 100%;
&::-webkit-scrollbar{
    display: none;
}
`

export const SItem = styled.ul`
padding: 0 8px;
`
