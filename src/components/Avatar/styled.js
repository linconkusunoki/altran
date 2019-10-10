import styled from 'styled-components'

export const Avatar = styled.figure`
  border-radius: 6px;
  flex-shrink: 0;
  margin: 0 10px 0 0;
  width: 100px;
  height: 70px;
  background: #ccc;
  overflow: hidden;
  position: relative;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const AvatarImg = styled.img`
  position: absolute;
  height: 100%;
`
