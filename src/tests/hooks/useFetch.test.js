import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

describe('Testing in useFetch', () => {

    test('should returns default info', () => {
        const { result } = renderHook(() => useFetch('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/1'))
        const { data, loading, error } = result.current
        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)
    })

})
