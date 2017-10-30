import React from 'react';
import BackIcon from 'material-ui/svg-icons/av/play-circle-filled';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

const styles = {
  gridTile: {
    style: {
      border: '3px solid lightgrey',
      margin: '5%',
      borderRadius: '10px',
      fontFamily: 'Lato',
      color: '#215977',
      fontWeight: '700',
    },
    titleStyle: { fontSize: '1.4em' },
  },
  gridList: {
    style: {
      width: '100%',
      height: 450,
    },
    cellHeight: 220,
    cols: 5,
    padding: 20,
  },
  navigation: [
    <BackIcon
      style={{
        width: '100%',
        height: '100%',
        fill: '#215977',
        transform: 'rotate(180deg)',
      }}
    />,
    <AddIcon style={{ width: '100%', height: '100%', fill: '#215977' }} />,
  ],
};
export default styles;
