import React from 'react';
import header from './header';
import { shallow } from 'enzyme';
import './setupTests';

describe('<header/>', () => {
    it('Should smoke test the header component', () => {
        shallow( <header / > )
    })
})
