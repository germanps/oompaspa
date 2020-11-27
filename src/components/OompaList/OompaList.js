import React, { useContext, useEffect } from 'react'
import './OompaList.scss'
import { SearchContext } from '../../context/searchContext';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import { OompaItem } from '../OompaItem/OompaItem';
import { Search } from '../Search/Search';
import { Spinner } from '../Spinner/Spinner';
import { setLocalOompa } from '../../Utils/utils';

export const OompaList = () => {
    const { state, increment, decrement } = useCounter()
    const { setPage, setSearch, search, setPagination, pagination } = useContext(SearchContext)
    //only calls if component is changed
    const { data, loading } = useFetch(`?page=${pagination}`)

    useEffect(() => {
        if (!loading) {
            //set page at context
            setSearch(data.results)
            setPage(data.results)
            setPagination(state)
            //set page at local
            setLocalOompa(data.results)
        }
    }, [data, state])

    return (
        <>
            <Search />
            <div className="slogans-wrapper">
                <h2>Find your Oompa Loompa!</h2>
                <p>There are more than 100k</p>
            </div>
            <div className="oompa-list">
                <div className="card-wrapper">
                    {
                        loading ? <Spinner />
                            :
                            !search ? <Spinner />
                                :
                                search.map(element => (
                                    <OompaItem
                                        key={element.id}
                                        oompa={element}
                                    />
                                ))
                    }
                </div>
                <div className="button-wrapper">
                    {
                        state <= 1 ? <span className="ghost-btn">No prev list</span> :
                            (
                                <button
                                    type="button"
                                    onClick={() => decrement(1)}
                                    className="btn btn-info button-wrapper__button prev"
                                >Prev OompaList</button>
                            )
                    }

                    <span className="btn page">{state}</span>
                    {
                        state === 4 ? <span className="ghost-btn">No next list</span> :
                            (
                                <button
                                    type="button"
                                    onClick={() => increment(1)}
                                    className="btn btn-info button-wrapper__button next"
                                >Next OompaList</button>

                            )
                    }
                </div>
            </div>
        </>
    )
}
