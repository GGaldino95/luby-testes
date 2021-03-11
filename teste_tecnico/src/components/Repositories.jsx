import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiStar, BiLockOpenAlt, BiLockAlt } from 'react-icons/bi';
import Footer from './Footer';
import '../css/Repositories.css';

class Repositories extends React.Component {
  render() {
    const { user, repos } = this.props;
    return (
      <section className="repositories-container">
        <header className="repositories-header">
          <Link to={`/${user.login}`}> <BsArrowLeftShort className="return-icon" /> </Link>
          <span className="repositories-count">{user.public_repos} repositorios</span>
        </header>
        <main className="repositories-content">
          {repos.map(repository =>
            <div
              key={repository.id}
              className="repositories-card"
            >
              <span className="repositories-name">{repository.name}</span>
              <span className="repositories-description">{repository.description}</span>
              <div className="repositories-icons">
                <span>
                  <BiStar className="starred-icon" />
                  {repository.stargazers_count}
                </span>
                <BiLockOpenAlt className="unlock-icon" />
                <BiLockAlt className="lock-icon" />
              </div>
            </div>)}
        </main>
        <Footer user={user} />
      </section>
    );
  }
};

export default Repositories;