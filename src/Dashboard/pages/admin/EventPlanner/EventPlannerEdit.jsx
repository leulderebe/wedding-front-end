import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  email,
  required,
  useRedirect
} from 'react-admin';

const EventPlannerEdit = () => {
  const redirect = useRedirect();

  const onSuccess = () => {
    redirect('/dashboard/event-planner');
  };

  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="phone" type="tel" />
      </SimpleForm>
    </Edit>
  );
};

export default EventPlannerEdit;