import NavBar from '../components/navbar';
import Login from '../components/login';

const Layout = ({ children }) => (
  <div classNameName="container">
    <div classNameName="columns">{children}</div>
  </div>
);

export default ({ children }) => (
  <Layout>
    <Login />
    <div className="centered column col-6">
      <NavBar />
    </div>
    {children}
  </Layout>
);
