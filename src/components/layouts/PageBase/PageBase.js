import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconDashboard from '../../elements/IconDashboard';
import { clearStorages, getUserData } from '../../../utils/storage';
import styles from './styles.scoped.css';
import { routes } from '../../../configs/routes';

export default function PageBase({ children }) {
  useEffect(() => {
    const app = document.getElementById('app');
    app.className = 'pagebase';
  }, []);

  const { pathname } = useLocation();
  const navs = [
    { name: 'Dashboard', to: routes.DASHBOARD(), icon: IconDashboard }
  ];
  const noAuthRoutes = ['/login'];
  const noAuth = noAuthRoutes.some(r => pathname.match(r));

  const _handlerLogout = () => {
    location.href = '/login';
    clearStorages();
  };

  if (noAuth) {
    return children;
  }
  const { name, email } = getUserData();
  return (
    <>
      <aside className={styles.aside}>
        <aside>
          <a><img alt="logee" src="/assets/ic-logo.svg" /></a>
          <a><img alt="notification" src="/assets/ic-notifications.svg" /></a>
          <a onClick={_handlerLogout}>
            <img alt="logout" src="/assets/ic-exit.svg" />
          </a>
        </aside>
        <section>
          <figure>
            <img alt="profil" src="/assets/ic-avatar.svg" />
            <figcaption>
              <h5>{name}</h5>
              <small>{email}</small>
            </figcaption>
          </figure>
          <nav className={styles.nav}>
            {navs.map((n, idx) => n.children ? <ExpandSider data={n} index={idx} key={idx} />
              : <NavSider data={n} key={idx} />)}
          </nav>
        </section>
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}

PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};

export function ExpandSider({ data, index }) {
  const [expand, setExpand] = useState({ active: -1, open: -1 });
  const clickExpand = (index) => () => {
    setExpand({ ...expand, open: expand.open === index ? -1 : index });
  };
  const isOpen = expand.open === index;
  const { length } = data.children;
  const { pathname } = useLocation();

  useEffect(() => {
    const activeChild = data.children.findIndex(i => i.to === pathname);

    setExpand({ open: expand.open, active: activeChild });
  }, [pathname]);

  return (
    <div className={styles['nav-item']} id={`sider-parent-${index}`}>
      <section onClick={clickExpand(index)}>
        <data.icon />
        {data.name}
        <img alt="expand" className={isOpen ? styles.open : ''} src="/assets/ic-expand.svg" />
      </section>
      <ul style={{ maxHeight: isOpen ? `${3 * length}rem` : 0 }}>
        {data.children.map((c, cIdx) => {
          const isActive = expand.active === cIdx;

          return (
            <li key={cIdx}>
              <Link className={isActive ? styles.active : ''} to={c.to}>{c.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ExpandSider.defaultProps = {
  data: {},
  index: null,
};

ExpandSider.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export function NavSider({ data }) {
  const { pathname } = useLocation();
  const isActive = data.to === pathname.toLowerCase();

  return (
    <Link className={isActive ? styles.active : ''} to={data.to}>
      <section>
        <data.icon />
        {data.name}
      </section>
    </Link>
  );
}

NavSider.defaultProps = {
  data: {},
};

NavSider.propTypes = {
  data: PropTypes.object,
};
