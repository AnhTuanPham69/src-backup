import React, { useContext } from 'react';
import { InputNumber, Button, message } from 'antd';
import I18n from 'i18next';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestMultiPhotos from 'components/RestInput/RestMultiPhotos';
import PropTypes from 'prop-types';
import SVGIcon from '../../../../components/common/SVGIcon';

const TodosForm = ({deleteList, setDeleteList}) => {
  const { form } = useContext(RestInputContext);

  const prefix = <SVGIcon type="link" />;
  const suffix = (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(form.getFieldValue('links'));
        message.success(I18n.t('weeks.gets.message'));
      }}
    >
      {I18n.t('weeks.gets.getLinkBtn')}
    </Button>
  );

  return (
    <div>
      <RestInputItem
        required
        source="name"
        header="weeks.todos.name"
        placeholder="weeks.todos.placeholder.name"
      />
      <RestInputItem
        source="rankNumber"
        required
        header="weeks.todos.rankNo"
        ruleType="number"
        ContentComponent={InputNumber}
        placeholder="weeks.todos.placeholder.rankNo"
      />
      <RestInputItem
        source="links"
        format={(data) => data?.[0]}
        header="weeks.todos.link"
        prefix={prefix}
        suffix={suffix}
        placeholder="weeks.todos.placeholder.link"
      />
      <RestMultiPhotos
        deleteList={deleteList}
        setDeleteList={setDeleteList}
        isGetName
        source="resources"
        header="weeks.todos.links"
        accept="image/*, .xls, .doc, .ppt, .pdf, .docx, .pptx"
      />
    </div>
  );
};

TodosForm.propTypes = {
  deleteList: PropTypes.array,
  setDeleteList: PropTypes.func,
}

export default TodosForm;
