export const sentryCredentials = {
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_NODE_ENV || 'local',
};
