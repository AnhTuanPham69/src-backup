import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { makeBreadCrumbFromPath } from 'utils/tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import BackButton from '../../RestActions/BackButton';
import RestCreateForm from '../RestCreateForm';
import Layout from '../../common/Layout';
import Box from '../../common/Box';
import PageTitle from '../../common/PageTitle';
import { ContentWrapper } from './styles';

const RestCreateComponent = (props) => {
  const { onBack, showModal, header, noCardWrapper, breadCrumbs, FormWrapper, formWrapperProps, extraHeader, extraHeaderUrl } = props;
  const location = useLocation();
  const BREADCRUMB_LIST = makeBreadCrumbFromPath(location);
  const actions = <BackButton onBack={onBack} />;

  const content = (
    <ContentWrapper style={{ width: '100%' }}>
      <RestCreateForm {...props} />
    </ContentWrapper>
  );

  return showModal || noCardWrapper ? (
    content
  ) : (
    <Layout bordered={false} extra={actions}>
      {header || (
      <PageTitle>
        <CustomBreadcrumb data={breadCrumbs || BREADCRUMB_LIST} />
        {extraHeader && (
          <Link to={extraHeaderUrl} style={{ color: '#000' }}>
            <p style={{margin: 0, padding: 0}}>{extraHeader}</p>
          </Link>
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
    );
};

RestCreateComponent.propTypes = {
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  header: PropTypes.any,
  location: PropTypes.object,
  noCardWrapper: PropTypes.bool,
  breadCrumbs: PropTypes.array,
  FormWrapper: PropTypes.node,
  formWrapperProps: PropTypes.object,
  extraHeader: PropTypes.string,
  extraHeaderUrl: PropTypes.string,
};
RestCreateComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestCreateComponent;
