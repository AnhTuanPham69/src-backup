import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, todosActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, todosActions);

export default slice.reducer;
