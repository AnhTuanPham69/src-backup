import { post } from './utils';

export async function deleteResourceByIds(ids) {
  return post(`/resources/delete`, {
    ids,
  });
}