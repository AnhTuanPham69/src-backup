import React, {useEffect} from 'react';
import { Tabs } from 'antd';
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import PageTitle from 'components/common/PageTitle';
import { getByIdStartUps } from '@redux/startUps/actions';
import { getByIdCustomers , clearCurrentCustomer } from '@redux/customers/actions';
import { DetailWrapper } from './styles';
import CurrentPrograms from '../CurrentPrograms';
import AdvancedInfos from '../AdvancedInfos';
import Activities from '../Activities';
import Resources from '../Resources';

const { TabPane } = Tabs;

const Detail = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const currentCustomer = useSelector((state) => state.customers.currentData);

  const BREADCRUMB = [
    {
      title: i18next.t('customers.header'),
      path: '/customers',
    },
    {
      title:
        !currentCustomer?.user?.firstName && !currentCustomer?.user?.lastName
          ? currentCustomer?.user?.email
          : `${currentCustomer?.user?.firstName || ''} ${
              currentCustomer?.user?.lastName || ''
            }`,
    },
  ];

  useEffect(() => {
    dispatch(
      getByIdCustomers({
        data: {
          id: params?.id,
        },
        options: {
          isRequestApi: true,
        },
      }),
    );
    return () => {
      dispatch(clearCurrentCustomer());
    }
  }, [params?.id]);

  const onChange = (key) => {
    history.push(`/customers/${params.id}/${params.businessId}/progress/${params.progressId}/details/${key}`);
  };


  useEffect(() => {
    dispatch(
      getByIdStartUps({
        data: {
          id: params?.progressId,
        },
        options: {
          isRequestApi: true,
          customApiResource: 'startup-progresses',
        },
      }),
    );
  }, [params?.progressId]);

  return (
    <DetailWrapper>
      <CustomBreadcrumb data={BREADCRUMB} />
      <PageTitle>
        <div className="desc-header">
          {i18next.t('pageHeader.descCustomers')}
        </div>
      </PageTitle>
      <Tabs
        className="detail-tabs"
        defaultActiveKey={params.model || 'programPhase'}
        onChange={onChange}
      >
        <TabPane tab={i18next.t('customers.currentProgram')} key="programPhase">
          <CurrentPrograms />
        </TabPane>
        <TabPane tab={i18next.t('customers.resources')} key="resource">
          <Resources />
        </TabPane>
        <TabPane tab={i18next.t('customers.moreInfo')} key="advancedInfo">
          <AdvancedInfos />
        </TabPane>
        <TabPane tab={i18next.t('customers.tasks')} key="activities">
          <Activities />
        </TabPane>
      </Tabs>
    </DetailWrapper>
  );
};

export default Detail;
