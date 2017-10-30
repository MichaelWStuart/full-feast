export const cookie = token => [
  'token', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
];

export const noCookie = () => ['token', '', { expires: new Date(0) }];

export const defaultDevices = {
  desktop: [],
  laptop: [],
  server: [],
  router: [],
  printer: [],
  phone: [],
  tablet: [],
};

export const defaultServices = {
  'software-key': [],
  'support-vendor': [],
  'email-provider': [],
  'web-host-provider': [],
  'isp': [],
  'data-file': [],
  'database-provider': [],
  'upgrade': [],
  'warranty': [],
};

export const promiseParse = arr => arr[0].desktop ? arr : [arr[1], arr[0]];
