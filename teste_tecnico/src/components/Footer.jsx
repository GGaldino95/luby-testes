import React from 'react';
import { Link } from 'react-router-dom';
import { RiGroupLine, RiGithubLine } from 'react-icons/ri'
import { BiHomeAlt } from 'react-icons/bi';

class Footer extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <footer className="menu-footer">
        <section className="footer-item">
          <Link to={`/${user.login}`} className="footer-link">
            <BiHomeAlt className="footer-icon" />
            <span>Home</span>
          </Link>
        </section>
        <section className="footer-item">
          <Link to="/repositories" className="footer-link">
            <RiGithubLine className="footer-icon" />
            <span>Repos</span>
          </Link>
        </section>
        <section className="footer-item">
          <Link to="/followers" className="footer-link">
            <RiGroupLine className="footer-icon" />
            <span>Seguidores</span>
          </Link>
        </section>
        <section className="footer-item">
          <Link to="/following" className="footer-link">
            <RiGroupLine className="footer-icon" />
            <span>Seguindo</span>
          </Link>
        </section>
      </footer>
    );
  }
}

export default Footer;