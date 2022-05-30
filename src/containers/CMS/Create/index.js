import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { cleanCMSData } from '@redux/cms/actions';
import { getAllPrograms } from '@redux/programs/actions';
import Form from '../components/Form';

const CmsCreate = (props) => {
  const dispatch = useCallback(useDispatch(), []);
  useEffect(
    () => () => {
      dispatch(cleanCMSData());
    },
    [dispatch],
  );
  useEffect(() => {
    dispatch(getAllPrograms({
      data: {
        limit: 100,
        page: 1,
      },
      options: {
        isRefresh: true,
      },
    }));
  }, [])
  return <Form {...props} />;
};

CmsCreate.propTypes = {};

export default CmsCreate;
