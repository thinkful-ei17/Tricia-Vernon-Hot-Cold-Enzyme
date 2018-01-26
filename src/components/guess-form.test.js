import React from 'react';
import GuessForm from './guess-form';
import { shallow } from 'enzyme';
import './setupTests';

describe('<GuessForm />', () => {
    it('Should smoke test the GuessForm component', () => {
        shallow( <GuessForm / > )
    })
})
