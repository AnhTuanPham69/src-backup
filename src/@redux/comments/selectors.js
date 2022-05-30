import moment from 'moment';
import { createSelector } from 'reselect';

const getCommentsData = (state) => state.comments.data;

const getCommentsIds = (state) => state.comments.ids;

export const commentsRepliesSelectors = createSelector(
  [getCommentsData, getCommentsIds],
  (commentsData, commentsIds) => {
    const listComments = commentsIds.map((id) => commentsData[id]);
    return listComments
      .filter((comment) => !comment.refCommentId)
      .map((comment) => ({
        id: comment.id,
        name: `${comment?.user?.firstName || ''} ${
          comment?.user?.lastName || ''
        }`,
        role: comment?.user?.role?.name,
        time: moment(comment.createdAt).format('MMM D, YYYY HH:mm'),
        comment: comment.message,
        totalReply: listComments.filter(
          (reply) => reply.refCommentId && reply.refCommentId === comment.id,
        ).length,
        replies: listComments
          .filter(
            (reply) => reply.refCommentId && reply.refCommentId === comment.id,
          )
          .map((reply) => ({
            id: reply.id,
            name: `${reply?.user?.firstName || ''} ${
              reply?.user?.lastName || ''
            }`,
            role: reply?.user?.role?.name,
            time: moment(reply.createdAt).format('MMM D, YYYY HH:mm'),
            comment: reply.message,
            avatar: reply?.user?.avatar,
          })),
        avatar: comment?.user?.avatar,
      }));
  },
);
