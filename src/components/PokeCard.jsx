import { twMerge } from 'tailwind-merge'

export default function PokeCard({ pokeData }) {
  console.log(pokeData)
  const { number, name, type, sprite } = pokeData
  return (
    <figure
      class={twMerge(
        'flex h-36 w-28 flex-col overflow-hidden rounded-lg border border-gray-700',
        `border-${type}`,
      )}
    >
      <span class="w-full p-2 text-right text-xs">
        #{String(number).padStart(3, '0')}
      </span>
      <img
        src={sprite}
        alt=""
        class="aspect-square w-20 self-center"
        loading="lazy"
      />
      <figcaption
        class={twMerge(
          'mt-auto bg-gray-300 p-1 text-center capitalize text-white',
          // `bg-${type}`,
        )}
      >
        {name}
      </figcaption>
    </figure>
  )
}
