import React from 'react';
import { connect } from 'react-redux';
import {
  GridList,
  GridTile,
  FloatingActionButton,
  Dialog,
  TextField,
  Checkbox,
  RaisedButton,
} from 'material-ui';
import { withRouter } from 'react-router-dom';
import ContentAdd from 'material-ui/svg-icons/content/add';
import BackIcon from 'material-ui/svg-icons/av/play-circle-filled';
import DeviceSpecsIcon from 'material-ui/svg-icons/device/dvr';
import HardwareSpecsIcon from 'material-ui/svg-icons/hardware/developer-board';
import AddOnsIcon from 'material-ui/svg-icons/device/usb';
import DeviceHistoryIcon from 'material-ui/svg-icons/device/access-time';
import DisplayIcon from 'material-ui/svg-icons/hardware/tv';
import LoginInfoIcon from 'material-ui/svg-icons/hardware/security';
import ServiceHistoryIcon from 'material-ui/svg-icons/action/build';
import UpgradeHistoryIcon from 'material-ui/svg-icons/action/trending-up';
import WarrantiesHistoryIcon from 'material-ui/svg-icons/action/receipt';
import SoftwareKeyIcon from 'material-ui/svg-icons/communication/vpn-key';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import deviceUpdate from '../../../actions/async/device/update';
import deviceDelete from '../../../actions/async/device/destroy';

import labels from './labels';
import styles from './styles';

