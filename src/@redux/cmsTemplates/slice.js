import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, cmsTemplatesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, cmsTemplatesActions);

export default slice.reducer;
