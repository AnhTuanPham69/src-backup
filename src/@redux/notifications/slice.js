import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, notificationsActions, getUnreadCount, readNoti } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, notificationsActions, {
  [getUnreadCount.fulfilled]: (state, { payload }) => {
    state.unreadCount = payload;
  },
  [readNoti.fulfilled]: (state, { payload }) => {
    state.unreadCount = (state.unreadCount || 1) - 1;
    state.data = {
      ...state.data,
      [payload.id]: {
        ...state.data?.[payload.id],
        isSeen: true,
      },
    }
  },
});

export default slice.reducer;
