import styled from 'styled-components'

export const Wrapper = styled.div``

export const PersonalInfo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const WrapperInfo = styled.div`
  margin: 24px 0;

  @media (min-width: 768px) {
    padding: 24px;
    margin: 0;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 20px;

  div {
    min-width: 100px;
    text-align: right;
    margin-right: 5px;
  }

  span {
    font-weight: 700;
    color: rgba(14, 30, 37, 0.84);
  }
`

export const Name = styled.h3`
  color: rgba(14, 30, 37, 0.87);
  font-size: 24px;
  line-height: 30px;
  margin: 0;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`

export const Detail = styled.fieldset`
  border: 2px solid #ddd;
  border-radius: 6px;
  margin: 24px 0;
`
