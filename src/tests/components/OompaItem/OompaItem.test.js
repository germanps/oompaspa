import React from 'react'
import { shallow } from 'enzyme'
import { OompaItem } from '../../../components/OompaItem/OompaItem'

describe('Test in <OompaItem />', () => {
    test('should show component correctly with its props', () => {
        const oompa = {
            id: 1,
            first_name: 'Test',
            image: 'some url or link',
            gender: 'M',
            profession: 'Something'
        }
        const wrapper = shallow(<OompaItem oompa={oompa} />)
        expect(wrapper).toMatchSnapshot();
    })

})
