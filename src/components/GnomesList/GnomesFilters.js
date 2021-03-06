import React from 'react'
import PropTypes from 'prop-types'

import Select from '../Select'
import * as S from './styled'
import potion from '../../images/potion.svg'
import gnome from '../../images/gnome.svg'
import hammer from '../../images/hammer.svg'

const GnomesFilters = ({ items, onFilter, onSearch, filters }) => {
  const [professions, setProfessions] = React.useState([])
  const [hairColors, setHairColors] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

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
    setSearchValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <S.FiltersWrapper>
      <div>
        <img src={gnome} alt="gnome" height="50" />
        <S.Search
          type="search"
          placeholder="Search name"
          onChange={handleSearch}
          value={searchValue}
          data-testid="search"
        />
      </div>
      <div>
        <img src={hammer} alt="hammer" height="50" />
        <Select
          title="Professions"
          name="professions"
          options={professions}
          onChange={handleChange}
          value={filters.professions}
          data-testid="select-professions"
        />
      </div>

      <div>
        <img src={potion} alt="potion" height="50" />
        <Select
          title="Hair colors"
          name="hair_color"
          options={hairColors}
          onChange={handleChange}
          value={filters.hair_color}
          data-testid="select-hair"
        />
      </div>
    </S.FiltersWrapper>
  )
}

GnomesFilters.propTypes = {
  items: PropTypes.array,
  onFilter: PropTypes.func,
  onSearch: PropTypes.func,
  filters: PropTypes.object,
}

export default GnomesFilters
