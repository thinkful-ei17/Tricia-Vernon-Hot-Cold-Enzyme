import React from 'react';
import Game from './game';
import { shallow } from 'enzyme';
import './setupTests';

describe('<Game/>', () => {
    it('Should smoke test the Game component', () => {
        shallow( <Game / > )
    })
})
