import Nullstack from 'nullstack'
import Tag from './components/Tag'
import NumberSort from './icons/NumberSort'
import PokeballIcon from './icons/PokeballIcon'

class Home extends Nullstack {
  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
  }

  renderHeader() {
    return (
      <header class="flex gap-4">
        <PokeballIcon />
        <h1 class="text-2xl font-bold">Pokédex</h1>
        <span class="ml-auto cursor-pointer">
          <NumberSort />
        </span>
      </header>
    )
  }

  renderSearchBar() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search pokemon"
          class="w-full rounded-lg border border-gray-300 p-2"
        />
      </div>
    )
  }

  render() {
    return (
      <section class="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-3 px-4 py-5">
        <Header />
        <SearchBar />
      </section>
    )
  }
}

export default Home
