// import React from 'react';
// import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import Search from './Search';

// describe.skip('Search', () => {

//   it.skip('Renders design', () => {
//     const wrapper = shallow(<Search/>);
//     expect(toJSON(wrapper)).toMatchSnapshot();
//   });

//   it.skip('Calls onSearch with criteria entered', () => {
//     let filter;
//     const handlesearch = filter => {
//       filter = _filter;
//     };

//     const wrapper = shallow(<Search onSearch={handleSearch}/>);
//     const search = 'Star Wars';

//     const input = wrapper.find('input');
//     input.instance().value = search;
//     const button = wrapper.find('form');
//     button.prop('onSubmit')();

//     expect(filter).toBe(search);
//   });

// });