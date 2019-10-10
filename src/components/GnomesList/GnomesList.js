import React from 'react'

import gnomesService from '../../services/gnomes'
import useFetch from '../../hooks/useFetch'
import GnomesFilters from './GnomesFilters'
import Avatar from '../Avatar'
import HairColor from '../HairColor'
import * as S from './styled'

const GnomesList = () => {
  const initialFilters = { professions: null, hair_color: null }
  const { isLoading, error, response } = useFetch(gnomesService.get)
  const [items, setItems] = React.useState(false)
  const [filteredHairColors, setFilteredHairColors] = React.useState([])
  const [filteredProfessions, setFilteredProfessions] = React.useState([])
  const [filters, setFilter] = React.useState(initialFilters)

  React.useEffect(() => {
    setItems(response)
  }, [response])

  React.useEffect(() => {
    if (items) {
      Object.keys(filters).map(filter => {
        const applied = filters[filter]
        if (!applied) return null

        // profession
        if (filter === 'professions') {
          const professionsFilter = items.filter(item => {
            return item.professions.includes(applied)
          })
          setFilteredProfessions([...professionsFilter])
        }

        // hair color
        if (filter === 'hair_color') {
          const hairFilter = response.filter(item => {
            return item.hair_color === applied
          })
          setFilteredHairColors([...hairFilter])
        }

        return null
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  const getItemsToRender = () => {
    const source = [...new Set([...filteredHairColors, ...filteredProfessions])]
    let filtered

    if (!filters.professions && !filters.hair_color) {
      return { list: items, size: items.length }
    }

    if (filters.professions) {
      filtered = source.filter(item => {
        return item.professions.includes(filters.professions)
      })
    }

    if (filters.hair_color) {
      if (filtered) {
        filtered = filtered.filter(item => {
          return item.hair_color === filters.hair_color
        })
      } else {
        filtered = response.filter(item => {
          return item.hair_color === filters.hair_color
        })
      }
    }

    return { list: filtered, size: filtered.length }
  }

  const handleFilter = newFilter => {
    setFilter({ ...filters, ...newFilter })
  }

  const handleSearch = value => {
    setFilter(initialFilters)
    if (value.length === 0) {
      return setItems(response)
    }

    if (value.length >= 3) {
      const newItems = response.filter(item => {
        return item.name.toLowerCase().indexOf(value) > -1
      })
      setItems(newItems)
    }
  }

  if (isLoading) {
    return <p>Loading gnomes...</p>
  }

  if (error) {
    return <p>Error while loading gnomes!</p>
  }

  const { list, size } = getItemsToRender()

  const Row = ({ index, style }) => {
    const gnome = list[index]
    return (
      <S.Row style={style}>
        <S.Link to={`/gnome/${gnome.id}`}>
          <S.Card>
            <Avatar thumbnail={gnome.thumbnail} />
            <S.Details>
              <S.Name>{gnome.name}</S.Name>
              <S.InfoWrapper>
                <S.Info>height: {gnome.height.toFixed(2)}</S.Info>
                <S.Info>
                  hair color: <HairColor color={gnome.hair_color} />
                </S.Info>
                <S.Info>weight: {gnome.weight.toFixed(2)}</S.Info>
                <S.Info>age: {gnome.age}</S.Info>
              </S.InfoWrapper>
            </S.Details>
          </S.Card>
        </S.Link>
      </S.Row>
    )
  }

  return (
    <div>
      <GnomesFilters
        items={list}
        onFilter={handleFilter}
        onSearch={handleSearch}
        filters={filters}
      />
      {size === 0 ? 'No gnome found :(' : `Gnomes found: ${size}`}
      <S.List height={500} itemCount={size} itemSize={94}>
        {Row}
      </S.List>
    </div>
  )
}

export default GnomesList
