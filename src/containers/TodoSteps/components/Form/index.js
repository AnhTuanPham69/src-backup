import React from 'react';
import { Select } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';

const TodoStepsForm = () => {
  const handleKeyPress = e => e.keyCode === 13 ? e.preventDefault() : '';
  return (
    <div>
      <RestInputItem
        source="id"
        style={{display: 'none'}}
      />
      <RestInputItem
        required
        source="title"
        header="weeks.todoSteps.title"
        placeholder="weeks.todoSteps.placeholder.name"
      />
      <RestInputItem
        required
        source="options" 
        header="weeks.todoSteps.options"
        placeholder="weeks.todoSteps.optionsPlaceholder"
        ContentComponent={Select}
        mode="tags"
        open={false}
        ruleType="array"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

TodoStepsForm.propTypes = {}

export default TodoStepsForm;
