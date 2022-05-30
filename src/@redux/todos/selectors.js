import { createSelector } from 'reselect';
import { isImageFile } from '@enouvo/uikit/src/utils/fileUtils';

const getResources = (state) => state?.todos?.currentData?.resources;

export const getResourcesObjSelectors = createSelector(
  [getResources],
  (resourcesArr) => {
    const images = resourcesArr?.filter((resource) =>
      isImageFile(resource?.name || resource?.url),
    );
    const files = resourcesArr?.filter(
      (resource) => !isImageFile(resource?.name || resource?.url),
    );
    return {
      images,
      files,
    };
  },
);
