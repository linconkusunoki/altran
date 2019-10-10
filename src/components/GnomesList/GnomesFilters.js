import React from 'react'

import Select from '../Select'
import * as S from './styled'

const GnomesFilters = ({ items, onFilter, onSearch, filters }) => {
  const [professions, setProfessions] = React.useState([])
  const [hairColors, setHairColors] = React.useState([])

  React.useEffect(() => {
    let newProfessions = []
    let newHairColors = []

    items.map(item => {
      // group all professions
      item.professions.map(profession => {
        if (!newProfessions.includes(profession)) {
          newProfessions.push(profession)
        }
        return null
      })

      // hair color
      if (!newHairColors.includes(item.hair_color)) {
        newHairColors.push(item.hair_color)
      }

      return null
    })

    setProfessions(newProfessions)
    setHairColors(newHairColors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    onFilter({ [name]: value === '' ? null : value })
  }

  const handleSearch = e => {
    onSearch(e.target.value)
  }

  return (
    <S.FiltersWrapper>
      <S.Search
        type="search"
        placeholder="Search name"
        onChange={handleSearch}
      />
      <S.SelectsWrapper>
        <Select
          title="Professions"
          name="professions"
          options={professions}
          onChange={handleChange}
          value={filters.professions}
        />
        <Select
          title="Hair colors"
          name="hair_color"
          options={hairColors}
          onChange={handleChange}
          value={filters.hair_color}
        />
      </S.SelectsWrapper>
    </S.FiltersWrapper>
  )
}

export default GnomesFilters
