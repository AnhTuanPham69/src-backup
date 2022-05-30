import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import Modal from 'components/common/Modal';
import Drawer from 'components/common/Drawer';
import CmsTemplates from 'pages/CmsTemplates';
import CmsLogs from 'pages/CmsLogs';
import Cms from 'pages/CMS';
import Users from 'pages/Users';
import Programs from 'pages/Programs';
import Weeks from 'pages/Weeks';
import Gets from 'pages/Gets';
import ProgramPhases from 'pages/ProgramPhases';
import Todos from 'pages/Todos';
import SubscriptionPlans from 'pages/SubscriptionPlans';
import TodoSteps from 'pages/TodoSteps';
import Supports from 'pages/Supports';
import Learns from 'pages/Learns';
import StartUps from 'pages/StartUps';
import ServiceTypes from 'pages/ServiceTypes';
import Onboardings from 'pages/Onboardings';
import QuestionnairePages from 'pages/QuestionnairePages';
import Payouts from 'pages/Payouts';
import { CustomModalWrapper } from 'containers/Programs/Detail/styles';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const modalRoutes = [
  {
    path: '/questionnairePages',
    routes: [
      {
        path: '/create',
        component: QuestionnairePages.Create,
        container: Drawer,
        width: 800,
      },
      {
        path: '/edit',
        component: QuestionnairePages.Edit,
        container: Drawer,
        width: 800,
      },
    ],
  },
  {
    path: '/onboardings',
    routes: [
      {
        path: '/create',
        component: Onboardings.Create,
        container: Drawer,
      },
      {
        path: '/edit',
        component: Onboardings.Edit,
        container: Drawer,
      },
    ],
  },
  {
    path: '/serviceTypes',
    routes: [
      {
        path: '/create',
        component: ServiceTypes.Create,
        container: Drawer,
      },
      {
        path: '/edit',
        component: ServiceTypes.Edit,
        container: Drawer,
      },
    ],
  },
  {
    path: '/startUps',
    routes: [
      {
        path: '/edit',
        component: StartUps.Edit,
        width: 900,
        container: Drawer,
      },
    ],
  },
  {
    path: '/users',
    routes: [
      {
        path: '/show',
        component: Users.View,
      },
      {
        path: '/edit',
        component: Users.Edit,
        width: 900,
        container: Drawer,
      },
      {
        path: '/create',
        component: Users.Create,
        container: Drawer,
      },
    ],
  },
  {
    path: '/periods',
    routes: [
      {
        path: '/create',
        component: Weeks.Create,
      },
      {
        path: '/edit',
        component: Weeks.Edit,
      },
    ],
  },
  {
    path: '/subscriptionPlans',
    routes: [
      {
        path: '/create',
        component: SubscriptionPlans.Create,
      },
    ],
  },
  {
    path: '/cmsTemplates',
    routes: [
      {
        path: '/create',
        component: CmsTemplates.Create,
      },
      {
        path: '/edit',
        component: CmsTemplates.Edit,
      },
    ],
  },
  {
    path: '/programPhases',
    routes: [
      {
        path: '/create',
        component: ProgramPhases.Create,
        width: 1000,
      },
      {
        path: '/edit',
        component: ProgramPhases.Edit,
        width: 1000,
      },
    ],
  },
  {
    path: '/programs',
    routes: [
      {
        path: '/create',
        component: Programs.Create,
        width: 1000,
      },
      {
        path: '/edit',
        component: Programs.Edit,
        width: 1000,
        container: Modal,
      },
      {
        path: '/',
        component: Programs.Detail,
        width: 1000,
        container: CustomModalWrapper,
      },
    ],
  },
  {
    path: '/cmsLogs',
    routes: [
      {
        path: '/create',
        component: CmsLogs.Create,
      },
      {
        path: '/edit',
        component: CmsLogs.Edit,
      },
    ],
  },

  {
    path: '/cms',
    routes: [
      {
        path: '/create',
        component: Cms.Create,
      },
      {
        path: '/edit',
        component: Cms.Edit,
      },
    ],
  },
  {
    path: '/todos',
    routes: [
      {
        path: '/create',
        component: Todos.Create,
        container: Drawer,
      },
      {
        path: '/edit',
        component: Todos.Edit,
        container: Drawer,
      },
    ],
  },
  {
    path: '/gets',
    routes: [
      {
        path: '/create',
        component: Gets.Create,
        container: Drawer,
      },
      {
        path: '/edit',
        component: Gets.Edit,
        container: Drawer,
      },
    ],
  },
  {
    path: '/learns',
    routes: [
      {
        path: '/create',
        component: Learns.Create,
        container: Drawer,
      },
      {
        path: '/edit',
        component: Learns.Edit,
        container: Drawer,
      },
    ],
  },
  {
    path: '/todoSteps',
    routes: [
      {
        path: '/list',
        component: TodoSteps.List,
        container: Drawer,
        hideTitle: true,
      },
      {
        path: '/create',
        component: TodoSteps.Create,
      },
      {
        path: '/edit',
        component: TodoSteps.Edit,
      },
    ],
  },
  {
    path: '/supports',
    routes: [
      {
        path: '/',
        component: Supports.Show,
        container: Drawer,
      },
    ],
  },
  {
    path: '/payouts',
    routes: [
      {
        path: '/create',
        component: Payouts.Create,
        container: Drawer,
      },
    ],
  },
];

let modal = null;

const getModalRoute = (currentModal) => {
  const modalRoute =
    currentModal &&
    modalRoutes.find((route) => currentModal.search(route.path) > -1);
  if (modalRoute) {
    return modalRoute.routes.find(
      (route) => currentModal.indexOf(route.path) > -1,
    );
  }
  return modalRoute;
};

const ModalRoute = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.hash && location.hash !== '#') {
      const modelRoute = location.hash.replace('#', '/');
      modal = getModalRoute(modelRoute);
    }
    // eslint-disable-next-line
  }, [location.hash]);
  const closeModal = () => {
    history.replace(`${location.pathname}${location.search}`);
  };

  const modelRoute = location.hash.replace('#', '/');
  modal = getModalRoute(modelRoute) || modal;
  const modalOptions = modal && modal?.modalOptions ? modal?.modalOptions : {};
  // let Container = Modal;

  let Container = Modal;
  if (modal?.container) Container = modal.container;

  return (
    <Container
      {...modalOptions}
      visible={!!(location.hash && location.hash !== '#')}
      footer={null}
      onCancel={closeModal}
      onClose={closeModal}
      {...(modal?.width && {
        width: modal.width,
      })}
      hideTitle={modal?.hideTitle}
    >
      {modal?.hideTitle && (
        <Button className="custom-close-btn" onClick={closeModal}>
          <CloseOutlined />
        </Button>
      )}

      {modal?.component && (
        <modal.component
          showModal
          visibleModal={!!(location.hash && location.hash !== '#')}
          location={location}
        />
      )}
    </Container>
  );
};

ModalRoute.propTypes = {
  location: PropTypes.object,
  currentModal: PropTypes.string,
  closeModal: PropTypes.func,
  showModal: PropTypes.func,
  replaceRoute: PropTypes.func,
};

export default ModalRoute;
