import React from 'react';
import Create from '../../rest/Create';
import CreateForm from '../components/CreateForm';

const QuestionnaireCreate = props => (
  <Create
    {...props}
    resource="questionnairePages"
    defaultOptions={{
      fetchAllAfterSuccess: true,
      customApiResource: 'questionnaire-pages',
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
    <CreateForm />
  </Create>
);

QuestionnaireCreate.propTypes = {};

export default QuestionnaireCreate;
