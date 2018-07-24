import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import moxios from 'moxios';
import configureStore from 'configureStore';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(
    'http://jsonplaceholder.typicode.com/comments',
    {
      response: [
        { name: 'Fetched 1' },
        { name: 'Fetched 2' }
      ],
      status: 200
    }
  );
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
  wrapped.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
