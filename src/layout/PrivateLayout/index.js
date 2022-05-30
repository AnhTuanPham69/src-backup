import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@redux/auth/actions';
import { useLocation, useHistory } from 'react-router';
import {
  PicCenterOutlined,
  TeamOutlined,
  ApartmentOutlined,
  ReconciliationOutlined,
  AuditOutlined,
} from '@ant-design/icons';
import PrivateLayout from '@enouvo/uikit/src/layouts/PrivateLayout';
import PropTypes from 'prop-types';
import {
  DashboardIcon,
  PuzzleIcon,
  RequestIcon,
  RocketIcon,
  WalletIcon,
  SettingIcon,
} from 'components/common/SVGIcon';
import { pageLoadingSelector } from '@redux/loading/selectors';
import crudSelectors from '@redux/crudSelectors';
import {
  getAllNotifications,
  readNoti,
  getUnreadCount,
} from '@redux/notifications/actions';
import { getUnSeenTotal } from '@redux/notifications/selectors';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { updateLocale } from '@redux/users/actions';
import { PrivateLayoutWrapper } from './styles';
import ExtraActions from './ExtraActions';

const listMenu = [
  {
    key: 'dashboard',
    title: 'UIkit.sideBar.dashboard',
    url: '/',
    icon: DashboardIcon,
  },
  {
    key: 'businesses',
    title: 'UIkit.sideBar.organization',
    url: '/businesses',
    icon: ApartmentOutlined,
  },
  {
    key: 'customers',
    title: 'UIkit.sideBar.customer',
    url: '/customers',
    icon: PuzzleIcon,
  },
  {
    key: 'programs',
    title: 'UIkit.sideBar.course',
    url: '/programs',
    icon: RocketIcon,
  },
  {
    key: 'orders',
    title: 'UIkit.sideBar.order',
    url: '/orders',
    icon: AuditOutlined,
    noFill: true,
  },
  {
    key: 'payouts',
    title: 'UIkit.sideBar.payout',
    url: '/payouts',
    icon: WalletIcon,
    noFill: true,
  },
  {
    key: 'users',
    title: 'UIkit.sideBar.user',
    url: '/users',
    icon: TeamOutlined,
  },
  {
    key: 'supports',
    title: 'UIkit.sideBar.supportRequest',
    url: '/supports',
    icon: RequestIcon,
    noFill: true,
  },
  {
    key: 'reports',
    title: 'UIkit.sideBar.report',
    url: '/reports',
    icon: ReconciliationOutlined,
  },
  {
    key: 'cms',
    title: 'UIkit.sideBar.cms',
    url: '/cms',
    icon: PicCenterOutlined,
  },
  {
    key: 'settings',
    title: 'UIkit.sideBar.setting',
    url: '/settings/subscription-plans',
    icon: SettingIcon,
    noFill: true,
  },
];

const getCurrentTab = (str, key) => {
  const paths = str && str.split('/');
  return paths && paths[key];
};

const PrivateLayoutPage = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const isLoadedLocale = useRef(false);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const url = getCurrentTab(location.pathname, 1);
  const user = useSelector((state) => state.auth.data);
  const loading = useSelector(crudSelectors.notifications.getLoading);
  const resourceData = useSelector(crudSelectors.notifications.getDataArr);
  const enabledLoadMore = useSelector(
    crudSelectors.notifications.enabledLoadMore,
  );
  const pageLoading = useSelector(pageLoadingSelector);
  const unSeenTotal = useSelector(getUnSeenTotal);

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng');
    if (lang && !isLoadedLocale.current) {
      i18n.changeLanguage(lang);
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
      dispatch(
        updateLocale({
          locale: lang,
          timezone: timeZone,
        }),
      );
      isLoadedLocale.current = true;
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const retrieveList = (filterData = { filter: {} }, isRefresh) => {
    dispatch(
      getAllNotifications({
        data: {
          orderBy: 'createdAt:DESC',
          ...filterData,
        },
        options: { isRefresh },
      }),
    );
  };

  useEffect(() => {
    retrieveList(
      {
        limit: 10,
        offset: 0,
      },
      true,
    );
    dispatch(getUnreadCount());
  }, []);

  const handleClickCard = (data) => {
    !data?.isSeen &&
      dispatch(
        readNoti({
          data: {
            id: data.id,
          },
        }),
      );
    history.push(
      `/customers/${data.customerId}/${data.businessId}/progress/${
        data.userProgramId
      }/program-details/${data.programPhasePeriodId}/${
        data.conceptId ? 'concepts' : 'todos'
      }/${data.conceptId || data.toDoId}/details`,
    );
  };

  return (
    <PrivateLayoutWrapper>
      {pageLoading && (
        <div className="page-loading">
          <Spin size="large" tip="Loading..." />
        </div>
      )}
      <PrivateLayout
        userName={`${user?.firstName || ''} ${user?.lastName || ''}`}
        roleName={user?.email}
        avt={user.avatar}
        menus={listMenu}
        selectedKey={url || 'dashboard'}
        handleLogout={handleLogout}
        enabledLoadMore={enabledLoadMore}
        loading={loading}
        retrieveList={retrieveList}
        resourceData={resourceData}
        totalNoti={unSeenTotal}
        handleClickCard={handleClickCard}
        extraHeaderActions={<ExtraActions />}
      >
        {children}
      </PrivateLayout>
    </PrivateLayoutWrapper>
  );
};

PrivateLayoutPage.propTypes = {
  children: PropTypes.node,
};

export default PrivateLayoutPage;
