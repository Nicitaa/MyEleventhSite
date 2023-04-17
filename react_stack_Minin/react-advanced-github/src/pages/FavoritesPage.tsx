import { useAppSelector } from "../hooks/redux"

export function FavoritesPage() {
  const { favourites } = useAppSelector(state => state.github)

  if (favourites.length === 0) return <p className="text-center">No items.</p>
  return (



    <ul className="list-none">
      {favourites.map(f => (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
          <li key={f}>
            <a href={f} target="_blank">{f}</a>
          </li>
        </div>
      ))}
    </ul>
  )
}