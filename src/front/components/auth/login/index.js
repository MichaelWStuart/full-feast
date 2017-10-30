import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog, TextField, RaisedButton } from 'material-ui';
import styles from '../../../styles';
import userLogin from '../../../actions/async/user/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.history.push('/admin');
  }

  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit() {
    this.props.dispatchSubmit({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <Dialog
          modal
          open
          autoScrollBodyContent
          autoDetectWindowHeight
          title="Login"
          style={{ textAlign: 'center' }}
          contentStyle={{ width: '30%' }}
        >
          <TextField
            onChange={e => this.handleChange(e, 'username')}
            value={this.state.username}
            floatingLabelText="Username"
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            style={styles.input}
          />
          <br />
          <TextField
            onChange={e => this.handleChange(e, 'password')}
            value={this.state.password}
            floatingLabelText={'Password'}
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            type="password"
            style={styles.input}
          />
          <br />
          <div style={{ textAlign: 'center' }}>
            <RaisedButton
              backgroundColor={styles.raisedButton.backgroundColor}
              labelStyle={styles.buttonLabel}
              style={styles.buttonSpacing}
              label="Cancel"
              onClick={() => this.props.history.push('/')}
            />
            <RaisedButton
              backgroundColor={styles.raisedButton.backgroundColor}
              labelStyle={styles.buttonLabel}
              style={styles.buttonSpacing}
              label="Submit"
              onClick={this.handleSubmit}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  dispatchSubmit: user => dispatch(userLogin(user)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm),
);
