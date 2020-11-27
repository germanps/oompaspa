import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Test in useCounter', () => {
    test('should returns default values', () => {
        const { result } = renderHook(() => useCounter())
        expect(result.current.state).toBe(1)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test('should have counter in 100', () => {
        const { result } = renderHook(() => useCounter(100))
        expect(result.current.state).toBe(100)
    })

    test('shoud increment counter in 1', () => {
        const { result } = renderHook(() => useCounter(100))
        const { increment } = result.current

        act(() => {
            increment()
        })

        //waiting increment() should be able to increment the state in 1
        const { state } = result.current
        expect(state).toBe(101)
    })

    test('shoud decrement counter in 1', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrement } = result.current

        act(() => {
            decrement()
        })

        //waiting decrement() should be able to decrement the state in 1
        const { state } = result.current
        expect(state).toBe(99)
    })

    test('should reset the counter to default value', () => {
        const { result } = renderHook(() => useCounter())
        const { reset } = result.current
        act(() => {
            reset()
        })

        //waiting reset() hould be able to reset to default value
        const { state } = result.current
        expect(state).toBe(1)
    })
})
