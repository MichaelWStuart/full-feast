import React from 'react';
import { GridList, GridTile } from 'material-ui';
import icons from './icons'
import styles from '../../styles';

export default (props) => (
  <div style={styles.techTile}>
    <GridList
      cellHeight={220}
      cols={5}
      padding={20}
      style={styles.techList}
    >
      {icons.map(icon => (
        <GridTile
          key={icon.route}
          style={styles.techTileInner}
          title={icon.name}
          titleStyle={styles.techTileInnerTitle}
          titleBackground="rgba(0,0,0,.2)"
          onClick={() => props.history.push(icon.route)}
        >
          {icon.thumbnail}
        </GridTile>
      ))}
    </GridList>
  </div>
);
