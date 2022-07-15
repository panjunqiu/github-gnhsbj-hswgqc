// import 'style/index.less';
import React from 'react';
import { Link, Outlet } from 'umi';
// import styles from './index.less';

export default function Layout() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </div>

      <Outlet />
      {/* <Outlet /> */}
    </>
  );
}
