import React, { useContext } from 'react'
import { data } from './components/NavBar'
const SearchContext = () => {
    let search=useContext(data)
    console.log(search)
  return (
    <div>searchcontext</div>
  )
}

export default SearchContext