class InfoRead extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.closePreview = this.closePreview.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      pop: false,
      preview: false,
      simpleIcons: [
        {
          name: 'Device Profile',
          info: labels.computer1.text,
          thumbnail: (
            <DeviceSpecsIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Hardware Specs',
          info: labels.computer2.text,
          thumbnail: (
            <HardwareSpecsIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Add-ons',
          info: labels.computer3.check,
          thumbnail: (
            <AddOnsIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Device History',
          info: labels.computer4.text,
          thumbnail: (
            <DeviceHistoryIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Displays',
          info: labels.computer5.text,
          thumbnail: (
            <DisplayIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Login Info',
          info: labels.computer6.text,
          thumbnail: (
            <LoginInfoIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
      ],
      fancyIcons: [
        {
          name: 'Service History',
          viewRoute: '/admin/devices/sample/serviceHistory',
          addRoute: '/admin/devices/sample/add/serviceHistory',
          thumbnail: (
            <ServiceHistoryIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Upgrade History',
          viewRoute: '/admin/devices/sample/upgradeHistory',
          addRoute: '/admin/devices/sample/add/upgradeHistory',
          thumbnail: (
            <UpgradeHistoryIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Warranties',
          viewRoute: '/admin/devices/sample/warranties',
          addRoute: '/admin/devices/sample/add/warranties',
          thumbnail: (
            <WarrantiesHistoryIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
        {
          name: 'Software Keys',
          viewRoute: '/admin/devices/sample/softwareKeys',
          addRoute: '/admin/devices/sample/add/softwareKeys',
          thumbnail: (
            <SoftwareKeyIcon
              style={{
                width: '100%',
                height: '80%',
                fill: '#215977',
              }}
            />
          ),
        },
      ],
    };
  }

  handleClick(route) {
    this.props.history.push(route);
  }

  handlePreview(icon) {
    this.setState({ preview: !this.state.preview, view: icon });
  }

  closePreview() {
    this.props.dispatchDeviceUpdate(this.props.device, this.state.initial);
    this.setState({ preview: !this.state.preview });
  }
  handleRemove() {
    console.log(this.props.device);

    this.props.dispatchDeviceDelete(
      this.props.device,
      this.props.devices[this.props.device].find(
        a =>
          a['Computer Name'] ||
          a['Make'] ||
          a['Name'] === `${this.props.match.params.id}`.slice(0, -1),
      )._id,
    );

    this.props.history.push(`/admin/devices/${this.props.device}`);
  }

  handleChange(e, value) {
    if (e.target.type === 'checkbox') {
      const initial = this.props.devices[this.props.device].find(
        v => v[e.target.nextSibling.lastChild.innerText] === value,
      );
      this.setState({ initial });
      initial[e.target.nextSibling.lastChild.innerText] = e.target.checked;
      this.setState({ initial: e.target.value });
    } else {
      const initial = this.props.devices[this.props.device].find(
        v => v[e.target.previousSibling.innerText] === value,
      );
      this.setState({ initial });
      initial[e.target.previousSibling.innerText] = e.target.value;
      this.setState({ initial: e.target.value });
    }
  }

  render() {
    console.log('INFOPROPS', this.props);
    return (
      <div>
        <div style={styles.techTile}>
          <GridList
            cellHeight={220}
            cols={5}
            padding={20}
            style={styles.techList}
          >
            <GridTile
              style={styles.techTileInner}
              onClick={() =>
                this.handleClick(`/admin/devices/${this.props.device}`)}
            >
              <BackIcon
                style={{
                  width: '100%',
                  height: '100%',
                  fill: '#215977',
                  transform: 'rotate(180deg)',
                }}
              />
            </GridTile>
            <GridTile
              onClick={() => this.handleRemove()}
              style={styles.techTileInner}
            >
              <DeleteIcon
                style={{
                  width: '100%',
                  height: '100%',
                  fill: '#215977',
                }}
              />
            </GridTile>
            {this.state.simpleIcons.map((icon, i) => (
              <GridTile
                key={i}
                style={styles.techTileInner}
                title={icon.name}
                titleStyle={styles.techTileInnerTitle}
                titleBackground="rgba(0,0,0,.3)"
                onClick={() => this.handlePreview(icon.info)}
              >
                {icon.thumbnail}
              </GridTile>
            ))}
            {this.state.fancyIcons.map((icon, i) => (
              <GridTile
                key={i}
                style={styles.techTileInner}
                title={icon.name}
                titleStyle={styles.techTileInnerTitle}
                titleBackground="rgba(0,0,0,.3)"
                onClick={
                  this.state.active
                    ? null
                    : () => this.handleClick(icon.viewRoute)
                }
                actionIcon={
                  <FloatingActionButton
                    mini
                    backgroundColor="#0099D4"
                    style={{ marginRight: 20, fill: '#0099D4', zIndex: 10 }}
                    onMouseEnter={() => this.setState({ active: true })}
                    onMouseLeave={() => this.setState({ active: false })}
                    onClick={() => this.handleClick(icon.addRoute)}
                  >
                    <ContentAdd color="white" />
                  </FloatingActionButton>
                }
              >
                {icon.thumbnail}
              </GridTile>
            ))}
          </GridList>
          {this.state.preview ? (
            <Dialog
              open
              autoScrollBodyContent
              autoDetectWindowHeight={false}
              repositionOnUpdate={false}
              bodyStyle={{ minHeight: '70vh' }}
            >
              {Object.entries(this.state.currentDevice)
                .filter(c => this.state.view.includes(c[0]))
                .map(
                  (v, i) =>
                    (typeof v[1] === 'string' ? (
                      <TextField
                        key={i}
                        onChange={e => this.handleChange(e, v[1])}
                        floatingLabelText={v[0]}
                        value={v[1]}
                        floatingLabelStyle={styles.floatingLabel}
                        underlineFocusStyle={styles.inputFocused}
                        style={styles.input}
                      />
                    ) : (
                      <Checkbox
                        checked={v[1]}
                        label={v[0]}
                        iconStyle={styles.checkbox}
                        inputStyle={{ width: '20%' }}
                        labelStyle={styles.checkboxLabel}
                        onClick={e => this.handleChange(e, v[1])}
                      />
                    )),
                )}
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
                  label={'Save'}
                  style={styles.buttonSpacing}
                  onClick={this.closePreview}
                />
              </div>
            </Dialog>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchDeviceUpdate: (type, dev) => dispatch(deviceUpdate(type, dev)),
  dispatchDeviceDelete: (id, type) => dispatch(deviceDelete(id, type)),
});

const mapStateToProps = state => ({ devices: state.device });

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InfoRead),
);
