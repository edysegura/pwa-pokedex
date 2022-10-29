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

  render() {
    return (
      <section class="mx-auto min-h-screen w-full max-w-3xl px-4 py-5">
        <Header />
      </section>
    )
  }
}

export default Home
