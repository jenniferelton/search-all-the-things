import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search';

describe('SearchForm', () => {

  it('Renders as design', () => {
    const wrapper = shallow(<SearchForm on Search={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Calls onSearch with criteria entered', () => {
    let filter;
    const handlesearch = _filter => filter = _filter; 
 
    const wrapper = shallow(<Search onSearch={handleSearch}/>);

    const search = 'Star Wars';

    const input = wrapper.find('input');
    input.instance().value = search;
    const form = wrapper.find('form').instance();
    const button = wrapper.find('button');
    button.simulate('submit', { target: form })();

    expect(filter).toBe(search);
  });

});