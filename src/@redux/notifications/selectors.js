import { createSelector } from 'reselect';

const getUnreadCount = (state) => state?.notifications?.unreadCount;

export const getUnSeenTotal = createSelector(
  [getUnreadCount],
  (unreadCount) => unreadCount,
);
