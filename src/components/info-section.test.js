import React from 'react';
import InfoSection from './info-section';
import { shallow } from 'enzyme';
import './setupTests';

describe('<InfoSection/>', () => {
    it('Should smoke test the InfoSection component', () => {
        shallow( <InfoSection / > )
    })

    it('Should have text inside!', () => {
      const wrapper = shallow(<InfoSection />);

      expect(wrapper.contains(<li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>)).toEqual(true);
      
    })
})
