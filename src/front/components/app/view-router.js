import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Dashboard from '../dashboard';
import Devices from '../devices';
import DeviceCreate from '../device-create';
import DeviceRead from '../device-read';
import InfoRead from '../device-read/info';
import Services from '../services';
import ServiceContainer from '../services/service';
import ServiceCreate from '../services/service/create';
import ServiceUpdate from '../services/service/update';
import LoginForm from '../auth/login';
import Landing from '../landing';
import RegisterForm from '../auth/register';
import AccountProfile from '../account-profile';

const ViewRouter = () => (
  <Switch>
    <Route exact path={'/'} component={Landing} />
    <Route exact path={'/login'} component={LoginForm} />
    <Route exact path={'/register'} component={RegisterForm} />
    <Route exact path={'/admin'} component={Dashboard} />
    <Route exact path={'/admin/devices'} component={Devices} />
    <Route exact path={'/admin/profile'} component={AccountProfile} />
    <Route
      exact
      path={'/admin/devices/desktop'}
      component={() => DeviceRead({ device: 'desktop' })}
    />
    <Route
      path={'/admin/devices/desktop/info/:id'}
      component={() => InfoRead({ device: 'desktop' })}
    />
    <Route
      exact
      path={'/admin/devices/laptop'}
      component={() => DeviceRead({ device: 'laptop' })}
    />
    <Route
      exact
      path={'/admin/devices/laptop/info/:id'}
      component={() => InfoRead({ device: 'laptop' })}
    />
    <Route
      exact
      path={'/admin/devices/server'}
      component={() => DeviceRead({ device: 'server' })}
    />
    <Route
      exact
      path={'/admin/devices/server/info/:id'}
      component={() => InfoRead({ device: 'server' })}
    />
    <Route
      exact
      path={'/admin/devices/phone'}
      component={() => DeviceRead({ device: 'phone' })}
    />
    <Route
      exact
      path={'/admin/devices/phone/info/:id'}
      component={() => InfoRead({ device: 'phone' })}
    />
    <Route
      exact
      path={'/admin/devices/tablet'}
      component={() => DeviceRead({ device: 'tablet' })}
    />
    <Route
      exact
      path={'/admin/devices/tablet/info/:id'}
      component={() => InfoRead({ device: 'tablet' })}
    />
    <Route
      exact
      path={'/admin/devices/printer'}
      component={() => DeviceRead({ device: 'printer' })}
    />
    <Route
      exact
      path={'/admin/devices/printer/info/:id'}
      component={() => InfoRead({ device: 'printer' })}
    />
    <Route
      exact
      path={'/admin/devices/router'}
      component={() => DeviceRead({ device: 'router' })}
    />
    <Route
      exact
      path={'/admin/devices/router/info/:id'}
      component={() => InfoRead({ device: 'router' })}
    />
    <Route
      exact
      path={'/admin/devices/desktop/create'}
      component={() => DeviceCreate({ device: 'Desktop', steps: 6 })}
    />
    <Route
      exact
      path={'/admin/devices/laptop/create'}
      component={() => DeviceCreate({ device: 'Laptop', steps: 6 })}
    />
    <Route
      exact
      path={'/admin/devices/server/create'}
      component={() => DeviceCreate({ device: 'Server', steps: 6 })}
    />
    <Route
      exact
      path={'/admin/devices/phone/create'}
      component={() => DeviceCreate({ device: 'Phone', steps: 1 })}
    />
    <Route
      exact
      path={'/admin/devices/tablet/create'}
      component={() => DeviceCreate({ device: 'Tablet', steps: 1 })}
    />
    <Route
      exact
      path={'/admin/devices/printer/create'}
      component={() => DeviceCreate({ device: 'Printer', steps: 1 })}
    />
    <Route
      exact
      path={'/admin/devices/router/create'}
      component={() => DeviceCreate({ device: 'Router', steps: 6 })}
    />
    <Route exact path={'/admin/services'} component={Services} />
    <Route
      exact
      path={'/admin/services/software-key'}
      component={() => ServiceContainer({ service: 'software-key' })}
    />
    <Route
      exact
      path={'/admin/services/support-vendor'}
      component={() => ServiceContainer({ service: 'support-vendor' })}
    />
    <Route
      exact
      path={'/admin/services/email-provider'}
      component={() => ServiceContainer({ service: 'email-provider' })}
    />
    <Route
      exact
      path={'/admin/services/web-host-provider'}
      component={() => ServiceContainer({ service: 'web-host-provider' })}
    />
    <Route
      exact
      path={'/admin/services/isp'}
      component={() => ServiceContainer({ service: 'isp' })}
    />
    <Route
      exact
      path={'/admin/services/data-file'}
      component={() => ServiceContainer({ service: 'data-file' })}
    />
    <Route
      exact
      path={'/admin/services/database-provider'}
      component={() => ServiceContainer({ service: 'database-provider' })}
    />
    <Route
      exact
      path={'/admin/services/upgrade'}
      component={() => ServiceContainer({ service: 'upgrade' })}
    />
    <Route
      exact
      path={'/admin/services/warranty'}
      component={() => ServiceContainer({ service: 'warranty' })}
    />
    <Route
      exact
      path={'/admin/services/software-key/create'}
      component={() => ServiceCreate({ service: 'Software Key' })}
    />
    <Route
      exact
      path={'/admin/services/support-vendor/create'}
      component={() => ServiceCreate({ service: 'Support Vendor' })}
    />
    <Route
      exact
      path={'/admin/services/email-provider/create'}
      component={() => ServiceCreate({ service: 'Email Provider' })}
    />
    <Route
      exact
      path={'/admin/services/web-host-provider/create'}
      component={() => ServiceCreate({ service: 'Web Host Provider' })}
    />
    <Route
      exact
      path={'/admin/services/isp/create'}
      component={() => ServiceCreate({ service: 'ISP' })}
    />
    <Route
      exact
      path={'/admin/services/data-file/create'}
      component={() => ServiceCreate({ service: 'Data File' })}
    />
    <Route
      exact
      path={'/admin/services/database-provider/create'}
      component={() => ServiceCreate({ service: 'Database Provider' })}
    />
    <Route
      exact
      path={'/admin/services/upgrade/create'}
      component={() => ServiceCreate({ service: 'Upgrade' })}
    />
    <Route
      exact
      path={'/admin/services/warranty/create'}
      component={() => ServiceCreate({ service: 'Warranty' })}
    />
    <Route
      exact
      path={'/admin/services/software-key/:_id'}
      component={() => ServiceUpdate({ service: 'software-key' })}
    />
    <Route
      exact
      path={'/admin/services/support-vendor/:_id'}
      component={() => ServiceUpdate({ service: 'support-vendor' })}
    />
    <Route
      exact
      path={'/admin/services/email-provider/:_id'}
      component={() => ServiceUpdate({ service: 'email-provider' })}
    />
    <Route
      exact
      path={'/admin/services/web-host-provider/:_id'}
      component={() => ServiceUpdate({ service: 'web-host-provider' })}
    />
    <Route
      exact
      path={'/admin/services/isp/:_id'}
      component={() => ServiceUpdate({ service: 'isp' })}
    />
    <Route
      exact
      path={'/admin/services/data-file/:_id'}
      component={() => ServiceUpdate({ service: 'data-file' })}
    />
    <Route
      exact
      path={'/admin/services/database-provider/:_id'}
      component={() => ServiceUpdate({ service: 'database-provider' })}
    />
    <Route
      exact
      path={'/admin/services/upgrade/:_id'}
      component={() => ServiceUpdate({ service: 'upgrade' })}
    />
    <Route
      path={'/admin/services/warranty/:_id'}
      component={() => ServiceUpdate({ service: 'warranty' })}
    />
  </Switch>
);

export default withRouter(ViewRouter);
