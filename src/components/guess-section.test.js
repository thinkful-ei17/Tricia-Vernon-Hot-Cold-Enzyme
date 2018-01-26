import React from 'react';
import GuessSection from './guess-section';
import { shallow } from 'enzyme';
import './setupTests';

describe('<GuessSection/>', () => {
    it('Should smoke test the GuessSection component', () => {
        shallow( <GuessSection / > )
    })
})
