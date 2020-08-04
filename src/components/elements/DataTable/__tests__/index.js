import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DataTable, { TableHeader, TableRow } from '../DataTable';

const column = [
  { heading: 'Nama', value: 'name' },
  { heading: 'Email', value: 'email' },
  { heading: 'No. Handphone', value: 'phoneNumber' },
];

const data = [
  { name: 'Test', email: 'test@a.id', phoneNumber: '0811111111' },
  { name: 'Test', email: 'test@a.id', phoneNumber: '0811111111' },
];

describe('src/components/elements/DataTable', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DataTable column={column} data={data} />);
    expect(tree).toMatchSnapshot();

    const result = DataTable({ ...DataTable.defaultProps, data: [], });
    expect(result.type).toBe('table');
  });

  test('TableHeader', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TableHeader />);
    expect(tree).toMatchSnapshot();
  });

  test('TableRow', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TableRow column={column} />);
    expect(tree).toMatchSnapshot();
  });
});
