const styles = {
  regularGridTile: {
    style: {
      border: '3px solid lightgrey',
      margin: '5%',
      borderRadius: '10px',
      fontFamily: 'Lato',
      color: '#215977',
      fontWeight: '700',
    },
    titleStyle: {
      fontSize: '1.4em',
      letterSpacing: '2px',
    },
    titleBackground: 'rgba(0,0,0,.2)',
  },
  navBar: {
    padding: '10px',
  },
  techTile: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  techList: {
    width: '100%',
    height: 450,
  },
  techTileInner: {
    border: '3px solid lightgrey',
    margin: '5%',
    borderRadius: '10px',
    fontFamily: 'Lato',
    color: '#215977',
    fontWeight: '700',
  },
  techTileInnerTitle: {
    fontSize: '1.4em',
    letterSpacing: '2px',
  },
  techTileInnerSubtitle: {
    fontSize: '1em',
  },
  navItems: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Lato',
    fontWeight: '700',
    color: '#215977',
  },
  navItemButton: {
    fontFamily: 'Lato',
    fontWeight: '400',
    color: '#215977',
    fontSize: '1em',
  },
  floatingLabel: {
    color: '#B2B2B2',
  },
  input: {
    width: '100%',
  },
  inputFocused: {
    borderBottomColor: '#0099D4',
  },
  inputMenuItems: {
    color: '#0099D4',
  },
  selectedMenuItemStyle: {
    color: '#0099D4',
  },
  checkbox: {
    fill: '#0099D4',
  },
  checkboxLabel: {
    color: 'grey',
  },
  dialogTitle: {
    textAlign: 'center',
    color: 'grey',
  },
  raisedButton: {
    backgroundColor: '#0099D4',
  },
  buttonLabel: {
    color: 'white',
  },
  buttonSpacing: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  gridList: { cellHeight: 220, cols: 5, padding: 20 },
};

export default styles;
