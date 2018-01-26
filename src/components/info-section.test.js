import React from 'react';
import InfoSection from './info-section';
import { shallow } from 'enzyme';
import './setupTests';

describe('<InfoSection/>', () => {
    it('Should smoke test the InfoSection component', () => {
        shallow( <InfoSection / > )
    })
})
