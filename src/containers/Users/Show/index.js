import React, { useEffect } from 'react';
import InfoCard from '@enouvo/uikit/src/commons/InfoCard';
import { Row, Col, Tabs } from 'antd';
import { useHistory, useParams } from 'react-router';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdUsers } from '@redux/users/actions';
import { getByIdBusinesses } from '@redux/businesses/actions';
import { FORMAT_DATE, USER_ROLE } from '../../../configs/localData';
import { UsersShowWrapper } from './styles';
import CoachSummary from '../CoachSummary';
import Activities from '../Activities';
import ServiceSummary from '../ServiceSummary';
import EmptyPage from '../components/Empty';

const userTabs = [
  {
    role: ['coach'],
    key: 'coachSummary',
    tabName: 'Summary',
    component: CoachSummary,
  },
  {
    role: ['provider'],
    key: 'serviceSummary',
    tabName: 'Summary',
    component: ServiceSummary,
  },
  {
    role: ['coach', 'provider'],
    key: 'activities',
    tabName: 'Activities',
    component: Activities,
  },
  {
    role: ['startup', 'admin', 'superadmin'],
    key: 'empty',
    tabName: '',
    component: EmptyPage,
  },
];

const UsersShow = () => {
  const { TabPane } = Tabs;

  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentData);
  const currentBusiness = useSelector((state) => state.businesses.currentData);

  const handleClickBack = () => {
    history.push(`/users`);
  };

  const onChange = (key) => {
    history.push(`/users/${params.id}/details/${key}`);
  };

  const handleClickEdit = () => {
    history.push(`#users/${params.id}/edit`);
  };

  useEffect(() => {
    dispatch(
      getByIdUsers({
        data: {
          id: params?.id,
        },
        options: {
          isRequestApi: true,
        },
      }),
    );
  }, [params?.id]);

  useEffect(() => {
    if (currentUser?.businessId) {
      dispatch(
        getByIdBusinesses({
          data: {
            id: currentUser?.businessId,
          },
          options: {
            isRequestApi: true,
          },
        }),
      );
    }
  }, [currentUser?.businessId]);

  return (
    <UsersShowWrapper>
      <h3 className="header">
        {USER_ROLE.find((role) => role.value === currentUser?.role?.name)?.text}
      </h3>
      <Row gutter={16}>
        <Col span={8}>
          <InfoCard
            handleClickEdit={handleClickEdit}
            name={`${currentUser?.firstName || ''} ${
              currentUser?.lastName || ''
            }`}
            image={currentUser?.avatar}
            generalPhoneNo={currentUser?.phone}
            generalMail={currentUser?.email}
            generalDate={moment(currentUser?.createAt).format(FORMAT_DATE)}
            hasBack
            handleClickBack={handleClickBack}
            userRole={
              USER_ROLE.find((role) => role.value === currentUser?.role?.name)
                ?.text
            }
            businessName={
              USER_ROLE.find((role) => role.value === currentUser?.role?.name)
                ?.value === ('coach' || 'admin')
                ? currentBusiness?.businessName || 'No Data'
                : null
            }
            isShowBusiness
            privateMail={currentUser?.privateEmail}
            privatePhoneNo={currentUser?.privatePhone}
            sectorName={currentUser?.sector?.toString()}
            linkedinLink={currentUser?.linkedinLink}
            twitterLink={currentUser?.twitterLink}
            facebookLink={currentUser?.facebookLink}
          />
        </Col>
        <Col span={16}>
          <Tabs
            className="detail-tabs"
            defaultActiveKey={params.model}
            onChange={onChange}
          >
            {userTabs.map(
              (data) =>
                data.role.includes(currentUser?.role?.name) && (
                  <TabPane tab={data.tabName} key={data.key}>
                    <data.component />
                  </TabPane>
                ),
            )}
          </Tabs>
        </Col>
      </Row>
    </UsersShowWrapper>
  );
};

export default UsersShow;
