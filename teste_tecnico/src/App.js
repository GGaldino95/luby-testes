import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Repositories from './components/Repositories';
import Followers from './components/Followers';
import Following from './components/Following';
import Home from './components/Home';

const INITIAL_STATE = {
  userInput: '',
  isUserAuthenticated: false,
  user: {},
  repos: [],
  followers: [],
  following: []
}

class App extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = INITIAL_STATE
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleFetch(result, name) {
    this.setState({ [name]: result });
  }

  async fetchUser(event) {
    event.preventDefault();
    const { userInput } = this.state;

    await fetch(`https://api.github.com/users/${userInput}`)
      .then(response => response.json())
      .then(result => {
        !result.hasOwnProperty('message') ?
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
          }) : this.setState(INITIAL_STATE);
      })
  }

  logOut() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { user, followers, following, repos, isUserAuthenticated } = this.state;

    return (
      <BrowserRouter>
        <Route
          render={() => isUserAuthenticated ?
            <Redirect to={`/${user.login}`} /> :
            <Redirect to="/login" />}
        />
        <Switch>
          <Route
            path="/login"
            render={() => <Login fetchUser={this.fetchUser} handleInput={this.handleInput} />}
          />
          <Route
            path={`/${user.login}`}
            render={() =>
              <Home user={user} handleFetch={this.handleFetch} logOut={this.logOut} />}
          />
          <Route
            path="/repositories"
            render={() => <Repositories repos={repos} user={user} />}
          />
          <Route
            path="/followers"
            render={() => <Followers followers={followers} user={user} state={this.state} />}
          />
          <Route
            path="/following"
            render={() => <Following following={following} user={user} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
