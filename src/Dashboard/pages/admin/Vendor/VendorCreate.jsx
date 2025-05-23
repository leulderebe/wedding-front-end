import React from 'react';
import { 
  Create, 
  SimpleForm, 
  TextInput, 
  BooleanInput,
  SelectInput,
  email,
  required
} from 'react-admin';

const VendorCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <SelectInput source="type" choices={[
          { id: 'venue', name: 'Venue' },
          { id: 'catering', name: 'Catering' },
          { id: 'photography', name: 'Photography' },
          { id: 'flowers', name: 'Flowers' },
          { id: 'music', name: 'Music' },
          { id: 'other', name: 'Other' },
        ]} validate={required()} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default VendorCreate;