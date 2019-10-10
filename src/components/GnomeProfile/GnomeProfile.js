import React from 'react'

import gnomesService from '../../services/gnomes'
import useFetch from '../../hooks/useFetch'
import Avatar from '../Avatar'
import HairColor from '../HairColor'
import Gender from '../Gender'

import * as S from './styled'

const GnomeProfile = ({ id }) => {
  const { isLoading, error, response: gnome } = useFetch(gnomesService.get, id)

  if (isLoading) {
    return <p>Loading gnome...</p>
  }

  if (error) {
    return <p>Error while loading gnome!</p>
  }

  return (
    <S.Wrapper>
      <S.BackLink to="/">Home</S.BackLink> / Gnome Profile
      <S.PersonalInfo>
        <Avatar thumbnail={gnome.thumbnail} variant="profile" />
        <S.WrapperInfo>
          <S.Title>Gnome Profile</S.Title>
          <S.Name>{gnome.name}</S.Name>
          <S.Info>
            <div>Age:</div>
            <span>{gnome.age}</span>
          </S.Info>
          <S.Info>
            <div>Weight:</div>
            <span>{gnome.weight.toFixed(2)}</span>
          </S.Info>
          <S.Info>
            <div>Height:</div>
            <span>{gnome.height.toFixed(2)}</span>
          </S.Info>
          <S.Info>
            <div>Hair color:</div>
            <HairColor color={gnome.hair_color} />
          </S.Info>
          <S.Info>
            <div>Gender:</div>
            <Gender color={gnome.hair_color} />
          </S.Info>
        </S.WrapperInfo>
      </S.PersonalInfo>
      <S.Detail>
        <legend>Professions</legend>
        <ul>
          {gnome.professions.map(profession => (
            <li key={profession}>{profession}</li>
          ))}
          {gnome.professions.length === 0 && 'Time is money friend'}
        </ul>
      </S.Detail>
      <S.Detail>
        <legend>Friends</legend>
        <ul>
          {gnome.friends.map(friend => (
            <li key={friend}>{friend}</li>
          ))}
          {gnome.friends.length === 0 && 'Stop working and go make new friends'}
        </ul>
      </S.Detail>
    </S.Wrapper>
  )
}

export default GnomeProfile
