import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import Footer from './Footer';
import '../css/Following.css';

class Following extends React.Component {
  render() {
    const { user, following } = this.props;
    return (
      <section className="following-container">
        <header className="following-header">
          <Link to={`/${user.login}`}> <BsArrowLeftShort className="return-icon" /> </Link>
          <span className="following-count">{user.following} seguindo</span>
        </header>
        <main className="following-content">
          { /*following.map(following => <div key={following.id}>#{following.login}</div>)*/ }
        </main>
        <Footer user={user} />
      </section>
    );
  }
};

export default Following;