import { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Axios from 'axios';
import Users from './components/users/Users';
import { Search } from './components/users/Search';
import NotFound from './components/layout/NotFound';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    notfound: false,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  //* search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false, notfound: false });
    console.log(res.data.total_count);
    if (res.data.total_count === 0) {
      this.setState({ notfound: true });
    }
    console.log(text);
  };

  //* clear users
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
      notfound: false,
    });
  };

  // * set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  };
  clearAlert = () => {
    this.setState({
      alert: null,
    });
  };

  render() {
    const { users, loading, notfound } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar></Navbar>
          <div className='container'>
            <Alert alert={this.state.alert} />

            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      clearAlert={this.clearAlert}
                      setAlert={this.setAlert}
                    />
                    <NotFound notfound={notfound} />
                    <Users loading={loading} users={this.state.users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
