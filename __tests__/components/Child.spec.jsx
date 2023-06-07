import React from 'react';
import { shallow } from 'enzyme';
import Child from '../../src/components/Child';

describe('Child should render as expected', () => {
  it('module should render correct JSX', () => {
    const renderedModule = shallow(<Child />);
    expect(renderedModule.find('div')).toMatchSnapshot();
  });
});
