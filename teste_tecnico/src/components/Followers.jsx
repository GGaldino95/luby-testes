import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Footer from './Footer';
import '../css/Followers.css';

class Followers extends React.Component {
  async fetchFollower(follower) {
    const { state } = this.props;
    console.log(follower);
    await fetch(`https://api.github.com/users/${follower}`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
          this.setState({
            user: {
              login: result.login,
              name: result.name,
              email: result.email,
              location: result.location,
              company: result.company,
              bio: result.bio,
              avatar_url: result.avatar_url,
              followers_url: result.followers_url,
              following_url: result.following_url,
              repos_url: result.repos_url,
              organizations_url: result.organizations_url,
              starred_url: result.starred_url,
              public_repos: result.public_repos,
              public_gists: result.public_gists,
              followers: result.followers,
              following: result.following
            },
            isUserAuthenticated: true
          })})
  }

  render() {
    const { user, followers } = this.props;
    return (
      <section className="followers-container">
        <header className="followers-header">
          <Link to={`/${user.login}`}> <BsArrowLeftShort className="return-icon" /> </Link>
          <span className="followers-count">{user.followers} seguidores</span>
        </header>
        <main className="followers-content">
          {followers.map(follower =>
            <Link
              to={`/${user.login}`}
              key={follower.id}
              onClick={ () => this.fetchFollower(follower.login) }
              className="followers-card"
            >
              <section className="followers-avatar">
                <img src={follower.avatar_url} alt="follower-avatar" />
              </section>
              <span className="followers-username">#{follower.login}</span>
              <BsArrowRightShort className="return-icon" />
            </Link>)}
        </main>
        <Footer user={user} />
      </section>
    );
  }
};  

export default Followers;