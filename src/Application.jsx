import Nullstack from 'nullstack'
import Home from './Home'

import '../tailwind.css'

class Application extends Nullstack {
  prepare({ page }) {
    page.title = 'Pokedex First Generation'
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render() {
    return (
      <body class="bg-gray-900 font-roboto text-white">
        <Head />
        <Home route="/" />
      </body>
    )
  }
}

export default Application
