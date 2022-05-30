import React from 'react';
import Reference from 'containers/rest/Reference';
import EditButton from 'components/RestActions/EditButton';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import DeleteButton from 'components/RestActions/DeleteButton';
import UserInfo from 'components/RestField/UserInfo';
import ShowButton from 'components/RestActions/ShowButton';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Filter from '../components/Filter';
import List from '../../rest/List';

const ProgramPhasesList = (props) => {
  const history = useHistory();
  
  return (
    <List
      hasCreateHeaderButton
      filter={<Filter />}
      resource="subscriptionPlans"
      redirects={{
        create: 'screen',
      }}
      // initialFilter={{
      //   orderBy: 'createdAt:DESC',
      // }}
      // createHeader="programs.create"
      initialFilter={{
        orderBy: 'createdAt:DESC',
        ...(props?.businessId && {
          limit: 100,
          filter: {
            businessId: {
              $eq: props?.businessId,
            },
          },
        }),
      }}
      headerDesc="pageHeader.descSubscriptions"
      createHeader="subscriptionPlans.create"
      {...props}
    >
      <RestFieldItem
        width={120}
        sorter
        source="planCode"
        header="subscriptionPlans.planCode"
        format={(data, row) => (
          <UserInfo
            record={{
              ...row?.name,
              name: data,
            }}
            nameProp="name"
            showAvt={false}
            prefixLink={`/subscriptionPlans/${row?.id}/show`}
          />
        )}
      />
      <RestFieldItem
        source="price"
        sorter
        header="subscriptionPlans.price"
        width={170}
        format={(price) => <b>{`$${price}`}</b>}
      />
      <Reference
        defaultOptions={{ customApiResource: 'program-phases' }}
        source="programPhaseId"
        resource="programPhases"
        header="subscriptionPlans.phaseId"
        width={170}
      >
        <RestFieldItem source="name" />
      </Reference>
      <Reference
        source="programId"
        resource="programs"
        header="subscriptionPlans.programId"
        width={170}
      >
        <RestFieldItem source="name" />
      </Reference>
      <RestFieldItem
        source="quantity"
        header="subscriptionPlans.quantity"
        sorter
        width={170}
      />
      {!props?.businessId && (
        <RestFieldItem
          source="business.businessName"
          header="subscriptionPlans.business"
          width={200}
        />
      )}

      {/* <RestFieldItem
        source="unit"
        header="subscriptionPlans.unit"
        width={100}
      /> */}
      <ActionGroup icon="ic-more">
        <ShowButton />
        <EditButton gotoEditPage={(id) => history.push(`/subscriptionPlans/${id}/edit`)} />
        <DeleteButton deleteKey="name" />
      </ActionGroup>
    </List>
  );
};

ProgramPhasesList.propTypes = {
  businessId: PropTypes.string,
};

export default ProgramPhasesList;
