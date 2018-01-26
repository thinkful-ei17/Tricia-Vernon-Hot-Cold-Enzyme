import React from 'react';
import Feedback from './feedback';
import { shallow } from 'enzyme';
import './setupTests';

describe('<Feedback/>', () => {
<<<<<<< HEAD
  it('Should smoke test the Feedback component', () => {
    shallow( < Feedback /> );
    });
  
  it('Should test the Feedback props', () => {
    const key = '64';
    const wrapper = shallow(<Feedback key={key} />);
    expect(wrapper.contains(<h2>{key}</h2>));
    });
});
=======
    it('Should smoke test the Feedback component', () => {
        shallow( < Feedback / > ) 
    })
})
>>>>>>> 1c39c71b2243ef16f3c0695dae1b3844f833c342
