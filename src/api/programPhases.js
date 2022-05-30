import { post, get } from './utils';

export const generateCMSApi = data => {
  return post('/program-phases/cms', data);
}

export const getSelectedPhasesApi = () => {
  return get('/program-phases', {
    limit: 100,
    filter: JSON.stringify({
      isAddedCms: {
        $eq: true,
      },
    }),
  })
}