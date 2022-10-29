export default function PokeCard({ pokeData }) {
  return (
    <figure>
      <span>#001</span>
      <img src={pokeData} alt="" />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  )
}
