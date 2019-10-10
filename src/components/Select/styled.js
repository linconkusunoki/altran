import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const Select = styled.select`
  display: block;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  background: #f1edff;
`

export const Label = styled.label`
  white-space: nowrap;
`
