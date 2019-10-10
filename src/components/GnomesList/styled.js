import styled from 'styled-components'
import { FixedSizeList } from 'react-window'
import { Link as RouterLink } from 'react-router-dom'

export const Row = styled.div`
  :hover {
    background-color: rgba(14, 30, 37, 0.05);
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const Details = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 768px) {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`

export const Name = styled.h3`
  color: rgba(14, 30, 37, 0.87);
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`

export const InfoWrapper = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
`

export const Info = styled.div`
  color: rgba(14, 30, 37, 0.54);
  white-space: nowrap;

  &:nth-child(odd) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 50%;

    &:nth-child(odd) {
      display: block;
    }
  }
`

export const Hair = styled.span`
  display: inline-block;
  vertical-align: baseline;
  border-radius: 3px;
  width: 24px;
  height: 10px;
  background: ${props => props.color};
`

export const FiltersWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const Search = styled.input`
  display: block;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  background: #f1f1f1;
  flex: 1;

  @media (min-width: 768px) {
    flex: 0.5;
  }
`

export const SelectsWrapper = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    display: flex;
    flex: 0.4;
  }
`

export const List = styled(FixedSizeList)`
  margin: 0 -24px;
`

export const Link = styled(RouterLink)`
  padding: 12px 24px;
  display: block;
  text-decoration: none;
`
