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
`

export const Logo = styled(Link)`
  display: block;
  width: 80px;
  margin-right: 24px;
`
