import React, { useEffect } from 'react';
import InfoCard from '@enouvo/uikit/src/commons/InfoCard';
import { Row, Col, Tabs } from 'antd';
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import i18next from 'i18next';
import { getByIdStartUps } from '@redux/startUps/actions';

import CustomBreadcrumb from 'components/common/Breadcrumb';
import PageTitle from 'components/common/PageTitle';

import { DetailWrapper } from './styles';
import CurrentPrograms from '../CurrentPrograms';
import AdvancedInfos from '../AdvancedInfos';
import Activities from '../Activities';
import Resources from '../Resources';
import { FORMAT_DATE } from '../../../configs/localData';

const { TabPane } = Tabs;

const Detail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const currentStartUp = useSelector((state) => state.startUps.currentData);

  const BREADCRUMB = [
    {
      title: i18next.t('startUps.name'),
      path: '/startUps',
    },
    {
      title:
        !currentStartUp?.user?.firstName && !currentStartUp?.user?.lastName
          ? currentStartUp?.user?.email
          : `${currentStartUp?.user?.firstName || ''} ${
              currentStartUp?.user?.lastName || ''
            }`,
    },
  ];

  const onChange = (key) => {
    history.push(`/startUps/${params.id}/details/${key}`);
  };

  useEffect(() => {
    dispatch(
      getByIdStartUps({
        data: {
          id: params.id,
        },
        options: {
          isRequestApi: true,
          customApiResource: 'startup-progresses',
        },
      }),
    );
  }, [params.id]);

  const handleClickEdit = () => {
    history.push(`#startUps/${params.id}/edit`);
  };

  return (
    <DetailWrapper>
      <CustomBreadcrumb data={BREADCRUMB} />
      <PageTitle>
        <div className="desc-header">
          {i18next.t('pageHeader.descStartupDetail')}
        </div>
      </PageTitle>

      <Row gutter={16}>
        <Col span={8}>
          <InfoCard
            handleClickEdit={handleClickEdit}
            name={`${currentStartUp?.user?.firstName || ''} ${
              currentStartUp?.user?.lastName || ''
            }`}
            image={currentStartUp?.user?.avatar}
            generalPhoneNo={currentStartUp?.user?.phone}
            generalMail={currentStartUp?.user?.email}
            generalDate={moment(currentStartUp?.user?.createAt).format(
              FORMAT_DATE,
            )}
            groupName={currentStartUp?.user?.companyName}
            privateMail={currentStartUp?.user?.privateEmail}
            privatePhoneNo={currentStartUp?.user?.privatePhone}
            sectorName={currentStartUp?.user?.sector?.toString()}
            linkedinLink={currentStartUp?.user?.linkedinLink}
            twitterLink={currentStartUp?.user?.twitterLink}
            facebookLink={currentStartUp?.user?.facebookLink}
          />
        </Col>
        <Col span={16}>
          <Tabs
            className="detail-tabs"
            defaultActiveKey={params.model || 'programPhase'}
            onChange={onChange}
          >
            <TabPane tab={i18next.t('startUps.currentProgram')} key="programPhase">
              <CurrentPrograms />
            </TabPane>
            <TabPane tab={i18next.t('startUps.resources.title')} key="resource">
              <Resources />
            </TabPane>
            <TabPane tab={i18next.t('startUps.moreInfo')} key="advancedInfo">
              <AdvancedInfos />
            </TabPane>
            <TabPane tab={i18next.t('startUps.tasks')} key="activities">
              <Activities />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </DetailWrapper>
  );
};

export default Detail;
