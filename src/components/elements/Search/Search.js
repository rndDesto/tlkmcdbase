import React from 'react';
import styles from './styles.scoped.css';
import Textfield from '../../fields/Text';

export default function Search() {
  const inputPropsType = {
    placeholder: 'Search',
  };

  return(
    <div className={styles.root}>
      <div>
        <img src="/assets/search.svg"/>
        <section>
          <Textfield inputProps={inputPropsType} />
        </section>
      </div>
    </div>
  );
}
