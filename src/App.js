import React, { useState } from 'react'
import './App.scss'
import { SearchContext } from './context/searchContext'
import { AppRouter } from './router/AppRouter'

export const App = () => {

    const [page, setPage] = useState([])
    const [search, setSearch] = useState()
    const [pagination, setPagination] = useState()

    return (
        <SearchContext.Provider value={{
            page,
            setPage,
            search,
            setSearch,
            pagination,
            setPagination,
        }}>
            <AppRouter />
        </SearchContext.Provider>
    )
}
