import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog, RaisedButton } from 'material-ui';
import serviceUpdate from '../../../../actions/async/service/update';
import * as s from '../../forms';
import styles from '../../../../styles';

class ServiceUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {}
    this.displayTitle = {
      'data-file': 'Data File',
      'database-provider': 'Database Provider',
      'email-provider': 'Email Provider',
      'service-history': 'Service History',
      'isp': 'ISP',
      'software-key': 'Software Key',
      'support-history': 'Support History',
      'support-vendor': 'Support Vendor',
      'upgrade': 'Upgrade',
      'warranty': 'Warranty',
      'web-host-provider': 'Web Host Provider',
    }[props.service];
  }

  componentWillMount() {
    const service = this.props.services[this.props.service].find(service =>
      service._id === this.props.match.params._id)
    this.setState(service)
  }

  handleChange(e, date, field) {
    let value;
    if (date) {
      value = date
    } else if (e.target.type === 'text') {
      value = e.target.value;
    } else if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }
    this.setState({ [field]: value })
  }

  handleSubmission() {
    console.log('STATE IN SUBMIT', this.state)
    this.props.dispatchSubmit(this.props.service, this.state);
    this.props.history.push(`/admin/services/${this.props.service}`); // temporary
  }

  viewRouter() {
    console.log('this.displayTitle', this.displayTitle)
    switch (this.displayTitle) {
      case 'Software Key':
        return (
          <s.SoftwareKey handleChange={this.handleChange} formData={this.state} />
        );
      case 'Support Vendor':
        return (
          <s.SupportVendor handleChange={this.handleChange} formData={this.state} />
        );
      case 'Email Provider':
        return (
          <s.EmailProvider handleChange={this.handleChange} formData={this.state} />
        );
      case 'Web Host Provider':
        return (
          <s.WebHostProvider handleChange={this.handleChange} formData={this.state} />
        );
      case 'ISP':
        return (
          <s.Isp handleChange={this.handleChange} formData={this.state} />
        );
      case 'Data File':
        return (
          <s.DataFile handleChange={this.handleChange} formData={this.state} />
        );
      case 'Database Provider':
        return (
          <s.DatabaseProvider handleChange={this.handleChange} formData={this.state} />
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
        title={`Edit ${this.displayTitle}`}
      >
        {this.viewRouter()}
        <div style={{ textAlign: 'center' }}>
          <RaisedButton
            backgroundColor={styles.raisedButton.backgroundColor}
            labelStyle={{ color: 'white' }}
            label='Cancel'
            onClick={() => this.props.history.push(`/admin/services/${this.props.service}`)}
          />
          <RaisedButton
            backgroundColor={styles.raisedButton.backgroundColor}
            labelStyle={{ color: 'white' }}
            label='Update'
            onClick={this.handleSubmission}
          />
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({ services: state.service });

const mapDispatchToProps = dispatch => ({
  dispatchSubmit: (type, service) => {
    console.log('SERVICE IN CONNECT', service)
    dispatch(serviceUpdate(type, service))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceUpdate));
