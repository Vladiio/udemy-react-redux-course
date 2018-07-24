import React from 'react';
import { mount } from 'enzyme/build';
import CommentBox from '../CommentBox';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';

let wrapped;
let text;
let saveComment = jest.fn();

beforeEach(() => {
  wrapped = mount(
    <Provider store={configureStore()}>
      <CommentBox />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('form button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    text = 'test';
    wrapped.find('textarea').simulate('change', {
      target: {
        value: text
      }
    });
  });
  it('handles textarea change', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(
      text
    );
  });

  it('clears textarea after form submittion', () => {
    wrapped.setProps({ saveComment });
    wrapped.find('form').simulate('submit');
    expect(wrapped.find('textarea').prop('value')).toEqual(
      ''
    );
  });
});
