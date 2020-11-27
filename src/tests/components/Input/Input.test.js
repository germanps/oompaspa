import React from 'react'
import { shallow } from 'enzyme'
import { Input } from '../../../components/Input/Input'


describe('Test in <Input />', () => {

    const handleInputChange = () => { }
    const wrapper = shallow(
        <Input handleInputChange={handleInputChange} />
    )

    test('should show component correctly with its props ', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
