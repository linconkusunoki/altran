import styled from 'styled-components'

export const Avatar = styled.figure`
  flex-shrink: 0;
  border-radius: ${props => (props.variant === 'profile' ? '200px' : '6px')};
  width: ${props => (props.variant === 'profile' ? '200px' : '100px')};
  height: ${props => (props.variant === 'profile' ? '200px' : '70px')};
  margin: ${props => (props.variant === 'profile' ? '0 auto' : '0')};
  background: #ccc;
  overflow: hidden;
  position: relative;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    margin: 0 10px 0 0;
  }
`

export const AvatarImg = styled.img`
  position: absolute;
  height: 100%;
`
