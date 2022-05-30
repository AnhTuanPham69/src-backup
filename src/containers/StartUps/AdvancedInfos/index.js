import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Tabs, Select } from 'antd';
import { useParams } from 'react-router';
import {
  getAssessments,
  getAssessmentsQuestion,
  getInfoPayments,
} from '@redux/assessments/actions';
import Card from '../components/Card';
import QuestionAnswers from '../components/QuestionAnswers';
import PaymentInfo from '../components/PaymentInfo';
import UserInfo from '../components/UserInfo';
import { AdvancedInfoWrapper } from './styles';
import QuestionsDetail from '../components/QuestionsDetail';

const { TabPane } = Tabs;
const { Option } = Select;

const AdvancedInfos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = useSelector((state) => state?.startUps?.currentData);
  const assessments = useSelector((state) => state.assessments.assessments);
  const orderInfo = useSelector(
    (state) => state?.assessments?.infoOrder?.items,
  );
  const questionnaires = useSelector(
    (state) => state.assessments.questionnaires,
  );
  const assessmentsId = assessments?.id;
  const loading = useSelector((state) => state.assessments.loading);
  const [currentTab, setTabKey] = useState('');
  const [currentOrder, setCurrentOrder] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    if (id)
      dispatch(
        getAssessments({
          id,
        }),
      );
  }, [id]);

  useEffect(() => {
    if (assessmentsId)
      dispatch(
        getAssessmentsQuestion({
          id: assessmentsId,
        }),
      );
  }, [assessmentsId]);

  useEffect(() => {
    setDetailLoading(true);

    dispatch(
      getInfoPayments({
        id,
        orderBy: 'createdAt:DESC',
      }),
    ).then((response) => {
      setDetailLoading(false);
      if (response?.payload?.items?.[0]?.id && !currentOrder?.id)
        setCurrentOrder(response?.payload?.items?.[0]);
    });
  }, [id, currentOrder]);

  useEffect(() => {
    return () => {
      setCurrentOrder(null)
    }
  }, [])

  const handleClickOpen = () => {
    setTabKey('questionnaire');
  };

  const handleClickBack = () => {
    setTabKey('info');
  };

  const handleChange = (value) => {
    setCurrentOrder(orderInfo?.find((item) => item.id === value));
    setDetailLoading(true);
    const timeout = setTimeout(() => {
      setDetailLoading(false);
      clearTimeout(timeout);
    }, 500);
  };

  return (
    <AdvancedInfoWrapper>
      <Tabs className="detail-tabs" activeKey={currentTab || 'info'}>
        <TabPane tab={i18next.t('startUps.info')} key="info">
          <Row gutter={16}>
            <Col span={15}>
              <Card title={i18next.t('startUps.startupQuestionnaireAnswer')}>
                <QuestionAnswers
                  loading={loading}
                  answers={assessments}
                  questionnaires={questionnaires}
                  name={`${currentUser?.user?.firstName || ''} ${
                    currentUser?.user?.lastName || ''
                  } - Questionnaire.pdf`}
                  handleClickOpen={handleClickOpen}
                />
              </Card>
              <Card
                title={i18next.t('startUps.paymentInfo')}
                {...((currentOrder) && {
                  extra: (
                    <Select
                      defaultValue={currentOrder?.id || orderInfo?.[0]?.id}
                      className="phase-selector"
                      onChange={handleChange}
                    >
                      {orderInfo?.map((data) => (
                        <Option value={data.id}>
                          {data?.programPlanSubscriptionData?.name}
                        </Option>
                      ))}
                    </Select>
                  ),
                })}
              >
                <PaymentInfo
                  monthlyPayment={
                    currentOrder?.programPlanSubscriptionData?.price
                  }
                  unit={currentOrder?.programPlanSubscriptionData?.unit}
                  totalMonth={
                    currentOrder?.programPlanSubscriptionData?.quantity
                  }
                  nextBilling={currentOrder?.subscription?.nextBillingTime}
                  finalPayment={currentOrder?.subscription?.finalPaymentTime}
                  firstPayment={currentOrder?.subscription?.createdAt}
                  status={currentOrder?.status}
                  phaseName={
                    currentOrder?.programPlanSubscriptionData?.planCode
                  }
                  loading={detailLoading}
                />
              </Card>
            </Col>
            <Col span={9}>
              <Card title={i18next.t('startUps.coach')}>
                <UserInfo />
              </Card>
              <Card title={i18next.t('startUps.serviceProvider')}>
                <UserInfo />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab={i18next.t('startUps.detail')} key="questionnaire">
          <QuestionsDetail
            answers={questionnaires}
            handleClickBack={handleClickBack}
            title={`${currentUser?.user?.firstName} ${currentUser?.user?.lastName} - Questionnaire.pdf`}
          />
        </TabPane>
      </Tabs>
    </AdvancedInfoWrapper>
  );
};

export default AdvancedInfos;
