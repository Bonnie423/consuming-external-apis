import CharacterData from '../../models/characterType.tsx'
import { useEffect, useState } from 'react'
import { getOneCharacter } from '../apiClient/characterApI.ts'

const Charaters = () => {
  const [character, setCharacter] = useState<CharacterData | null>(null)

  useEffect(() => {
    try {
      fetchCharacter()
    } catch (err) {
      console.error(err)
    }
  }, [])

  async function fetchCharacter() {
    const onecharacter = await getOneCharacter()
    // console.log(onecharacter)
    setCharacter(onecharacter)
  }
  return (
    <div>
      <h2>Desney Character</h2>
      <h3>Name: {character?.name}</h3>
      <h4>Films: {character?.films}</h4>
      <p>TV Shows: {character?.tvShows}</p>
      <p>Vedio Games: {character?.videoGames}</p>
      <img src={character?.imageUrl} alt={character?.name}></img>
    </div>
  )
}

export default Charaters
