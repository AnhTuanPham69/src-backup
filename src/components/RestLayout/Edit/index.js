import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { makeBreadCrumbFromPath } from 'utils/tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import RestEditForm from '../RestEditForm';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import PageTitle from '../../common/PageTitle';
import { ContentWrapper } from './styles';

const RestEditComponent = (props) => {
  const { showModal, header, noCardWrapper, breadCrumb, FormWrapper, formWrapperProps, extraHeader, extraHeaderUrl, headerDesc } = props;
  const location = useLocation();
  const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);
  if (header && !showModal) {
    BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title =
      header || BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title;
  }
  const actions = <div />;

  const content = (
    <ContentWrapper style={{ width: '100%' }}>
      <RestEditForm {...props} />
    </ContentWrapper>
  );
  return showModal || noCardWrapper ? (
    content
  ) : (
    <Layout bordered={false} extra={actions}>
      {/* <PageTitle
        extraAction={<h1><CustomBreadcrumb data={breadCrumb || BREADCRUMB_LIST} /></h1>}
      >
        {header}
      </PageTitle>
      <Box>{content}</Box> */}
      {header || (
      <PageTitle>
        <CustomBreadcrumb data={breadCrumb || BREADCRUMB_LIST} />
        {extraHeader && (
          <Link to={extraHeaderUrl} style={{ color: '#000' }}>
            <p style={{margin: 0, padding: 0}}>{extraHeader}</p>
          </Link>
        )}
        {headerDesc && (
          <div className="desc-header">{i18next.t(headerDesc)}</div>
        )}
      </PageTitle>
        )}
      {FormWrapper ? (
        <FormWrapper {...formWrapperProps}>
          {content}
        </FormWrapper>
      ) : (
        <Box>{content}</Box>
      )}
    </Layout>
    )
};
RestEditComponent.propTypes = {
  location: PropTypes.object,
  showModal: PropTypes.bool,
  header: PropTypes.any,
  noCardWrapper: PropTypes.bool,
  breadCrumb: PropTypes.array,
  FormWrapper: PropTypes.node,
  formWrapperProps: PropTypes.object,
  extraHeader: PropTypes.string,
  extraHeaderUrl: PropTypes.string,
  headerDesc: PropTypes.string,
};

RestEditComponent.defaultProps = {
  noCardWrapper: false,
};

export default RestEditComponent;
