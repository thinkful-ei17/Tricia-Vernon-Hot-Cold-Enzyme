import React from 'react';
import Feedback from './feedback';
import { shallow } from 'enzyme';
import './setupTests';

describe('<Feedback/>', () => {
    it('Should smoke test the Feedback component', () => {
        shallow( < Feedback / > ) 
    })
})
