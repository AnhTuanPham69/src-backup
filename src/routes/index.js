import React, { useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '@redux/auth/actions';
import { getUserReport, getStartUpReport } from '@redux/config/actions';
import privateRoutes from './PrivateRoutes';
import publicRoutes from './PublicRoutes';
import RoutesWrapper from './styles';
import ModalRoute from './ModalRoute';
import NotFoundPage from '../containers/404Page';

const Routes = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 1500);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCurrentUser());
      // dispatch(getProgramSummary());
      // dispatch(getStartUpSummary());
      dispatch(getUserReport({
        startDate: moment().startOf('month').format('YYYY-MM-DD'),
        endDate: moment().endOf('month').format('YYYY-MM-DD'),
        groupBy: 'day',
      }));
      dispatch(getStartUpReport({
        startDate: moment().startOf('month').format('YYYY-MM-DD'),
        endDate: moment().endOf('month').format('YYYY-MM-DD'),
        groupBy: 'day',
      }));
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <RoutesWrapper>
      <Router>
        <Switch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          {publicRoutes()}
          {privateRoutes()}
          <NotFoundPage />
        </Switch>
        <ModalRoute />
      </Router>
    </RoutesWrapper>
  );
};

export default Routes;
