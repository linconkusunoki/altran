import styled from 'styled-components'
import bg from '../../images/background.png'

export const Main = styled.main`
  margin: 90px auto 0;
  overflow: hidden;

  :before {
    background: #0e1e24 url(${bg}) no-repeat;
    background-position: center;
    background-size: cover;
    content: ' ';
    display: block;
    height: 264px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;

    @media (min-width: 1178px) {
      background-position: center -620px;
    }
  }
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  color: rgba(14, 30, 37, 0.54);
  display: flex;
  flex-direction: column;
  min-width: 264px;
  padding: 24px;
`
