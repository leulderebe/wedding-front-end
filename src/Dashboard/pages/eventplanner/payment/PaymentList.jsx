import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  useRecordContext,
} from "react-admin";
import { Box, Typography, Alert, Chip } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// Custom empty component with better UI
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
      No payments found
    </Typography>
    <Typography variant="body2" color="text.secondary">
      There are no payment records matching your criteria.
    </Typography>
  </Box>
);

// Custom error component
const Error = () => (
  <Box padding={2}>
    <Alert severity="error">
      An error occurred while loading payment data. Please try refreshing the
      page.
    </Alert>
  </Box>
);

// Custom status field with conditional coloring
const StatusField = () => {
  const record = useRecordContext();
  if (!record) return null;

  const status = record.status;
  let color = "default";

  if (status === "COMPLETED") color = "success";
  else if (status === "PENDING") color = "warning";
  else if (status === "FAILED") color = "error";

  return <Chip label={status} color={color} size="small" />;
};

const PaymentList = () => {
  return (
    <List
      empty={<Empty />}
      error={<Error />}
    >
      <Datagrid bulkActionButtons={false}>
        <TextField source="payer.firstName" label="Client First Name" />
        <TextField source="payer.lastName" label="Client Last Name" />
        <TextField source="booking.serviceName" label="Service" />
        <NumberField
          source="amount"
          options={{ style: "currency", currency: "ETB" }}
        />
        <StatusField source="status" label="Status" />
        <TextField source="method" label="Payment Method" />
        <DateField source="createdAt" showTime label="Date" />
      </Datagrid>
    </List>
  );
};

export default PaymentList;
