import React, {useState} from 'react';
import Create from '../../rest/Create';
import CreateForm from '../components/CreateForm';

const UsersCreate = props => {
  const [role, setRole] = useState()
  return(
    <Create
      {...props}
      resource="users"
      defaultOptions={{
      formatResult: (result, data) => ({
        ...result,
        role: {
          name: data.roleName,
        },
      }),
    }}
    >
      <CreateForm role={role} setRole={setRole} />
    </Create>
)};

UsersCreate.propTypes = {};

export default UsersCreate;
