import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile, IconButton } from 'material-ui';
import Trashcan from 'material-ui/svg-icons/action/delete';
import { withRouter } from 'react-router-dom';
import icons, { iconAdd } from '../icons';
import styles from '../../../styles';
import serviceDestroy from '../../../actions/async/service/destroy';

class ServiceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.displayTitle = {
      'data-file': 'Software Name',
      'database-provider': 'Name of Company',
      'email-provider': 'Name of Company',
      'service-history': 'Case Number',
      isp: 'Provider Name',
      'software-key': 'Software Name',
      'support-history': 'Incident ID',
      'support-vendor': 'Name',
      upgrade: 'Name',
      warranty: 'Name',
      'web-host-provider': 'Hosting Company',
    }[props.service];

    this.icon = icons.filter(
      (icon, index) =>
        (!index ? false : icon.route.split('/')[3] === props.service),
    )[0];

    this.state = { active: true }
  }

  render() {
    return (
      <div style={styles.techTile}>
        <GridList cellHeight={220} cols={5} padding={20} style={styles.techList}>
          <GridTile
            style={styles.techTileInner}
            onClick={() => this.props.history.push('/admin/services')}
          >
            {icons[0].thumbnail}
          </GridTile>
          <GridTile
            style={styles.techTileInner}
            onClick={() =>
              this.props.history.push(`/admin/services/${this.props.service}/create`)}
          >
            {iconAdd}
          </GridTile>
          {this.props.services[this.props.service].map((service, i) => (
            <GridTile
              key={String(i) + this.icon.route}
              style={styles.techTileInner}
              title={service[this.displayTitle]}
              onClick={
                this.state.active ? () => this.props.history.push(`${this.icon.route}/${service._id}`) : null
              }
              actionIcon={
                <IconButton>
                  <Trashcan
                    onMouseEnter={() => this.setState({ active: false })}
                    onMouseLeave={() => this.setState({ active: true })}
                    onClick={() => this.props.dispatchDestroy(service._id, this.props.service)}
                  />
                </IconButton>
              }
            >
              {this.icon.thumbnail}
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
};

const mapStateToProps = state => ({ services: state.service });

const mapDispatchToProps = dispatch => ({
  dispatchDestroy: (id, type) => dispatch(serviceDestroy(id, type)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServiceContainer),
);
