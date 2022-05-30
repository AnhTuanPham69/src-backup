import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, commentsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, commentsActions);

export default slice.reducer;
