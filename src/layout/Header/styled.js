import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  position: relative;
  z-index: 999;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 24px 0;
`

export const Title = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const Logo = styled(Link)`
  display: block;
  width: 50px;
  margin-right: 24px;
  position: relative;
  flex-shrink: 0;

  :before {
    content: '';
    background: #fff;
    position: absolute;
    width: 20px;
    height: 2px;
    right: -15px;
    top: 30px;
    transform: rotate(-25deg);
  }

  @media (min-width: 768px) {
    width: 80px;

    :before {
      top: 50px;
    }
  }
`
