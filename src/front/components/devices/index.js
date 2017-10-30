import React from 'react';
import { GridList, GridTile } from 'material-ui';
import styles from './styles';
import labels from './labels';

class MyDevices extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(route) {
    this.props.history.push(route);
  }

  render() {
    console.log('props on devices', this.props);
    return (
      <div>
        <div style={styles.techTile}>
          <GridList {...styles.gridList} style={styles.techList}>
            {labels.icons.map(icon => (
              <GridTile
                {...styles.regularGridTile}
                key={icon.route}
                title={icon.name}
                onClick={() => this.handleClick(icon.route)}
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

export default MyDevices;
