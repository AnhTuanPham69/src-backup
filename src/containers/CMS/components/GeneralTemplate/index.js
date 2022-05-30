import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Carousel, Popconfirm } from 'antd';
import SCREENS from 'CMSComponents/screens';
import i18next from 'i18next';
import FormItemUI from 'CMSComponents/components/FormItem';
import GeneralTemplateWrapper from './styles';

const GeneralTemplate = ({ form, onClick }) => {
  const settings = {
    // centerMode: true,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    // centerPadding: '60px',
  };
  const curentTemplate = useSelector(
    (state) => state.cms.editorData.content?.template,
  );
  return (
    <GeneralTemplateWrapper>
      <Carousel {...settings}>
        {SCREENS.map((e, index) => (
          <Popconfirm
            key={String(index)}
            title={i18next.t('cms.selectTemplate')}
            onConfirm={() => onClick(e)}
          >
            <div role="presentation">
              <div className="item">
                {e.title}
                {curentTemplate === e.id ? (
                  <label className="selected">
                    {i18next.t('cms.currentSelectedTemplate')}
                  </label>
                ) : null}
              </div>
            </div>
          </Popconfirm>
        ))}
      </Carousel>
      <div style={{ display: 'none' }}>
        <FormItemUI form={form} source="content.template" />
      </div>
    </GeneralTemplateWrapper>
  );
};
GeneralTemplate.propTypes = {
  onClick: PropTypes.func,
  form: PropTypes.object,
};

export default GeneralTemplate;
