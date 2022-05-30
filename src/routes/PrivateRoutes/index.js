import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { flatMap, map } from 'lodash';
import { checkRole } from 'utils/tools';
import Home from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Settings from 'pages/Settings';
// import PrivateLayout from 'layout/PrivateLayoutDefault';
import PrivateLayoutPage from 'layout/PrivateLayout';
import CmsTemplates from 'pages/CmsTemplates';
// import StartUps from 'pages/StartUps';
import CmsLogs from 'pages/CmsLogs';
import Cms from 'pages/CMS';
import Users from 'pages/Users';
import Programs from 'pages/Programs';
import Weeks from 'pages/Weeks';
import ProgramPhases from 'pages/ProgramPhases';
import SubscriptionPlans from 'pages/SubscriptionPlans';
import Learns from 'pages/Learns';
// import Gets from 'pages/Gets';
import Orders from 'pages/Orders';
import Supports from 'pages/Supports';
import Businesses from 'pages/Businesses';
import Reports from 'containers/Reports';
import Customers from 'pages/Customers';
import Payouts from 'pages/Payouts'

const routes = [
  {
    path: '/cmsTemplates',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: CmsTemplates.List,
      },
      {
        path: '/create',
        component: CmsTemplates.Create,
      },
      {
        path: '/:id/edit',
        component: CmsTemplates.Edit,
      },
    ],
  },

  {
    path: '/cmsLogs',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: CmsLogs.List,
      },
      {
        path: '/create',
        component: CmsLogs.Create,
      },
      {
        path: '/:id/edit',
        component: CmsLogs.Edit,
      },
    ],
  },

  {
    path: '/cms',
    routes: [
      {
        path: '/',
        component: Cms.List,
        hasPrivateLayoutWrapper: true,
      },
      {
        path: '/create',
        component: Cms.Create,
      },
      {
        path: '/:id/edit',
        component: Cms.Edit,
      },
    ],
  },
  {
    path: '/subscriptionPlans',
    routes: [
      {
        path: '/',
        component: SubscriptionPlans.List,
        hasPrivateLayoutWrapper: true,
      },
      {
        path: '/create',
        component: SubscriptionPlans.Create,
        hasPrivateLayoutWrapper: true,
      },
      {
        path: '/:id/edit',
        component: SubscriptionPlans.Edit,
        hasPrivateLayoutWrapper: true,
      },
      {
        path: '/:id/show',
        component: SubscriptionPlans.Show,
        hasPrivateLayoutWrapper: true,
      },
    ],
  },
  {
    path: '/users',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: Users.List,
      },
      {
        path: '/create',
        component: Users.Create,
      },
      {
        path: '/:id/edit',
        component: Users.Edit,
      },
      {
        path: '/:id/details',
        component: Users.Show,
      },
    ],
  },
  {
    path: '/programs',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path:
          '/:programId/phases/:phaseId/weeks/:periodId/learns/:conceptId/details',
        component: Learns.Show,
      },
      {
        path: '/:programId/phases/:phaseId/weeks/:periodId/:periodType/:todoId',
        component: Weeks.List,
      },
      {
        path: '/:programId/phases/:phaseId/weeks/:periodId/:periodType',
        component: Weeks.List,
      },
      {
        path: '/:programId/phases/:phaseId/weeks/:periodId',
        component: Weeks.List,
      },
      // {
      //   path: '/:programId/phases/:phaseId/weeks',
      //   component: Programs.Weeks,
      // },
      {
        path: '/',
        component: Programs.List,
      },
      {
        path: '/create',
        component: Programs.Create,
      },
      {
        path: '/:id/edit',
        component: Programs.Edit,
      },
      {
        path: '/generateCMS',
        component: Programs.GenerateCMS,
      },
      {
        path: '/:programId/phases',
        component: ProgramPhases.List,
      },
    ],
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
    title: 'profile.title',
    hasPrivateLayoutWrapper: true,
  },
  {
    path: '/settings/:model',
    component: Settings,
    exact: true,
    title: 'settings.title',
    hasPrivateLayoutWrapper: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'dashboard.title',
    hasPrivateLayoutWrapper: true,
  },
  // {
  //   path: '/startUps',
  //   hasPrivateLayoutWrapper: true,
  //   routes: [
  //     {
  //       path: '/',
  //       component: StartUps.List,
  //     },
  //     {
  //       path: '/:id/details/programPhase/:phaseId',
  //       component: StartUps.Detail,
  //     },
  //     {
  //       path: '/:id/details/:model',
  //       component: StartUps.Detail,
  //     },
  //     {
  //       path: '/:id/progress/:periodId/todos/:todoId/details',
  //       component: StartUps.TodoSteps,
  //     },
  //     {
  //       path: '/:id/progress/:periodId/concepts/:conceptId/details',
  //       component: Learns.Show,
  //     },
  //     {
  //       path: '/:id/progress/:periodId/:model',
  //       component: StartUps.ProgramDetails,
  //     },
  //   ],
  // },
  {
    path: '/orders',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: Orders.List,
      },
      {
        path: '/:id/details',
        component: Orders.Show,
      },
    ],
  },
  {
    path: '/payouts',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: Payouts.List,
      },
    ],
  },
  {
    path: '/supports',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: Supports.List,
      },
    ],
  },
  {
    path: '/businesses',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: Businesses.List,
      },
      {
        path: '/create',
        component: Businesses.Create,
      },
      {
        path: '/:id/edit',
        component: Businesses.Edit,
      },
      {
        path: '/:id/details/:model',
        component: Businesses.Detail,
      },
    ],
  },
  {
    path: '/reports',
    component: Reports,
    exact: true,
    title: 'reports.title',
    hasPrivateLayoutWrapper: true,
  },
  {
    path: '/customers',
    hasPrivateLayoutWrapper: true,
    routes: [
      {
        path: '/',
        component: Customers.List,
      },
      {
        path: '/:id/:businessId/details/programPhase/:phaseId',
        component: Customers.Detail,
      },
      {
        path: '/:id/:businessId/progress/:progressId/program-details/:periodId/concepts/:conceptId/details',
        component: Learns.Show,
      },
      {
        path: '/:id/:businessId/progress/:progressId/program-details/:periodId/todos/:todoId/details',
        component: Customers.Todo,
      },
      {
        path: '/:id/:businessId/progress/:progressId/program-details/:periodId/:model',
        component: Customers.ProgramDetails,
      },
      {
        path: '/:id/:businessId/progress/:progressId/details/:model',
        component: Customers.Detail,
      },
      {
        path: '/:id/:businessId/progress',
        component: Customers.Progress,
      },
    ],
  },
];

