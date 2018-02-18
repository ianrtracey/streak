import { connect } from 'react-redux';
import Link from 'next/link';

class NavBar extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header className="navbar">
        <section className="navbar-section">
          <Link href="/habits" className="btn btn-link">
            Habits
          </Link>
        </section>
        <section className="navbar-center">Streak</section>
        <section className="navbar-section">
          <a href="#" className="btn btn-link">
            {`${user.displayName} (${user.email})`}
          </a>
        </section>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(NavBar);
