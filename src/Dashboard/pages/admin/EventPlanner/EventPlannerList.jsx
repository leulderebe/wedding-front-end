import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";
import { Box, Typography, Chip, Alert } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";

// Custom empty component
const Empty = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    padding={4}
    gap={2}
  >
    <ErrorOutlineIcon sx={{ fontSize: 60, color: "text.secondary" }} />
    <Typography variant="h6" color="text.secondary">
      No event planners found
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Try adjusting your search filters or add a new event planner.
    </Typography>
  </Box>
);

// Custom error component
const Error = () => (
  <Box padding={2}>
    <Alert severity="error">
      An error occurred while loading event planner data. Please try refreshing
      the page.
    </Alert>
  </Box>
);

// Status field with colored chips
const StatusField = ({ record }) => {
  if (!record) return null;

  return record.isActive ? (
    <Chip
      icon={<CheckCircleIcon />}
      label="Active"
      color="success"
      size="small"
    />
  ) : (
    <Chip icon={<BlockIcon />} label="Inactive" color="error" size="small" />
  );
};

const EventPlannerList = () => {
  return (
    <List
      resource="event-planner"
    >
      <Datagrid>
        <TextField source="name" label="Name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <DateField source="createdAt" label="Registered On" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default EventPlannerList;
