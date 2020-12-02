import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Axios from 'axios';
import Users from './components/users/Users';
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await Axios.get('https://api.github.com/users');
console.log(res.data)
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
      <div className="container">
        <Users loading={this.state.loading} users = {this.state.users}/>
      </div>
      </div>
    );
  }
}

export default App;
