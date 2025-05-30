import React from 'react';
import { 
  List,
  Datagrid,
  TextField
} from 'react-admin';

const feedbackList = () => {
  return (
        <List>
          <Datagrid>
            <TextField source="feedback" />
            <TextField source="description" />
          </Datagrid>
        </List>
  );
};

export default feedbackList;