import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import LessonsSection from '@enouvo/uikit/src/sections/LessionsSection';
import I18n from 'i18next';
import { Breadcrumb, Modal } from 'antd';
import CRUDActions from '@redux/crudActions';
import { Link } from 'react-router-dom';
import { getByIdLearns } from '@redux/learns/actions';
import { getAllComments, createComments } from '@redux/comments/actions';
import { commentsRepliesSelectors } from '@redux/comments/selectors';
import { getByIdStartUps } from '@redux/startUps/actions';
import { getByIdPrograms } from '../../../@redux/programs/actions';
import { getByIdProgramPhases } from '../../../@redux/programPhases/actions';
import { PhaseWrapper } from './styles';
import crudSelectors from '../../../@redux/crudSelectors';

const { confirm } = Modal;

const LearnsShow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    programId,
    phaseId,
    conceptId,
    periodId,
    progressId,
    id,
    businessId,
  } = useParams();
  const currentProgram = useSelector((state) => state.programs.currentData);
  const currentConcept = useSelector(crudSelectors.learns.getCurrentData);
  const currentPhase = useSelector((state) => state.programPhases.currentData);
  const currentStartUp = useSelector((state) => state.startUps.currentData);
  const comments = useSelector(commentsRepliesSelectors);
  const totalComment = useSelector((state) => state.comments.total);

  const handleEdit = (id) => () => {
    history.push(
      `/programs/${programId}/phases/${phaseId}/weeks/${periodId}/learns/${id}/details#learns/${id}/edit?disableClear=true`,
    );
  };

  useEffect(() => {
    if (progressId) {
      dispatch(
        getByIdStartUps({
          data: {
            id: progressId,
          },
          options: {
            isRequestApi: true,
            customApiResource: 'startup-progresses',
          },
        }),
      );
    }
  }, [progressId]);

  useEffect(() => {
    if (conceptId && progressId)
      dispatch(
        getAllComments({
          data: {
            page: 1,
            limit: 100,
            filter: {
              userProgramId: {
                $eq: progressId,
              },
              conceptId: {
                $eq: conceptId,
              },
            },
          },
          options: {
            isRefresh: true,
          },
        }),
      );
  }, [conceptId, progressId]);

  const onSubmitTodoComment = ({ refCommentId, message }) => {
    dispatch(
      createComments({
        data: {
          type: 'CONCEPT',
          message,
          ...(refCommentId && { refCommentId }),
          conceptId,
          userProgramId: progressId,
        },
        options: {
          isBack: false,
        },
      }),
    );
  };

  const handleBack = () => {
    if (progressId) {
      history.push(
        `/customers/${id}/${businessId}/progress/${progressId}/program-details/${periodId}/concepts`,
      );
    } else
      history.push(
        `/programs/${programId}/phases/${phaseId}/weeks/${periodId}/learns`,
      );
  };

  const handleDelete = (id, name) => () => {
    confirm({
      title: `${I18n.t('popup.alertDelete')} ${I18n.t('weeks.learns.header')}`,
      content: I18n.t('popup.alertDeleteDes', {
        customMessage: `${name}`,
      }),
      okText: I18n.t('button.ok'),
      cancelText: I18n.t('button.cancel'),
      onOk: () => {
        dispatch(
          CRUDActions.learns.del({
            data: {
              id,
            },
            options: { customApiResource: 'concepts', isBack: false },
          }),
        ).then(() => {
          history.push(
            `/programs/${programId}/phases/${phaseId}/weeks/${periodId}/learns`,
          );
        });
      },
      onCancel: () => {},
    });
  };

  useEffect(() => {
    if (programId)
      dispatch(
        getByIdPrograms({
          data: {
            id: programId,
          },
          options: {
            isRequestApi: true,
          },
        }),
      );
  }, [programId]);

  useEffect(() => {
    if (progressId && conceptId && periodId)
      dispatch(
        getByIdLearns({
          data: {
            id: conceptId,
          },
          options: {
            isRequestApi: true,
            customApiResource: `startup-progresses/${progressId}/current-programs/${periodId}/concepts`,
          },
        }),
      );
  }, [conceptId, progressId, periodId]);

  useEffect(() => {
    if (conceptId && !progressId)
      dispatch(
        CRUDActions.learns.getDataById({
          data: {
            id: conceptId,
          },
          options: {
            isRequestApi: true,
            isRefresh: true,
            customApiResource: 'concepts',
          },
        }),
      );
  }, [conceptId]);

  useEffect(() => {
    if (phaseId)
      dispatch(
        getByIdProgramPhases({
          data: {
            id: phaseId,
          },
          options: {
            isRequestApi: true,
            customApiResource: 'program-phases',
          },
        }),
      );
  }, [phaseId]);

  return (
    <PhaseWrapper>
      <div className="breadcrumb-section">
        {progressId ? (
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/customers">{I18n.t('customers.header')}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                to={`/customers/${id}/${businessId}/progress/${progressId}/details/programPhase`}
              >
                {!currentStartUp?.user?.firstName &&
                !currentStartUp?.user?.lastName
                  ? currentStartUp?.user?.email
                  : `${currentStartUp?.user?.firstName || ''} ${
                      currentStartUp?.user?.lastName || ''
                    }`}
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {I18n.t('weeks.learns.conceptDetails.title')}
            </Breadcrumb.Item>
          </Breadcrumb>
        ) : (
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/programs">{I18n.t('programs.header')}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/programs/${programId}/phases`}>
                {currentProgram?.name}
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/programs">
                {I18n.t('weeks.learns.conceptDetails.title')}
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        )}
      </div>
      <div className="content-section-web">
        <div className="lesson">
          {!progressId && (
            <h3 className="titles">
              {I18n.t('programs.phase', {
                phaseName: currentPhase?.name,
              })}
            </h3>
          )}

          <LessonsSection
            header={progressId && I18n.t('customers.currentLesson')}
            title={currentConcept?.name}
            src={currentConcept?.videoLinks?.[0]}
            description={currentConcept?.description}
            id={currentConcept?.id}
            files={currentConcept?.resources}
            status={!currentConcept?.userProgramConcept}
            rating={currentConcept?.userRating?.rating}
            isAdmin
            hideComment={!progressId}
            totalComment={totalComment || 0}
            comments={comments}
            onSubmitComment={onSubmitTodoComment}
            hasDelete={!progressId}
            hasEdit={!progressId}
            isBack
            handleClickEdit={handleEdit}
            handleClickDelete={handleDelete}
            handleClickBack={handleBack}
          />
        </div>
      </div>
      <div className="content-section-mobile">
        <div className="content-mobile">
          <LessonsSection
            id={currentConcept.id}
            hasDelete
            hasEdit
            files={currentConcept?.resources?.map((file) => ({
              ...file,
              name: file?.url?.replace(
                'https://launch-portal-api-ca-central-1-staging-s3-bucket.s3.ca-central-1.amazonaws.com/',
                '',
              ),
            }))}
            title={currentConcept?.name}
            src={currentConcept?.videoLinks?.[0]}
            description={currentConcept?.description}
            handleClickEdit={handleEdit}
            handleClickDelete={handleDelete}
            handleClickBack={handleBack}
            maxNumberImageToShow={2}
            mobileView
          />
        </div>
      </div>
    </PhaseWrapper>
  );
};

export default LearnsShow;
