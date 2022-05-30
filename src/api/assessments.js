import { get } from './utils';

export async function getAssessmentsApi(id) {
  return get(`/startup-progresses/${id}/info/assessments`);
}

export async function getAssessmentsQuestionApi(id) {
  return get(`/assessments/${id}/questions`);
}

export async function getQuestionnairesApi(id) {
  return get(`/assessments/${id}`);
}

export async function downloadQuestionnaireApi(id) {
  return get(`/assessments/${id}/pdf`);
}

export async function getInfoPaymentsApi (id, orderBy) {
  return get(`/startup-progresses/${id}/info/payments`, {
    orderBy,
  });
}