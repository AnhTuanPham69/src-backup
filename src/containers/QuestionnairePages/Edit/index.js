import React from 'react';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const QuestionnaireEdit = props => (
  <Edit
    {...props}
    resource="questionnairePages"
    defaultOptions={{
      fetchAllAfterSuccess: true,
      customApiResource: 'questionnaire-pages',
      formatOnSuccess: values => ({
        ...values,
        questions: values?.questionnaires?.map(question => ({
          ...question,
          options: Object.values(question.options || {}),
        })),
      }),
    }}
    formatOnSubmit={({ questions, ...value }) => ({
      ...value,
      questions: questions.map(question => ({
        ...question,
        options: (question.options || []).reduce((option, key, index) => ({
          ...option,
          [index + 1]: key,
        }), {}),
      })),
    })}
  >
    <Form />
  </Edit>
);

QuestionnaireEdit.propTypes = {};

export default QuestionnaireEdit;
