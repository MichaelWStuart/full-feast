import React from 'react';
import BackIcon from 'material-ui/svg-icons/av/play-circle-filled';
import DesktopIcon from 'material-ui/svg-icons/hardware/desktop-windows';
import LaptopIcon from 'material-ui/svg-icons/hardware/laptop-mac';
import ServerIcon from 'material-ui/svg-icons/device/storage';
import PhoneIcon from 'material-ui/svg-icons/hardware/phone-iphone';
import TabletIcon from 'material-ui/svg-icons/hardware/tablet';
import PrinterIcon from 'material-ui/svg-icons/action/print';
import RouterIcon from 'material-ui/svg-icons/hardware/router';

const labels = {
  icons: [
    {
      name: '',
      route: '/admin',
      thumbnail: (
        <BackIcon
          style={{
            width: '100%',
            height: '100%',
            fill: '#215977',
            transform: 'rotate(180deg)',
          }}
        />
      ),
    },
    {
      name: 'Desktop',
      route: '/admin/devices/desktop',
      thumbnail: (
        <DesktopIcon
          style={{ width: '100%', height: '80%', fill: '#215977' }}
        />
      ),
    },
    {
      name: 'Laptop',
      route: '/admin/devices/laptop',
      thumbnail: (
        <LaptopIcon style={{ width: '100%', height: '80%', fill: '#215977' }} />
      ),
    },
    {
      name: 'Server',
      route: '/admin/devices/server',
      thumbnail: (
        <ServerIcon style={{ width: '100%', height: '80%', fill: '#215977' }} />
      ),
    },
    {
      name: 'Phone',
      route: '/admin/devices/phone',
      thumbnail: (
        <PhoneIcon style={{ width: '100%', height: '80%', fill: '#215977' }} />
      ),
    },
    {
      name: 'Tablet',
      route: '/admin/devices/tablet',
      thumbnail: (
        <TabletIcon style={{ width: '100%', height: '80%', fill: '#215977' }} />
      ),
    },
    {
      name: 'Printer',
      route: '/admin/devices/printer',
      thumbnail: (
        <PrinterIcon
          style={{ width: '100%', height: '80%', fill: '#215977' }}
        />
      ),
    },
    {
      name: 'Router',
      route: '/admin/devices/router',
      thumbnail: (
        <RouterIcon style={{ width: '100%', height: '80%', fill: '#215977' }} />
      ),
    },
  ],
};

export default labels;
