import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, componentTemplatesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, componentTemplatesActions);

export default slice.reducer;
