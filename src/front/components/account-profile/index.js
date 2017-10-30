import React from 'react';
import {
  Dialog,
  RaisedButton,
  Card,
  CardHeader,
  CardText,
  CardTitle,
} from 'material-ui';

class AccountProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(route) {
    this.props.history.push(route);
  }

  render() {
    return (
      <div>
        <Dialog
          modal={false}
          open
          onRequestClose={this.handleClose}
          autoDetectWindowHeight
          title="My Profile"
        >
          <Card>
            <CardTitle title="Username" subtitle="Click to Change Password" />
            <CardText>Bio</CardText>
          </Card>
          <br />

          <div
            style={{
              textAlign: 'center',
              display: 'inline-block',
              paddingLeft: '30%',
            }}
          >
            <RaisedButton
              backgroundColor="#0099D4"
              labelStyle={{ color: 'white' }}
              label="Cancel"
              onClick={() => this.handleClick('/admin')}
            />
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'inline-block',
              paddingLeft: '7%',
            }}
          >
            <RaisedButton
              backgroundColor="#0099D4"
              labelStyle={{ color: 'white' }}
              label="Save"
              onClick={() => this.handleClick('/admin')}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default AccountProfile;
