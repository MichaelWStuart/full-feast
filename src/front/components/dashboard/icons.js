import React from 'react';
import DevicesIcon from 'material-ui/svg-icons/device/devices';
import ServicesIcon from 'material-ui/svg-icons/action/language';
import ProfileIcon from 'material-ui/svg-icons/action/account-circle';

export default [
  {
    name: 'My Devices',
    route: '/admin/devices',
    thumbnail: (
      <DevicesIcon
        style={{ width: '100%', height: '80%', fill: '#215977' }}
      />
    ),
  },
  {
    name: 'My Services',
    route: '/admin/services',
    thumbnail: (
      <ServicesIcon
        style={{ width: '100%', height: '80%', fill: '#215977' }}
      />
    ),
  },
  {
    name: 'My Profile',
    route: '/admin/profile',
    thumbnail: (
      <ProfileIcon
        style={{ width: '100%', height: '80%', fill: '#215977' }}
      />
    ),
  },
]
