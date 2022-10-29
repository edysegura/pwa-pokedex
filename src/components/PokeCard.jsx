export default function PokeCard({ pokeData }) {
  return (
    <figure class="flex h-36 w-32 flex-col overflow-hidden rounded-lg border border-grass">
      <span class="w-full p-2 text-right text-xs">#001</span>
      <img src={pokeData} alt="" class="aspect-square w-20 self-center" />
      <figcaption class="mt-auto bg-grass text-center capitalize text-white">
        Bulbasaur
      </figcaption>
    </figure>
  )
}
