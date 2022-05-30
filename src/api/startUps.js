import { get, put } from './utils';

export const getCurrentProgramsApi = id => get(`/startup-progresses/${id}/current-programs`);

export const getProgramPhasesApi = ({ id, ...params }) => get(`/startup-progresses/${id}/program-phases`, params);

export const updateStartUpApi = ({ userId, ...params }) => put(`/users/${userId}`, params);