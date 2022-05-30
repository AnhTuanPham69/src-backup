import { post, get } from './utils';

export async function readNotiApi(params) {
  return post('/notifications/read', {
    notificationIds: [params],
  });
}

export const getUnreadCountApi = () => get('/notifications/countUnread');