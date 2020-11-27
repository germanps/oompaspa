
import { GetOompaBySearch } from '../../Utils/getOompaBySearch'

describe('Test in utils GetOompaBySearch', () => {

    test('should return a new filter array', () => {
        const page = [
            { first_name: 'one', last_name: 'lastOne', profession: 'developer' },
            { first_name: 'oneMore', last_name: 'lastTwo', profession: 'Cooker' },
            { first_name: 'three', last_name: 'lastThree', profession: 'developer' },
            { first_name: 'four', last_name: 'lastFour', profession: 'Cooker' },
        ]

        const result = GetOompaBySearch(page, 'one')
        expect(result.length).toBe(2)

    })

})
