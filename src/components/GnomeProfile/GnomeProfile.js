import React from 'react'
import { Link } from 'react-router-dom'

import gnomesService from '../../services/gnomes'
import useFetch from '../../hooks/useFetch'

const GnomeProfile = ({ id }) => {
  const { isLoading, error, response: gnome } = useFetch(gnomesService.get, id)

  if (isLoading) {
    return <p>Loading gnome...</p>
  }

  if (error) {
    return <p>Error while loading gnome!</p>
  }

  return (
    <Link to={`/gnome/${gnome.id}`}>
      <fieldset>
        <legend>{gnome.name}</legend>
        <table>
          <tbody>
            <tr>
              <td>thumbnail</td>
              <td>
                <figure>
                  <img
                    src={gnome.thumbnail}
                    alt={gnome.name}
                    title={gnome.name}
                  />
                </figure>
              </td>
            </tr>
            <tr>
              <td>age</td>
              <td>{gnome.age}</td>
            </tr>
            <tr>
              <td>weight</td>
              <td>{gnome.weight}</td>
            </tr>
            <tr>
              <td>height</td>
              <td>{gnome.height}</td>
            </tr>
            <tr>
              <td>hair color</td>
              <td>{gnome.hair_color}</td>
            </tr>
            <tr>
              <td>professions</td>
              <td>
                <ul>
                  {gnome.professions.map(profession => (
                    <li key={profession}>{profession}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>friends</td>
              <td>
                <ul>
                  {gnome.friends.map(friend => (
                    <li key={friend}>{friend}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </Link>
  )
}

export default GnomeProfile
