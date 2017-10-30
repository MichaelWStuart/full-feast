import React from 'react';
import DesktopIcon from 'material-ui/svg-icons/hardware/desktop-windows';
import LaptopIcon from 'material-ui/svg-icons/hardware/laptop-mac';
import ServerIcon from 'material-ui/svg-icons/device/storage';
import PhoneIcon from 'material-ui/svg-icons/hardware/phone-iphone';
import TabletIcon from 'material-ui/svg-icons/hardware/tablet';
import PrinterIcon from 'material-ui/svg-icons/action/print';
import RouterIcon from 'material-ui/svg-icons/hardware/router';
import styles from '../../../styles';

const labels = [
  <DesktopIcon key="desktop" style={styles.deviceIcon} />,
  <LaptopIcon key="laptop" style={styles.deviceIcon} />,
  <ServerIcon key="server" style={styles.deviceIcon} />,
  <RouterIcon key="router" style={styles.deviceIcon} />,
  <PrinterIcon key="printer" style={styles.deviceIcon} />,
  <TabletIcon key="tablet" style={styles.deviceIcon} />,
  <PhoneIcon key="phone" style={styles.deviceIcon} />,
];

export default labels;
