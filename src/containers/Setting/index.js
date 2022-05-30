import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import i18next from 'i18next';
import PageTitle from 'components/common/PageTitle';
import { useHistory, useParams } from 'react-router';
import ServiceTypes from 'containers/ServiceTypes/List';
import Onboardings from 'containers/Onboardings/List';
import QuestionnairePages from 'containers/QuestionnairePages/List';
import SubscriptionPlans from 'containers/SubscriptionPlans/List'
import SettingStyle from './styles';

const { TabPane } = Tabs;

const TABS = [
  {
    key: 'subscription-plans',
    text: 'tabs.subscriptionPlans',
    url: '/subscription-plans',
    component: SubscriptionPlans,
  },
  {
    key: 'service-types',
    text: 'tabs.serviceTypes',
    url: '/service-types',
    component: ServiceTypes,
  },
  {
    key: 'onboardings',
    text: 'tabs.onboardings',
    url: '/onboardings',
    component: Onboardings,
  },
  {
    key: 'questionnaire-pages',
    text: 'tabs.questionnairePages',
    url: '/questionnaire-pages',
    component: QuestionnairePages,
  },
];

const Settings = ({ ...props }) => {
  const history = useHistory();
  const params = useParams();
  const onChange = (key) => {
    history.push(`/settings/${key}`);
  };
  
  return (
    <SettingStyle>
      <div className="page-header">
        <PageTitle>{i18next.t('settings.header')}</PageTitle>
        {/* <Button type="primary" onClick={gotoCreatePage}>
          {i18next.t('button.create')}
        </Button> */}
      </div>
      <Tabs
        defaultActiveKey={params.model || 'rooms'}
        onChange={onChange}
      >
        {TABS.map((tab) => (
          <TabPane tab={i18next.t(tab.text)} key={tab.key}>
            <tab.component
              hasCreate={false}
              hasExport={false}
              hasSearch={false}
              rootPath="/settings"
              className="tab-component"
              {...props}
            />
          </TabPane>
        ))}
      </Tabs>
    </SettingStyle>
  );
};

Settings.propTypes = {
  match: PropTypes.object,
  redirects: PropTypes.object,
  rootPath: PropTypes.string,
  initCreateData: PropTypes.object,
};

Settings.defaultProps = {
  rootPath: '/settings',
  redirects: {
    edit: 'modal',
    create: 'modal',
  },
  initCreateData: {},
};

export default Settings;
