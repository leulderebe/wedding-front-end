import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  email,
  required,
  useRedirect
} from 'react-admin';

const EventPlannerCreate = () => {
  const redirect = useRedirect();

  const onSuccess = () => {
    redirect('/dashboard/event-planner');
  };

  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="password" validate={[required()]} />
        <TextInput source="phone" type='tel' validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export default EventPlannerCreate;