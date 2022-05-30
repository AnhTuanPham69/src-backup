import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, resourcesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, resourcesActions);

export default slice.reducer;
