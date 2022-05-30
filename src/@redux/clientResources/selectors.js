import { createSelector } from 'reselect';
import { isImageFile } from '@enouvo/uikit/src/utils/fileUtils';

const getClientResources = (state) => state?.clientResources?.data;

export const getClientResourcesObjSelectors = createSelector(
  [getClientResources],
  (clientResources) => {
    const clientResourcesArr = Object.values(clientResources);
    const images = clientResourcesArr?.filter((resource) =>
      isImageFile(resource?.name || resource?.url),
    );
    const files = clientResourcesArr?.filter(
      (resource) => !isImageFile(resource?.name || resource?.url),
    );
    return {
      images,
      files,
    };
  },
);
