import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, clientResourcesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, clientResourcesActions);

export default slice.reducer;
