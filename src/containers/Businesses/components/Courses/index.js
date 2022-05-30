import React from 'react';
import CourseList from 'containers/Programs/List';
import { useParams } from 'react-router';

const Courses = () => {
  const { id } = useParams();

  return(
    <CourseList 
      ExtraHeaderActions={null}
      noCardWrapper
      filter={null}
      businessId={id}
    />
  )
};

export default Courses;