import React from 'react';
import GuessList from './guess-list';
import { shallow } from 'enzyme';
import './setupTests';

describe('<GuessList/>', () => {
    it('Should smoke test the GuessList component', () => {
        shallow( <GuessList guesses={[]} / > )
    })
})
