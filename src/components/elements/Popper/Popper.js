import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Popper(props) {
  const { anchorEl, children, className, onClose, open } = props;
  const [content, setContent] = useState(null);
  const customClass = [styles.root, className, !open && styles['popper-closed']].filter(Boolean).join(' ');
  let transform = 'translate(0px, 0px)';

  useEffect(() => {
    if (open) {
      setContent(children);
      window.addEventListener('click', onClose);
    } else {
      setContent(null);
      window.removeEventListener('click', onClose);
    }
  }, [open]);

  if (content) {
    const el = anchorEl.getBoundingClientRect();
    const newX = `${el.left}px`;
    const newY = `${el.height}px`;
    transform = `translate(${newX}, ${newY})`;
  }

  return (
    <section className={customClass} onClick={e => e.stopPropagation()} style={{ transform }}>
      {content}
    </section>
  );
}

Popper.defaultProps = {
  anchorEl: null,
  children: null,
  className: '',
  onClose: () => { },
  open: false,
};

Popper.propTypes = {
  anchorEl: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
