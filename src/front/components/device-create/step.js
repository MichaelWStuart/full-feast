import React from 'react';
import { withRouter } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import styles from './styles';
import * as d from './devices/desktop';
import * as l from './devices/laptop';
import { Phone1 } from './devices/phone';
import { Printer1 } from './devices/printer';
import { Router1 } from './devices/router';
import * as s from './devices/server';
import { Tablet1 } from './devices/tablet';

class StepComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState(this.props.formData);
  }

  handleChange(e, date, field) {
    let value;
    if (date) {
      value = date;
    } else if (e.target.type === 'text') {
      value = e.target.value;
    } else if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }
    this.setState({ [field]: value });
  }

  viewRouter() {
    switch (`${this.props.device}${this.props.step}`) {
      case 'desktop1':
        return (
          <d.Desktop1 handleChange={this.handleChange} formData={this.state} />
        );
      case 'desktop2':
        return (
          <d.Desktop2 handleChange={this.handleChange} formData={this.state} />
        );
      case 'desktop3':
        return (
          <d.Desktop3 handleChange={this.handleChange} formData={this.state} />
        );
      case 'desktop4':
        return (
          <d.Desktop4 handleChange={this.handleChange} formData={this.state} />
        );
      case 'desktop5':
        return (
          <d.Desktop5 handleChange={this.handleChange} formData={this.state} />
        );
      case 'desktop6':
        return (
          <d.Desktop6 handleChange={this.handleChange} formData={this.state} />
        );
      case 'laptop1':
        return (
          <l.Laptop1 handleChange={this.handleChange} formData={this.state} />
        );
      case 'laptop2':
        return (
          <l.Laptop2 handleChange={this.handleChange} formData={this.state} />
        );
      case 'laptop3':
        return (
          <l.Laptop3 handleChange={this.handleChange} formData={this.state} />
        );
      case 'laptop4':
        return (
          <l.Laptop4 handleChange={this.handleChange} formData={this.state} />
        );
      case 'laptop5':
        return (
          <l.Laptop5 handleChange={this.handleChange} formData={this.state} />
        );
      case 'laptop6':
        return (
          <l.Laptop6 handleChange={this.handleChange} formData={this.state} />
        );
      case 'phone1':
        return (
          <Phone1 handleChange={this.handleChange} formData={this.state} />
        );
      case 'printer1':
        return (
          <Printer1 handleChange={this.handleChange} formData={this.state} />
        );
      case 'router1':
        return (
          <Router1 handleChange={this.handleChange} formData={this.state} />
        );
      case 'server1':
        return (
          <s.Server1 handleChange={this.handleChange} formData={this.state} />
        );
      case 'server2':
        return (
          <s.Server2 handleChange={this.handleChange} formData={this.state} />
        );
      case 'server3':
        return (
          <s.Server3 handleChange={this.handleChange} formData={this.state} />
        );
      case 'server4':
        return (
          <s.Server4 handleChange={this.handleChange} formData={this.state} />
        );
      case 'server5':
        return (
          <s.Server5 handleChange={this.handleChange} formData={this.state} />
        );
      case 'server6':
        return (
          <s.Server6 handleChange={this.handleChange} formData={this.state} />
        );
      case 'tablet1':
        return (
          <Tablet1 handleChange={this.handleChange} formData={this.state} />
        );
    }
  }

  render() {
    console.log(
      `${this.props.device}${this.props.step}`.charAt(0).toUpperCase() +
        `${this.props.device}${this.props.step}`.slice(1),
    );
    return (
      <div>
        {this.viewRouter()}
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            bottom: '10%',
            left: '-1%',
          }}
        >
          <RaisedButton
            backgroundColor={styles.raisedButton.backgroundColor}
            labelStyle={styles.buttonLabel}
            label={this.props.step === 1 ? 'Cancel' : 'Previous'}
            style={styles.buttonSpacing}
            onClick={() => this.props.handleTransition(this.state, -1)}
          />
          <RaisedButton
            backgroundColor={styles.raisedButton.backgroundColor}
            labelStyle={styles.buttonLabel}
            label={this.props.step === this.props.steps ? 'Submit' : 'Next'}
            style={styles.buttonSpacing}
            onClick={() => this.props.handleTransition(this.state, 1)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(StepComponent);
