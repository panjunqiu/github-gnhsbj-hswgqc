// import 'style/index.less';
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
          <li>
            <Link to="/template_page_dva">Template</Link>
          </li>
          <li>
            <Link to="/template_page_normal">Template2</Link>
          </li>
        </ul>
      </div>

      <Outlet />
      <Outlet />
    </>
  );
}
