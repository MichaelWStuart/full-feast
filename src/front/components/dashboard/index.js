import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui';
import { withRouter } from 'react-router-dom';
import styles from '../device-create/styles';
import icons from './icons';
import devicePopulate from '../../actions/async/device/populate';
import servicePopulate from '../../actions/async/service/populate';

class Landing extends React.Component {
  componentWillMount() {
    if (this.props.user && !this.props.flag.service) {
      this.props.dispatchServiceFetch();
    }
    if (this.props.user && !this.props.flag.device) {
      console.log('FETCH DEVICES', this.props.device);
      this.props.dispatchDeviceFetch();
    }
  }

  render() {
    console.log(':::::::', this.props);
    return (
      <div>
        <div style={styles.techTile}>
          <GridList
            cellHeight={300}
            cols={4}
            padding={20}
            style={styles.techList}
          >
            {icons.map(icon => (
              <GridTile
                key={icon.route}
                style={styles.techTileInner}
                title={icon.name}
                titleStyle={styles.techTileInnerTitle}
                titleBackground="rgba(0,0,0,.3)"
                onClick={() => this.props.history.push(icon.route)}
              >
                {icon.thumbnail}
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  device: state.device,
  service: state.service,
  flag: state.flag,
});

const mapDispatchToProps = dispatch => ({
  dispatchDeviceFetch: () => dispatch(devicePopulate()),
  dispatchServiceFetch: () => dispatch(servicePopulate()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Landing),
);
