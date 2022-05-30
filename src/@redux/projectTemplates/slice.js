import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, projectTemplatesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, projectTemplatesActions);

export default slice.reducer;
