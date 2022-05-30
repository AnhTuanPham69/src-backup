import { combineReducers } from 'redux';
import auth from './auth/slice';
import modal from './modal/slice';
import loading from './loading/slice';
// import here
import projectThemes from './projectThemes/slice';
import projectTemplates from './projectTemplates/slice';
import mainProjectTemplates from './mainProjectTemplates/slice';
import mainProjects from './mainProjects/slice';
import componentTemplates from './componentTemplates/slice';
import cmsTemplates from './cmsTemplates/slice';
import cmsLogs from './cmsLogs/slice';
import cms from './cms/slice';
import technicalCategories from './technicalCategories/slice';
import categories from './categories/slice';
import users from './users/slice';
import notifications from './notifications/slice';
import reference from './referenceData/slice';
import config from './config/slice';
import reports from './reports/slice';
import programs from './programs/slice';
import periods from './periods/slice';
import learns from './learns/slice';
import programPhases from './programPhases/slice';
import gets from './gets/slice';
import serviceTypes from './serviceTypes/slice';
import todos from './todos/slice';
import todoSteps from './todoSteps/slice';
import startUps from './startUps/slice';
import sectors from './sectors/slice';
import activities from './activities/slice';
import resources from './resources/slice';
import roles from './roles/slice';
import orders from './orders/slice';
import subscriptionPlans from './subscriptionPlans/slice';
import services from './services/slice';
import questionnaires from './questionnaires/slice';
import assessments from './assessments/slice';
import clientResources from './clientResources/slice';
import comments from './comments/slice';
import supports from './supports/slice';
import onboardings from './onboardings/slice';
import questionnairePages from './questionnairePages/slice';
import businesses from './businesses/slice';
import customers from './customers/slice';
import payouts from './payouts/slice';

export default () =>
  combineReducers({
    auth,
    modal,
    config,
    reference,
    loading,
    // add reducer here
    projectThemes,
    projectTemplates,
    mainProjectTemplates,
    mainProjects,
    componentTemplates,
    cmsTemplates,
    cmsLogs,
    cms,
    technicalCategories,
    categories,
    users,
    notifications,
    programs,
    periods,
    learns,
    programPhases,
    gets,
    serviceTypes,
    todos,
    todoSteps,
    startUps,
    sectors,
    activities,
    resources,
    roles,
    orders,
    subscriptionPlans,
    services,
    questionnaires,
    assessments,
    clientResources,
    comments,
    supports,
    onboardings,
    questionnairePages,
    businesses,
    customers,
    payouts,
    reports,
  });
