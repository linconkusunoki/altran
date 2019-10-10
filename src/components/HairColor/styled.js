import styled from 'styled-components'

export const Hair = styled.span`
  display: inline-block;
  vertical-align: baseline;
  border-radius: 3px;
  width: 24px;
  height: 10px;
  background: ${props => props.color};
`
