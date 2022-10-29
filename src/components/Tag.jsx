import { twMerge } from 'tailwind-merge'

export default function Tag({ class: clazz, children }) {
  return (
    <span
      class={twMerge(
        'rounded-xl bg-gray-600 py-1 px-2 text-xs font-bold text-white',
        clazz,
      )}
    >
      {children}
    </span>
  )
}
