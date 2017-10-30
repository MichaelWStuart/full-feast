import React from 'react';
import BackIcon from 'material-ui/svg-icons/av/play-circle-filled';
import SoftwareKeyIcon from 'material-ui/svg-icons/communication/vpn-key';
import SupportProviderIcon from 'material-ui/svg-icons/communication/phone';
import EmailProviderIcon from 'material-ui/svg-icons/communication/email';
import WebHostProviderIcon from 'material-ui/svg-icons/av/web';
import ISPIcon from 'material-ui/svg-icons/communication/rss-feed';
import DataInventoryIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import DatabaseProviderIcon from 'material-ui/svg-icons/file/cloud';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

const styles = {
  iconBack: { width: '100%', height: '100%', fill: '#215977', transform: 'rotate(180deg)' },
  iconDefault: { width: '100%', height: '80%', fill: '#215977' },
  iconAdd: { width: '100%', height: '100%', fill: '#215977' },
}

export const iconAdd = ( <AddIcon style={styles.iconAdd} /> );

export default [
  {
    route: '/admin',
    thumbnail: ( <BackIcon style={styles.iconBack} /> ),
  },
  {
    name: 'Software Licenses',
    route: '/admin/services/software-key',
    thumbnail: ( <SoftwareKeyIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Support Vendors',
    route: '/admin/services/support-vendor',
    thumbnail: ( <SupportProviderIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Email Providers',
    route: '/admin/services/email-provider',
    thumbnail: ( <EmailProviderIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Web Host Providers',
    route: '/admin/services/web-host-provider',
    thumbnail: ( <WebHostProviderIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'ISPs',
    route: '/admin/services/isp',
    thumbnail: ( <ISPIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Data Files',
    route: '/admin/services/data-file',
    thumbnail: ( <DataInventoryIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Database Providers',
    route: '/admin/services/database-provider',
    thumbnail: ( <DatabaseProviderIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Warranties',
    route: '/admin/services/warranty',
    thumbnail: ( <DatabaseProviderIcon style={styles.iconDefault} /> ),
  },
  {
    name: 'Upgrades',
    route: '/admin/services/upgrade',
    thumbnail: ( <DatabaseProviderIcon style={styles.iconDefault} /> ),
  },
]
