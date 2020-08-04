import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function DataTable(props) {
  const { className, column, data, } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');

  return (
    <table className={classes}>
      <thead>
        <tr>
          {column.map((item, idx) => <TableHeader item={item} key={idx} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => <TableRow column={column} item={item} key={idx} />)}
      </tbody>
    </table>
  );
}

DataTable.defaultProps = {
  className: '',
  column: [],
  data: [],
};

DataTable.propTypes = {
  className: PropTypes.string,
  column: PropTypes.array,
  data: PropTypes.array,
};

export function TableHeader({ item }) {

  return (
    <th className={styles['table-header']}>{item.heading}</th>
  );
}

TableHeader.defaultProps = {
  item: {},
};

TableHeader.propTypes = {
  item: PropTypes.object,
};

export function TableRow({ column, item }) {
  return (
    <tr>
      {column.map((cItem, cIdx) => {
        const { value } = cItem;
        const newValue = typeof value === 'function' ? value(item) : item[value];

        return (
          <td key={cIdx}>
            {newValue || '-'}
          </td>
        );
      })}
    </tr>
  );
}

TableRow.defaultProps = {
  column: [],
  item: {},
};

TableRow.propTypes = {
  column: PropTypes.array,
  item: PropTypes.object,
};
