import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../Utils/constants'
import { getLocalOompa } from '../Utils/utils'

export const useFetch = (params) => {
    //cancel subscriptions
    //keep the reference to component when is mounted
    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        //keep the reference to component when is mounted
        return () => {
            //cleanup
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        //check if data is in local, then will charge from localstorage
        const local = getLocalOompa()
        if (local) {
            setState({
                loading: false,
                error: null,
                data: local
            })
            return state
        }
    }, [])

    useEffect(() => {
        //only if paginated or is the firt time
        setState({ data: null, loading: true, error: null })
        fetch(`${BASE_URL}${params}`)
            .then(resp => resp.json())
            .then(data => {

                //call to component(setState) safety
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('Avoid component rendering...')
                }

            })
        //when url will change
    }, [params])
    return state
}

