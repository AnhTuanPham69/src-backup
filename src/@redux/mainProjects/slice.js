import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, mainProjectsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, mainProjectsActions);

export default slice.reducer;
