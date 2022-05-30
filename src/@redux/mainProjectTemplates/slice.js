import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, mainProjectTemplatesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, mainProjectTemplatesActions);

export default slice.reducer;
