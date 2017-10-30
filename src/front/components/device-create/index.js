import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog } from 'material-ui';
import StepComponent from './step';
import StepperComponent from './stepper';
import deviceCreate from '../../actions/async/device/create';
import deviceLabels from './labels';

class DeviceCreate extends React.Component {
  constructor(props) {
    super(props);
    this.device = props.device.charAt(0).toLowerCase() + props.device.slice(1);
    this.origin = `/admin/devices/${this.device}`;
    this.handleTransition = this.handleTransition.bind(this);
    this.state = { step: 1, formData: this.defaultFormData() };
  }

  defaultFormData() {
    const defaultFormData = {};
    const device = d =>
      ((d === 'desktop' || d === 'laptop' || d === 'server') && 'computer') ||
      d;
    [...Array(this.props.steps)].map((nul, i) => {
      const labels = deviceLabels[`${device(this.device)}${i + 1}`];
      labels.text &&
        labels.text.forEach(textField => (defaultFormData[textField] = ''));
      labels.check &&
        labels.check.forEach(checkBox => (defaultFormData[checkBox] = false));
      labels.date &&
        labels.date.forEach(
          datePicker => (defaultFormData[datePicker] = new Date()),
        );
    });
    return defaultFormData;
  }

  handleTransition(formData, nextStep) {
    console.log('creating device!!!!')
    if (this.state.step === 1 && nextStep === -1) {
      this.props.history.push(this.origin);
    }
    if (this.state.step === this.props.steps && nextStep === 1) {
      this.props.dispatchSubmit({
        date: new Date(),
        type: this.device,
        device: formData,
      });
      this.props.history.push(`/admin/devices/${this.device}`); // temporary
    }
    this.setState({ formData, step: this.state.step + nextStep });
  }

  render() {
    return (
      <Dialog
        modal
        open
        autoScrollBodyContent
        autoDetectWindowHeight={false}
        repositionOnUpdate={false}
        title={`Add ${this.props.device}`}
        bodyStyle={{ minHeight: '70vh' }}
      >
        <StepComponent
          step={this.state.step}
          steps={this.props.steps}
          device={this.device}
          formData={this.state.formData}
          handleTransition={this.handleTransition}
        />
        <StepperComponent step={this.state.step} steps={this.props.steps} />
      </Dialog>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSubmit: formData => dispatch(deviceCreate(formData)),
});

export default withRouter(connect(null, mapDispatchToProps)(DeviceCreate));
