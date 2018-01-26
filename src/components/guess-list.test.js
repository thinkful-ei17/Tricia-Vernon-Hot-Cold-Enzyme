import React from 'react';
import GuessList from './guess-list';
import { shallow, mount } from 'enzyme';
import './setupTests';

describe('<GuessList/>', () => {
    it('Should smoke test the GuessList component', () => {
        shallow( <GuessList guesses={[]} / > )
    });

    it('Should list each number in guessList', () => {
      let arr = [1,2,3];
      const wrapper = mount(<GuessList guesses={arr}/>);
      expect(wrapper.prop('guesses')).toEqual(arr);


    });
})
