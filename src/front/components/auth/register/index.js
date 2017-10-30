import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog, TextField, RaisedButton } from 'material-ui';
import styles from '../../../styles';
import userRegister from '../../../actions/async/user/register';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
      'confirm-password': '',
      'first-name': '',
      'last-name': '',
      'email': '',
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.history.push('/admin');
  }

  handleChange(e, type, box) {
    box
    this.setState({ [type]: box ? !this.state[type] : e.target.value });
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
          title="Register"
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
          <TextField
            onChange={e => this.handleChange(e, 'password')}
            value={this.state.password}
            floatingLabelText={'Password'}
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            type="password"
            style={styles.input}
          />
          <TextField
            onChange={e => this.handleChange(e, 'confirm-password')}
            value={this.state['confirm-password']}
            floatingLabelText={'Confirm Password'}
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            type="password"
            style={styles.input}
          />
          <TextField
            onChange={e => this.handleChange(e, 'first-name')}
            value={this.state['first-name']}
            floatingLabelText={'First Name'}
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            style={styles.input}
          />
          <TextField
            onChange={e => this.handleChange(e, 'last-name')}
            value={this.state['last-name']}
            floatingLabelText={'Last Name'}
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            style={styles.input}
          />
          <TextField
            onChange={e => this.handleChange(e, 'email')}
            value={this.state.email}
            floatingLabelText={'Email'}
            floatingLabelStyle={styles.floatingLabel}
            underlineFocusStyle={styles.inputFocused}
            style={styles.input}
          />
          <br />
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
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  dispatchSubmit: user => dispatch(userRegister(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
