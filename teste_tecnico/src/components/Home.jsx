import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'
import '../css/Home.css';
import Footer from './Footer';

class Home extends React.Component {
  async componentDidMount() {
    const { user, handleFetch } = this.props;
    console.log(user.following_url);
    await fetch(user.followers_url)
      .then(response => response.json())
      .then(followers => {
        handleFetch(followers, 'followers')
      });

/*  await fetch(user.following_url)
      .then(response => response.json())
      .then(following => {
        handleFetch(following, 'following');
      }) */

    await fetch(user.repos_url)
      .then(response => response.json())
      .then(repos => {
        handleFetch(repos, 'repos');
      })
  }

  render() {
    const { user, logOut } = this.props;
    return (
      <section className="profile-container">
        <header className="profile-header">
          <span className="user-login">#{user.login}</span>
          <Link to="/login" onClick={logOut} className="logout">
            <span>Sair</span>
            <FiLogOut className="logout-icon" />
          </Link>
        </header>
        <main className="profile-content">
          <section className="profile-avatar">
            <img src={user.avatar_url} alt="profile-avatar" />
          </section>
          <section className="profile-info">
            <span className="user-name">{user.name.toUpperCase()}</span>
            <span>{user.email}</span>
            <span>{user.location}</span>
          </section>
          <nav className="profile-links">
            <Link to="/followers" className="profile-links-card">
              <span className="profile-links-values">{user.followers}</span>
              <span>Seguidores</span>
            </Link>
            <Link to="/following" className="profile-links-card">
              <span className="profile-links-values">{user.following}</span>
              <span>Seguindo</span>
            </Link>
            <Link to="/repositories" className="profile-links-card">
              <span className="profile-links-values">{user.public_repos}</span>
              <span>Repos</span>
            </Link>
          </nav>
          <section className="profile-bio">
            <h1>BIO</h1>
            <p>{user.bio}</p>
          </section>
        </main>
        <Footer user={user} />
      </section>
    );
  }
}

export default Home;