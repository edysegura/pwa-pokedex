import Nullstack from 'nullstack'
import Application from './src/Application'

const context = Nullstack.start(Application)

function cacheFirstGenerationData() {
  const pokeList = []
  for (let i = 1; i < 152; i++) {
    pokeList.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
  }
  return pokeList
}

function cacheFirstGenerationSprites() {
  const pokeSprites = []
  for (let i = 1; i < 152; i++) {
    pokeSprites.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,
    )
  }
  return pokeSprites
}

context.start = async function start() {
  // https://nullstack.app/application-startup
  const { worker } = context
  worker.preload = [
    ...cacheFirstGenerationData(),
    ...cacheFirstGenerationSprites(),
  ]
}

export default context
