import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Login from '../Login';


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => jest.fn()),
}));

jest.mock('../actions', () => ({ login: jest.fn() }));

jest.mock('../../../components/forms/Login', () => function c(props) { return <form {...props} />; });

describe('src/pages/Login', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Login />);
    expect(tree).toMatchSnapshot();
    tree.props.children[1].props.children[2].props.onSubmit('test');
  });
});
