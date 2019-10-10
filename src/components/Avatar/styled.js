import styled from 'styled-components'

export const Avatar = styled.figure`
  flex-shrink: 0;
  border-radius: ${props => (props.variant === 'profile' ? '0' : '6px')};
  box-shadow: ${props =>
    props.variant === 'profile' ? '-20px 20px 0 0 #5f5fae' : '6px'};
  width: ${props => (props.variant === 'profile' ? '200px' : '100px')};
  height: ${props => (props.variant === 'profile' ? '200px' : '70px')};
  margin: ${props => (props.variant === 'profile' ? '0 auto' : '0 15px 0 0')};
  background: #ccc;
  overflow: hidden;
  position: relative;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    margin: 0 10px 0 40px;
  }
`

export const AvatarImg = styled.img`
  position: absolute;
  height: 100%;
`