const wrappedRoutes = map(
  flatMap(routes, (route) => {
    if (route.routes) {
      return map(route.routes, (subRoute) => ({
        ...subRoute,
        path: route.path + subRoute.path,
        exact: subRoute.path === '/',
        hasPrivateLayoutWrapper:
          subRoute.hasPrivateLayoutWrapper !== undefined
            ? subRoute.hasPrivateLayoutWrapper
            : route.hasPrivateLayoutWrapper,
        component: subRoute.component || route.component,
      }));
    }
    return route;
  }),
  (route) => <PrivateRoute {...route} key={route.path} />,
);

function PrivateRoute({
  component: Component,
  title,
  hasPrivateLayoutWrapper,
  roles,
  ...rest
}) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const Wrapper = hasPrivateLayoutWrapper ? PrivateLayoutPage : Fragment;
  return checkRole(roles, role) ? (
    <Route
      {...rest}
      render={
        (props) =>
          isAuthenticated ? (
            <Wrapper>
              <Component />
            </Wrapper>
          ) : (
            <Redirect
              to={{
                pathname: '/sign-in',
                // eslint-disable-next-line
                state: { from: props.location },
              }}
            />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  ) : (
    <Route render={null} />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  title: PropTypes.string,
  hasPrivateLayoutWrapper: PropTypes.bool,
  roles: PropTypes.array,
};

const PrivateRoutes = () => wrappedRoutes;

export default PrivateRoutes;
