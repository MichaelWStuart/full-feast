import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui';
import { withRouter } from 'react-router-dom';
import * as l from './labels';
import styles from './styles';

class DeviceRead extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(route) {
    this.props.history.push(route);
  }

  deviceIcons() {
    const fixer = this.props.devices[this.props.device].filter((set => f => !set.has(f._id) && set.add(f._id))(new Set()));
    console.log('fixer in device icons', fixer);
    return fixer.map((v, i) => (
      <GridTile
        {...styles.gridTile}
        key={`desktop-icon-${i}`}
        title={v['Computer Name'] || v['Make'] || v['Name']}
        onClick={() =>
          this.handleClick(
            `/admin/devices/${this.props.device}/info/${v['Computer Name'] ||
              v['Make'] ||
              v['Name']}}`,
          )}
      >
        {l.default.filter(k => k.key === this.props.device)[0]}
      </GridTile>
    ));
  }

  render() {
    console.log('props on deviceread', this.props);
    console.log('state on deviceread', this.state);
    return (
      <div>
        <GridList {...styles.gridList}>
          <GridTile
            {...styles.gridTile}
            onClick={() => this.handleClick('/admin/devices')}
          >
            {styles.navigation[0]}
          </GridTile>
          <GridTile
            {...styles.gridTile}
            onClick={() =>
              this.handleClick(`/admin/devices/${this.props.device}/create`)}
          >
            {styles.navigation[1]}
          </GridTile>
          {this.deviceIcons()}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({ devices: state.device });

export default withRouter(connect(mapStateToProps)(DeviceRead));
