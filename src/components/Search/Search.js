import React, { useContext } from 'react'
import './Search.scss'
import { SearchContext } from '../../context/searchContext'
import { Input } from '../Input/Input'
import { GetOompaBySearch } from '../../Utils/getOompaBySearch'


export const Search = () => {

    const { setSearch, page } = useContext(SearchContext)
    const handleInputChange = (e) => {
        console.log('handleinputchange llamado');
        const searching = e.target.value;
        //GetOompaBySearch filter by profession and name (&& lastName)
        const result = GetOompaBySearch(page, searching)
        setSearch(result)

    }

    return (
        <div className="search-container">
            <form >
                <Input handleInputChange={handleInputChange} />
            </form>
        </div>
    )
}
