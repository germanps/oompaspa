import { formatGender } from '../../Utils/utils'

describe('Test in utils formatGender()', () => {

    test('should return a Woman gender', () => {
        const local = formatGender('F');
        expect(local).toBe('Woman')
    })

})
