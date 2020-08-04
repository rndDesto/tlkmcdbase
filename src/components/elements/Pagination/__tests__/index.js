import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Pagination, { IconArrow, PageNumber, getLink } from '../Pagination';

jest.mock('querystring', () => ({
  stringify: () => 'query',
}));

jest.mock('react-router-dom', () => ({
  Link: function link(props) { return <a {...props} />; },
}));

describe('src/components/elements/Pagination', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Pagination />);
    expect(tree).toMatchSnapshot();

    const tree2 = Pagination({ ...Pagination.defaultProps, meta: { page: 2 } });
    expect(tree2.props.children[0].props.to.page).toBe(1);
  });

  test('IconArrow', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconArrow />);
    expect(tree).toMatchSnapshot();
  });

  test('PageNumber', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<PageNumber />);
    expect(tree).toMatchSnapshot();

    const meta1 = { page: 1, totalPage: 1 };
    PageNumber({ ...PageNumber.defaultProps, meta: meta1 });

    const meta2 = { page: 5, totalPage: 6 };
    const tree2 = PageNumber({ ...PageNumber.defaultProps, meta: meta2 });
    expect(tree2[0].props.children).toBe(1);
    expect(tree2[1].props.children).toBe('...');

    const meta3 = { page: 2, totalPage: 6 };
    const tree3 = PageNumber({ ...PageNumber.defaultProps, meta: meta3 });
    expect(tree3[4].props.children).toBe('...');
  });

  test('getLink', () => {
    const res = getLink({}, { pathname: 'path' });
    expect(res.pathname).toBe('path');
    expect(res.search).toBe('?query');
  });
});
