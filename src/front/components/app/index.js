import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../nav-bar';
import ViewRouter from './view-router';

class App extends React.Component {

  componentWillMount() {
    !this.props.user && this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    const l = this.props.history.location.pathname;
    if (!nextProps.user && (l !== '/') && (l !== '/login') && (l !== '/register'))
      this.props.history.push('/');
    if (nextProps.user && !this.props.user)
      this.props.history.push('/admin');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <ViewRouter />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.error,
})

export default withRouter(connect(mapStateToProps)(App));
