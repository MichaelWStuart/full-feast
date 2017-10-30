import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FlatButton, Paper } from 'material-ui';
import styles from '../../styles';
import userLogout from '../../actions/async/user/logout';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, type) {
    if ((type === 'login') && this.props.user) {
      this.props.dispatchLogout();
      this.props.history.push('/');
    } else {
      this.props.history.push(`/${type}`)
    }
  }

  render() {
    return (
      <Paper zDepth={2} style={styles.navBar}>
        <div style={styles.navItems}>
          <img
            style={{ maxWidth: '10%' }}
            src="https://s3.us-east-2.amazonaws.com/portfolio-joshua/feastlogo.svg"
            alt="feastech"
          />
          <FlatButton label="Home" labelStyle={styles.navItemButton} />
          <FlatButton label="Services" labelStyle={styles.navItemButton} />
          <FlatButton label="About" labelStyle={styles.navItemButton} />
          <FlatButton label="Portfolio" labelStyle={styles.navItemButton} />
          <FlatButton
            label="Learning & Leisure"
            labelStyle={styles.navItemButton}
          />
          <FlatButton label="Contact" labelStyle={styles.navItemButton} />
          {!this.props.user && <FlatButton
            onClick={e => this.handleClick(e, 'register')}
            label='Register'
            labelStyle={{ color: 'white' }}
            style={{ backgroundColor: '#215977' }}
          />}
          <FlatButton
            onClick={e => this.handleClick(e, 'login')}
            label={this.props.user ? 'Logout' : 'Login'}
            labelStyle={{ color: 'white' }}
            style={{ backgroundColor: '#215977' }}
          />
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(userLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
