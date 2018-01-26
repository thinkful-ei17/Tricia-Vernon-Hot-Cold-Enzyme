import React from 'react';
import TopNav from './top-nav';
import { shallow } from 'enzyme';
import './setupTests';

describe('<TopNav/>', () => {
    it('Should smoke test the TopNav component', () => {
        shallow( <TopNav / > )
    })
})
