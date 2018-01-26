import React from 'react';
import Header from './header';
import TopNav from './top-nav';
import { shallow, mount } from 'enzyme';
import './setupTests';

describe('<header/>', () => {
    it('Should smoke test the header component', () => {
        shallow( <Header / > )
    })
})
