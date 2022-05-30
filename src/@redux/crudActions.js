// import crud action
import { projectThemesActions as projectThemes } from './projectThemes/actions';
import { projectTemplatesActions as projectTemplates } from './projectTemplates/actions';
import { mainProjectTemplatesActions as mainProjectTemplates } from './mainProjectTemplates/actions';
import { mainProjectsActions as mainProjects } from './mainProjects/actions';
import { componentTemplatesActions as componentTemplates } from './componentTemplates/actions';
import { cmsTemplatesActions as cmsTemplates } from './cmsTemplates/actions';
import { cmsLogsActions as cmsLogs } from './cmsLogs/actions';
import { cmsActions as cms } from './cms/actions';
import { technicalCategoriesActions as technicalCategories } from './technicalCategories/actions';
import { categoriesActions as categories } from './categories/actions';
import { usersActions as users } from './users/actions';
import { notificationsActions as notifications } from './notifications/actions';
import { programsActions as programs } from './programs/actions';
import { periodsActions as periods } from './periods/actions';
import { programPhasesActions as programPhases } from './programPhases/actions';
import { learnsActions as learns } from './learns/actions';
import { getsActions as gets } from './gets/actions';
import { serviceTypesActions as serviceTypes } from './serviceTypes/actions'; 
import { todosActions as todos } from './todos/actions';
import { todoStepsActions as todoSteps } from './todoSteps/actions';
import { startUpsActions as startUps } from './startUps/actions';
import { sectorsActions as sectors } from './sectors/actions';
import { activitiesActions as activities } from './activities/actions';
import { resourcesActions as resources } from './resources/actions';
import { rolesActions as roles } from './roles/actions';
import { ordersActions as orders } from './orders/actions';
import { subscriptionPlansActions as subscriptionPlans } from './subscriptionPlans/actions';
import { servicesActions as services } from './services/actions';
import { questionnairesActions as questionnaires } from './questionnaires/actions';
import { clientResourcesActions as clientResources } from './clientResources/actions';
import { commentsActions as comments } from './comments/actions';
import { supportsActions as supports } from './supports/actions';
import { onboardingsActions as onboardings } from './onboardings/actions';
import { questionnairePagesActions as questionnairePages } from './questionnairePages/actions';
import { businessesActions as businesses } from './businesses/actions';
import { customersActions as customers } from './customers/actions';
import { payoutsActions as payouts } from './payouts/actions';

export default {
  // actions here
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
  programPhases,
  learns,
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
  clientResources,
  comments,
  supports,
  onboardings,
  questionnairePages,
  businesses,
  customers,
  payouts,
};
