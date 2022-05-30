import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, rolesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, rolesActions);

export default slice.reducer;
