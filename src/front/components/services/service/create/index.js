import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog, RaisedButton } from 'material-ui';
import serviceCreate from '../../../../actions/async/service/create';
import * as s from '../../forms';
import styles from '../../../../styles';
import serviceLabels from '../../labels';

class ServiceCreate extends React.Component {
  constructor(props) {
    super(props);
    this.service = this.props.history.location.pathname.split('/')[3];
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState(this.defaultFormData);
  }

  defaultFormData() {
    const defaultFormData = {};
    const labels = serviceLabels[this.service];
    labels.text &&
      labels.text.forEach(textField => (defaultFormData[textField] = ''));
    labels.check &&
      labels.check.forEach(checkBox => (defaultFormData[checkBox] = false));
    labels.date &&
      labels.date.forEach(
        datePicker => (defaultFormData[datePicker] = new Date()),
      );
    return defaultFormData;
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

  handleSubmission() {
    const service = Object.assign({}, this.state, { creationDate: new Date() });
    this.props.dispatchSubmit({ service, type: this.service });
    this.props.history.push(`/admin/services/${this.service}`); // temporary
  }

  viewRouter() {
    switch (this.props.service) {
      case 'Software Key':
        return (
          <s.SoftwareKey
            handleChange={this.handleChange}
            formData={this.state}
          />
        );
      case 'Support Vendor':
        return (
          <s.SupportVendor
            handleChange={this.handleChange}
            formData={this.state}
          />
        );
      case 'Email Provider':
        return (
          <s.EmailProvider
            handleChange={this.handleChange}
            formData={this.state}
          />
        );
      case 'Web Host Provider':
        return (
          <s.WebHostProvider
            handleChange={this.handleChange}
            formData={this.state}
          />
        );
      case 'ISP':
        return <s.Isp handleChange={this.handleChange} formData={this.state} />;
      case 'Data File':
        return (
          <s.DataFile handleChange={this.handleChange} formData={this.state} />
        );
      case 'Database Provider':
        return (
          <s.DatabaseProvider
            handleChange={this.handleChange}
            formData={this.state}
          />
        );
      case 'Upgrade':
        return (
          <s.Upgrade handleChange={this.handleChange} formData={this.state} />
        );
      case 'Warranty':
        return (
          <s.Warranty handleChange={this.handleChange} formData={this.state} />
        );
    }
  }

  render() {
    return (
      <Dialog
        modal
        open
        autoScrollBodyContent
        autoDetectWindowHeight
        title={`Add ${this.props.service}`}
      >
        {this.viewRouter()}
        <div style={{ textAlign: 'center' }}>
          <RaisedButton
            backgroundColor={styles.raisedButton.backgroundColor}
            style={styles.buttonSpacing}
            labelStyle={{ color: 'white' }}
            label="Cancel"
            onClick={() => this.props.history.push('/admin/services')}
          />
          <RaisedButton
            backgroundColor={styles.raisedButton.backgroundColor}
            style={styles.buttonSpacing}
            labelStyle={{ color: 'white' }}
            label="Submit"
            onClick={this.handleSubmission}
          />
        </div>
      </Dialog>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSubmit: formData => dispatch(serviceCreate(formData)),
});

export default withRouter(connect(null, mapDispatchToProps)(ServiceCreate));
