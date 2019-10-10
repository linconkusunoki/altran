import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div``

export const PersonalInfo = styled.div`
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 14px;
    display: flex;
    align-items: center;
  }
`

export const WrapperInfo = styled.div`
  margin: 40px 0 0;

  @media (min-width: 768px) {
    padding: 24px;
    margin: 0;
  }
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 20px;

  div {
    margin-right: 5px;
  }

  span {
    font-weight: 700;
    color: rgba(14, 30, 37, 0.84);
  }
`

export const Title = styled.h3`
  color: rgba(14, 30, 37, 0.87);
  font-size: 34px;
  line-height: 30px;
  margin: 0 0 10px;
  text-align: center;
  font-family: 'Rancho';
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const Name = styled.h3`
  color: rgba(14, 30, 37, 0.87);
  font-size: 24px;
  line-height: 30px;
  margin: 0;
`

export const Detail = styled.fieldset`
  border: 2px solid #ddd;
  border-radius: 6px;
  margin: 24px 0;
`
