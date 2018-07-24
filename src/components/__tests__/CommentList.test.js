import React from 'react';
import { mount } from 'enzyme/build';
import CommentList from '../CommentList';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';

let wrapped;
const initialState = {
  comments: ['comment1', 'comment2']
};

beforeEach(() => {
  wrapped = mount(
    <Provider store={configureStore(initialState)}>
      <CommentList />
    </Provider>
  );
});

it('creates one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('renders available comments', () => {
  expect(wrapped.render().text()).toContain('comment1');
  expect(wrapped.render().text()).toContain('comment2');
});
 