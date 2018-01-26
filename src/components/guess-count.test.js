import React from 'react';
import GuessCount from './guess-count';
import { shallow } from 'enzyme';
import './setupTests';

describe('<GuessCount/>', () => {
    it('Should Smoke test the guess-count component', () => {
        shallow( < GuessCount / > ) 
    })
})
