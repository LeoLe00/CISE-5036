import styles from './page.module.css'
import Search from '../components/search'
import SearchResults from '..//components/searchResults'

export default function Home() {
  return (
    <main>
      <Search />
      {/*to add: 
      - searching functionality working with the backend
      - results table
      */}
      <SearchResults />
    </main>


  )
}
